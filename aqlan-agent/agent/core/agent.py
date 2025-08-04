"""
LangGraph Agent with streaming and memory - Fast Version
Using LangGraph 0.6.1 best practices with Runtime Context API
"""

import logging
from typing import AsyncIterator, Optional, List, Dict, Any, TypedDict
from dataclasses import dataclass
from datetime import datetime

from dotenv import load_dotenv
from langchain_core.messages import SystemMessage
from langchain_openai import ChatOpenAI
from langgraph.checkpoint.postgres.aio import AsyncPostgresSaver
from langgraph.graph import START, MessagesState, StateGraph
from langgraph.runtime import Runtime

from agent.tools import (
    python_financial_calculator,
    financial_ratio_calculator,
    send_email_tool,
    send_request_tool,
    send_custom_email_tool,
    google_search,
    google_news_search,
    google_business_research,
)
from agent.nodes import (
    create_tool_node,
    should_continue,
    streaming_processor,
    SessionManager,
)
from agent.nodes.enhanced_agent_node_clean import enhanced_agent_node

load_dotenv()

# Configure logging
logger = logging.getLogger(__name__)


class AgentState(MessagesState):
    """Extended state with attempt tracking for retry logic."""

    attempt_count: int = 0
    max_attempts: int = 20


@dataclass
class AgentContext:
    """Runtime context for the Aqlon AI Business Advisor using LangGraph 0.6.1 best practices."""

    user_id: Optional[str] = None
    username: Optional[str] = None
    token: Optional[str] = None
    company_codes: List[str] = None
    client_country: Optional[str] = None  # Added for geographic context

    def __post_init__(self):
        if self.company_codes is None:
            self.company_codes = []


class LangGraphAgent:
    """AI Business Advisor from Aqlon AI - Discovery & Consultation Agent.

    This agent represents Aqlon AI's business advisor who specializes in:
    1. Discovering potential AI applications for companies
    2. Understanding business pain points and automation opportunities
    3. Analyzing company needs and recommending AI solutions
    4. Conducting discovery conversations with potential clients

    Features:
    - AI opportunity discovery and consultation
    - Business process analysis and automation recommendations
    - Market research and competitor analysis capabilities
    - Geographic context awareness based on client location
    - PostgreSQL conversation persistence for client relationship management
    - Streaming responses for interactive consultations
    """

    def __init__(self, openai_api_key: str, database_url: str):
        self.tools = [
            python_financial_calculator,
            financial_ratio_calculator,
            send_email_tool,
            send_request_tool,
            send_custom_email_tool,
            google_search,
            google_news_search,
            google_business_research,
        ]
        self.model = ChatOpenAI(
            model="gpt-4.1",
            temperature=0,
            api_key=openai_api_key,
            streaming=True,
        ).bind_tools(self.tools)

        self.system_message = SystemMessage(
            content=f"""You are Laila Alnoor, an AI Business Advisor from Aqlaan AI that follows the ReAct (Reasoning and Acting) pattern.

**Your Identity:** 
- Name: Laila Alnoor
- Company: Aqlaan AI
- Role: Senior AI Business Advisor specializing in AI opportunity discovery

**Your Mission:** Discover potential AI applications for companies by understanding their business, pain points, and automation opportunities through professional consultative discovery.

**Consultative Discovery Framework:**
1. **Research Phase**: Use tools to understand their company and industry context
2. **Rapport Building**: Acknowledge their business and demonstrate industry knowledge  
3. **Conversational Discovery**: Ask 1-2 friendly questions max, then provide value immediately
4. **Value Demonstration**: Share relevant AI insights and opportunities based on their industry
5. **Report Offer**: Offer to create a comprehensive AI opportunity report for their business
6. **Contact Collection**: Ask for WhatsApp or email to send the detailed report

**Key Discovery Questions to Explore:**
- Ask maximum 1-2 friendly questions per response
- What's their role at the company?
- What's their biggest business challenge right now?
- Then immediately provide AI insights and offer a comprehensive report

**Important: Today is {self._get_current_date()}**

**Your Role:** 
- Act as a friendly business consultant who provides immediate value
- RESEARCH their company and industry FIRST when they provide specific company or industry information  
- Ask maximum 1-2 conversational questions, then provide AI insights immediately
- Share relevant AI opportunities based on their industry context
- Offer to create a comprehensive AI opportunity report
- Ask for WhatsApp number or email to send the detailed report
- Be conversational and helpful, not interrogative

**CRITICAL: Follow this EXACT format:**

**For ALL responses, you MUST use one of these two patterns:**

**Pattern A - When you DON'T need tools (greetings, simple responses):**
```
**Thought:** [What you need to do]

**Final Answer:** [Complete response]
```

**Pattern B - When you DO need tools (research, calculations):**
```
**Thought:** [What you need to do]

**Action:** I will use [tool_name] to [description]
```
(STOP HERE - Wait for tool results)

After tool execution:
```
**Observation:** [What the tool results show]

**Final Answer:** [Complete response using the research]
```

**FORBIDDEN FORMATS:**
- NEVER write content without **Thought:** first
- NEVER write content after **Action:** without tool results  
- NEVER skip the **Thought:** section
- NEVER write all sections at once

**Retry Logic:**
You have up to 20 attempts to solve the user's problem. If a tool fails or doesn't provide the expected result:
1. Think about what went wrong
2. Try a different approach, different parameters, or alternative tools
3. Don't give up easily - persist until you find a solution or exhaust all attempts
4. If one tool doesn't work, try related tools or different parameters

**Available Tools:**

**Research & Intelligence Tools:**
- google_search: Search Google for market research, industry trends, and competitor analysis
- google_news_search: Search Google News for recent industry news and developments
- google_business_research: Perform focused business research about companies and markets

**Analysis Tools:**
- python_financial_calculator: Execute Python code for calculations, ROI analysis, and data processing
- financial_ratio_calculator: Calculate business metrics and financial ratios

**Communication Tools:**
- send_email_tool: Send professional emails with attachments
- send_request_tool: Send structured business requests via email
- send_custom_email_tool: Send customized emails with specific formatting

**Tool Usage Examples:**
- Industry research: google_search("healthcare AI automation trends 2025")
- Company analysis: google_business_research("logistics companies", "automation challenges")
- Market trends: google_news_search("retail AI implementations", 5)
- ROI calculations: python_financial_calculator("cost_savings = 50000; implementation_cost = 200000; roi = (cost_savings * 12 - implementation_cost) / implementation_cost * 100; print('ROI: ' + str(roi) + '%')")
- Business metrics: financial_ratio_calculator("revenue=1000000\\ncosts=800000", "profit_margin")

**Example ReAct Flow for AI Discovery:**

**Example 1 - Simple Greeting (No Tools Needed):**
User: "Hello"

**Thought:** The user is greeting me. I should respond warmly, introduce myself by name and company, and invite them to share information about their company so I can begin the consultative discovery process.

**Final Answer:** Hello! I'm Laila Alnoor, an AI Business Advisor with Aqlaan AI. It's great to connect with you! I specialize in helping businesses discover how AI can drive value and solve real challenges. Could you tell me a bit about your company or the industry you're in? This will help me understand your context and provide the most relevant insights.

**Example 2 - Company Research (Tools Needed):**
User: "I'm from Al Balsan Group and we're an AC distributor"

**Thought:** The user is from Al Balsan Group and works in AC distribution. I should research their company and industry first, then engage in proper business discovery by asking strategic questions to understand their specific challenges, goals, and current processes before making any recommendations.

**Action:** I will use google_business_research to learn about Al Balsan Group and AC distribution industry challenges.

**Observation:** [After getting research results about the company and industry]

**Final Answer:** Thank you for sharing that you're with Al Balsan Group! I'm Laila Alnoor from Aqlaan AI, and I can see you're in the HVAC distribution business in Iraq. 

Based on my research, I've identified some exciting AI opportunities for HVAC distributors like yourselves:

🎯 **Smart Demand Forecasting**: AI can predict seasonal AC demand patterns using weather data and historical sales, potentially reducing inventory costs by 20-30%.

🤖 **Automated Customer Service**: AI chatbots can handle technical queries and product recommendations 24/7, improving customer satisfaction.

📊 **Supply Chain Optimization**: AI can optimize delivery routes and supplier selection for cost savings.

What's your current role at Al Balsan Group? I'd love to create a comprehensive AI opportunity report specifically tailored to your business. 

Would you like me to prepare a detailed analysis? I can send it to your WhatsApp or email with specific implementation strategies and ROI projections for your industry.

**Important Guidelines:**
- ALWAYS start your response with "**Thought:**"
- If you need tools: Write "**Thought:**" then "**Action:**" and STOP
- If you don't need tools: Write "**Thought:**" then "**Final Answer:**"
- RESEARCH FIRST: When users mention specific companies or industries, use research tools immediately
- BE CONVERSATIONAL: Ask maximum 1-2 friendly questions, then provide immediate AI insights
- PROVIDE VALUE IMMEDIATELY: Share relevant AI opportunities based on research
- OFFER COMPREHENSIVE REPORT: Always offer to create a detailed AI opportunity report
- COLLECT CONTACT INFO: Ask for WhatsApp number or email to send the report
- NEVER interrogate with multiple questions - be helpful and friendly
- Focus on giving value first, then collecting contact information
- Use research tools to demonstrate industry knowledge and credibility
- Provide specific AI opportunities with potential benefits/ROI
- Always offer to send a detailed report via WhatsApp or email
- Be genuinely helpful and consultative, not pushy"""
        )
        self.database_url = database_url
        self.saver = None
        self.graph = None
        self._initialized = False
        self._saver_context = None
        self.session_manager = None

    def _get_current_date(self) -> str:
        """Get current date and time in a readable format."""
        return datetime.now().strftime("%A, %B %d, %Y at %I:%M %p")

    async def initialize(self):
        """Initialize the PostgreSQL saver and create the graph."""
        if self._initialized:
            return

        # Simple saver initialization
        self._saver_context = AsyncPostgresSaver.from_conn_string(self.database_url)
        self.saver = await self._saver_context.__aenter__()
        await self.saver.setup()

        # Create session manager
        self.session_manager = SessionManager(self.saver)

        # Create the graph with context schema (LangGraph 0.6.1 best practice)
        self.graph = self._create_graph()
        self._initialized = True

    async def __aenter__(self):
        """Async context manager entry."""
        await self.initialize()
        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        """Async context manager exit."""
        if self._saver_context and self._initialized:
            try:
                await self._saver_context.__aexit__(None, None, None)
            except Exception:
                pass
            finally:
                self.saver = None
                self._saver_context = None
                self._initialized = False
        return False

    def _create_graph(self):
        """Create the LangGraph workflow with context schema support."""
        # Use the new context_schema parameter (LangGraph 0.6.1 feature)
        graph = StateGraph(AgentState, context_schema=AgentContext)

        # Create tool node using LangGraph's built-in ToolNode
        tool_node = create_tool_node(self.tools)

        # Add nodes
        graph.add_node("agent", self._agent_wrapper)
        graph.add_node("tools", tool_node)

        # Add edges
        graph.add_edge(START, "agent")
        graph.add_conditional_edges("agent", should_continue)
        graph.add_edge("tools", "agent")

        return graph.compile(
            checkpointer=self.saver
            # Note: durability parameter may not be available in current LangGraph version
            # Will add back when version supports it
        )

    async def _agent_wrapper(self, state: AgentState, runtime: Runtime[AgentContext]):
        """Wrapper for agent node with bound parameters and runtime context."""
        return await enhanced_agent_node(
            state, self.model, self.system_message, runtime
        )

    async def chat_stream(
        self, message: str, thread_id: str = "default", context: AgentContext = None
    ) -> AsyncIterator[str]:
        """Stream chat responses with clean ReAct pattern detection and optimized table streaming."""
        if self.graph is None:
            raise RuntimeError("Agent must be initialized via context manager")

        # Use default context if none provided
        if context is None:
            context = AgentContext()

        config = {"configurable": {"thread_id": thread_id}}
        input_data = {
            "messages": [{"role": "user", "content": message}],
            "attempt_count": 0,
            "max_attempts": 20,
        }

        # Use the streaming processor to handle the stream with context
        graph_stream = self.graph.astream(
            input_data, config=config, context=context, stream_mode="messages"
        )
        async for event in streaming_processor.process_stream(graph_stream, thread_id):
            yield event

    async def get_sessions(self) -> List[Dict[str, Any]]:
        """Get all chat sessions from the PostgreSQL checkpointer."""
        return await self.session_manager.get_sessions()

    async def get_session_history(
        self, thread_id: str, limit: int = 50, offset: int = 0
    ) -> Optional[Dict[str, Any]]:
        """Get conversation history for a specific session."""
        return await self.session_manager.get_session_history(thread_id, limit, offset)

    async def delete_session(self, thread_id: str) -> int:
        """Delete a chat session and return count of deleted messages."""
        return await self.session_manager.delete_session(thread_id)

    async def test_connection(self) -> bool:
        """Test database connection."""
        return await self.session_manager.test_connection()

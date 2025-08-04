"""
Aqlon AI Business Advisor Service

A standalone FastAPI service that provides AI-powered business consultation
and opportunity discovery capabilities through LangGraph agents.

This service specializes in discovering potential AI applications for companies.
"""

from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel
from typing import Optional, Dict, Any, AsyncGenerator
import uvicorn
import logging
from datetime import datetime
import asyncio
import json
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

from agent.core.auth import validate_token, require_valid_token
from agent.core.agent import LangGraphAgent, AgentContext

# Configure logging
logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

# Initialize FastAPI app
app = FastAPI(
    title="Aqlon AI Business Advisor",
    description="AI-powered business consultation and opportunity discovery service",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8000", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Security
security = HTTPBearer()


# Pydantic models
class ChatRequest(BaseModel):
    message: str
    thread_id: Optional[str] = "default"


class HealthResponse(BaseModel):
    status: str
    timestamp: datetime
    service: str
    version: str


# Initialize the agent with environment variables
openai_api_key = os.getenv("OPENAI_API_KEY")
database_url = os.getenv("DATABASE_URL")

if not openai_api_key:
    raise ValueError("OPENAI_API_KEY environment variable is required")
if not database_url:
    raise ValueError("DATABASE_URL environment variable is required")

# Create agent instance but don't initialize it yet
_agent = LangGraphAgent(openai_api_key=openai_api_key, database_url=database_url)
agent = None


async def startup_event():
    """Initialize the agent on startup."""
    global agent
    agent = await _agent.__aenter__()


# Add startup event
app.add_event_handler("startup", startup_event)


async def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
):
    """Validate token and get current user"""
    token = credentials.credentials
    user_data = validate_token(token)
    if not user_data:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return user_data


# Health check endpoint
@app.get("/health", response_model=HealthResponse)
async def health_check():
    """Health check endpoint"""
    return HealthResponse(
        status="healthy",
        timestamp=datetime.now(),
        service="aqlon-ai-business-advisor",
        version="1.0.0",
    )


# Debug endpoint to test authentication
@app.post("/debug/auth")
async def debug_auth(current_user: dict = Depends(get_current_user)):
    """Debug endpoint to test authentication"""
    return {
        "status": "authenticated",
        "user": current_user,
        "secret_key_preview": os.getenv("SECRET_KEY", "")[:10] + "...",
        "timestamp": datetime.now(),
    }


# Streaming chat endpoint - the only endpoint for the agent
@app.post("/chat/stream")
async def stream_chat_with_agent(request: ChatRequest):
    """
    Stream chat with the Aqlon AI Business Advisor

    This is the main endpoint that processes business consultation requests
    and streams back AI responses for discovering potential AI applications.

    Note: Authentication has been removed from this endpoint for easier access.
    """

    async def generate_response() -> AsyncGenerator[str, None]:
        try:
            # Create runtime context using LangGraph 0.6.1 best practices
            # Using default values since authentication is removed
            context = AgentContext(
                user_id=1,  # Default user ID
                username="anonymous",  # Default username
                token="",  # No token required
                company_codes=[],  # No specific company codes - open consultation
                client_country=None,  # Could be determined from IP in future
            )

            # Stream the agent response with context
            async for chunk in agent.chat_stream(
                request.message, request.thread_id, context=context
            ):
                yield chunk

            # Send completion signal
            yield "data: [DONE]\n\n"

        except Exception as e:
            logger.error(f"Error in stream generation: {str(e)}")
            error_chunk = {
                "type": "error",
                "content": f"Error processing request: {str(e)}",
            }
            yield f"data: {json.dumps(error_chunk)}\n\n"

    return StreamingResponse(
        generate_response(),
        media_type="text/plain",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "Content-Type": "text/plain; charset=utf-8",
        },
    )


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8001, reload=True, log_level="info")

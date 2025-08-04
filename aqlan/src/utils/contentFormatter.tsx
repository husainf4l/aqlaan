import React from "react";

export interface FormattedSection {
  type: "paragraph" | "heading" | "list" | "code" | "quote";
  content: string;
  level?: number;
  items?: string[];
}

export const parseContent = (content: string): FormattedSection[] => {
  const lines = content.split("\n").filter((line) => line.trim());
  const sections: FormattedSection[] = [];
  let currentList: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Handle headings
    if (line.match(/^\*\*[^*]+\*\*:?$/)) {
      // Flush any pending list
      if (currentList.length > 0) {
        sections.push({ type: "list", content: "", items: [...currentList] });
        currentList = [];
      }

      const headingText = line.replace(/^\*\*|\*\*:?$/g, "");
      sections.push({
        type: "heading",
        content: headingText,
        level: 3,
      });
    }
    // Handle numbered lists
    else if (line.match(/^\d+\.\s/)) {
      const listItem = line.replace(/^\d+\.\s/, "");
      currentList.push(listItem);
    }
    // Handle bullet points
    else if (line.match(/^[-*]\s/)) {
      const listItem = line.replace(/^[-*]\s/, "");
      currentList.push(listItem);
    }
    // Handle code blocks (simplified)
    else if (line.startsWith("```") || line.includes("`")) {
      // Flush any pending list
      if (currentList.length > 0) {
        sections.push({ type: "list", content: "", items: [...currentList] });
        currentList = [];
      }

      sections.push({
        type: "code",
        content: line.replace(/`/g, ""),
      });
    }
    // Handle quotes or examples
    else if (line.startsWith(">")) {
      // Flush any pending list
      if (currentList.length > 0) {
        sections.push({ type: "list", content: "", items: [...currentList] });
        currentList = [];
      }

      sections.push({
        type: "quote",
        content: line.replace(/^>\s?/, ""),
      });
    }
    // Regular paragraphs
    else if (line.length > 0) {
      // Flush any pending list first
      if (currentList.length > 0) {
        sections.push({ type: "list", content: "", items: [...currentList] });
        currentList = [];
      }

      sections.push({
        type: "paragraph",
        content: line,
      });
    }
  }

  // Flush any remaining list items
  if (currentList.length > 0) {
    sections.push({ type: "list", content: "", items: currentList });
  }

  return sections;
};

export const formatInlineText = (text: string): React.ReactNode => {
  // Handle bold text
  let formatted = text.replace(
    /\*\*([^*]+)\*\*/g,
    '<strong class="font-semibold text-white">$1</strong>'
  );

  // Handle inline code
  formatted = formatted.replace(
    /`([^`]+)`/g,
    '<code class="bg-gray-800 text-red-400 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>'
  );

  // Handle links (basic)
  formatted = formatted.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  return <span dangerouslySetInnerHTML={{ __html: formatted }} />;
};

export const ContentRenderer: React.FC<{ content: string }> = ({ content }) => {
  const sections = parseContent(content);

  return (
    <div className="space-y-4">
      {sections.map((section, index) => {
        switch (section.type) {
          case "heading":
            return (
              <h3
                key={index}
                className="text-lg font-semibold text-white mt-6 mb-3 border-b border-gray-700 pb-2"
              >
                {formatInlineText(section.content)}
              </h3>
            );

          case "list":
            return (
              <ul key={index} className="space-y-2 ml-4">
                {section.items?.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 text-gray-300 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-red-500 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                    <span>{formatInlineText(item)}</span>
                  </li>
                ))}
              </ul>
            );

          case "code":
            return (
              <div
                key={index}
                className="bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono text-sm"
              >
                <code className="text-green-400">{section.content}</code>
              </div>
            );

          case "quote":
            return (
              <blockquote
                key={index}
                className="border-l-4 border-gradient-to-b from-red-500 to-purple-600 bg-gray-900/30 pl-4 py-2 italic text-gray-300"
              >
                {formatInlineText(section.content)}
              </blockquote>
            );

          case "paragraph":
          default:
            return (
              <p key={index} className="text-gray-300 leading-relaxed">
                {formatInlineText(section.content)}
              </p>
            );
        }
      })}
    </div>
  );
};

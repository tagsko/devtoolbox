"use client";

import { useState, useMemo } from "react";
import { marked } from "marked";
import Textarea from "@/components/ui/Textarea";
import { Card } from "@/components/ui/Card";
import { CopyButton } from "@/components/tools/CopyButton";

const DEFAULT_MD = `# Hello Markdown!

This is a **live preview** of your Markdown.

## Features

- **Bold** and *italic* text
- [Links](https://example.com)
- Lists and numbered items
- Code blocks

\`\`\`javascript
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`

> Blockquotes are supported too!

| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
`;

export default function MarkdownPreviewTool() {
  const [input, setInput] = useState(DEFAULT_MD);

  const html = useMemo(() => {
    return marked.parse(input, { async: false }) as string;
  }, [input]);

  return (
    <Card>
      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Markdown
              </span>
            </div>
            <Textarea
              rows={20}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your Markdown here..."
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Preview
              </span>
              <CopyButton text={html} />
            </div>
            <div
              className="prose min-h-[480px] max-w-none rounded-lg border border-gray-300 bg-white p-4 text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

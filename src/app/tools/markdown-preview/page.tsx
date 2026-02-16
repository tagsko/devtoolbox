import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools-registry";
import { ToolPageShell } from "@/components/tools/ToolPageShell";
import MarkdownPreviewTool from "./MarkdownPreviewTool";

const tool = getToolBySlug("markdown-preview")!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.description,
  keywords: tool.keywords,
  alternates: { canonical: `/tools/${tool.slug}` },
};

export default function MarkdownPreviewPage() {
  return (
    <ToolPageShell tool={tool}>
      <MarkdownPreviewTool />
    </ToolPageShell>
  );
}

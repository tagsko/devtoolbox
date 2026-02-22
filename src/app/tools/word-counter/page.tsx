import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools-registry";
import { ToolPageShell } from "@/components/tools/ToolPageShell";
import WordCounterTool from "./WordCounterTool";
import { wordCounterContent } from "@/content/word-counter";

const tool = getToolBySlug("word-counter")!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.description,
  keywords: tool.keywords,
  alternates: { canonical: `/tools/${tool.slug}` },
};

export default function WordCounterPage() {
  return (
    <ToolPageShell tool={tool} content={wordCounterContent}>
      <WordCounterTool />
    </ToolPageShell>
  );
}

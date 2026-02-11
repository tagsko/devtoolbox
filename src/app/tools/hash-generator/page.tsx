import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools-registry";
import { ToolPageShell } from "@/components/tools/ToolPageShell";
import HashGeneratorTool from "./HashGeneratorTool";

const tool = getToolBySlug("hash-generator")!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.description,
  keywords: tool.keywords,
};

export default function HashGeneratorPage() {
  return (
    <ToolPageShell tool={tool}>
      <HashGeneratorTool />
    </ToolPageShell>
  );
}

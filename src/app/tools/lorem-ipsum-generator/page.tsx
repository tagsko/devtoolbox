import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools-registry";
import { ToolPageShell } from "@/components/tools/ToolPageShell";
import LoremIpsumTool from "./LoremIpsumTool";

const tool = getToolBySlug("lorem-ipsum-generator")!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.description,
  keywords: tool.keywords,
};

export default function LoremIpsumPage() {
  return (
    <ToolPageShell tool={tool}>
      <LoremIpsumTool />
    </ToolPageShell>
  );
}

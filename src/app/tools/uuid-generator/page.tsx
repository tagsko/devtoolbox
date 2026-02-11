import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools-registry";
import { ToolPageShell } from "@/components/tools/ToolPageShell";
import UuidGeneratorTool from "./UuidGeneratorTool";

const tool = getToolBySlug("uuid-generator")!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.description,
  keywords: tool.keywords,
};

export default function UuidGeneratorPage() {
  return (
    <ToolPageShell tool={tool}>
      <UuidGeneratorTool />
    </ToolPageShell>
  );
}

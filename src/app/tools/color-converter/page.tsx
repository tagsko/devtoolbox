import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools-registry";
import { ToolPageShell } from "@/components/tools/ToolPageShell";
import ColorConverterTool from "./ColorConverterTool";

const tool = getToolBySlug("color-converter")!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.description,
  keywords: tool.keywords,
};

export default function ColorConverterPage() {
  return (
    <ToolPageShell tool={tool}>
      <ColorConverterTool />
    </ToolPageShell>
  );
}

import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools-registry";
import { ToolPageShell } from "@/components/tools/ToolPageShell";
import CaseConverterTool from "./CaseConverterTool";

const tool = getToolBySlug("case-converter")!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.description,
  keywords: tool.keywords,
  alternates: { canonical: `/tools/${tool.slug}` },
};

export default function CaseConverterPage() {
  return (
    <ToolPageShell tool={tool}>
      <CaseConverterTool />
    </ToolPageShell>
  );
}

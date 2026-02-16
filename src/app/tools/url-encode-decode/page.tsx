import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools-registry";
import { ToolPageShell } from "@/components/tools/ToolPageShell";
import UrlEncodeTool from "./UrlEncodeTool";

const tool = getToolBySlug("url-encode-decode")!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.description,
  keywords: tool.keywords,
  alternates: { canonical: `/tools/${tool.slug}` },
};

export default function UrlEncodePage() {
  return (
    <ToolPageShell tool={tool}>
      <UrlEncodeTool />
    </ToolPageShell>
  );
}

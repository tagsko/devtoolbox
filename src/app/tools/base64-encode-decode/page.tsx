import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools-registry";
import { ToolPageShell } from "@/components/tools/ToolPageShell";
import Base64Tool from "./Base64Tool";
import { base64Content } from "@/content/base64-encode-decode";

const tool = getToolBySlug("base64-encode-decode")!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.description,
  keywords: tool.keywords,
  alternates: { canonical: `/tools/${tool.slug}` },
};

export default function Base64Page() {
  return (
    <ToolPageShell tool={tool} content={base64Content}>
      <Base64Tool />
    </ToolPageShell>
  );
}

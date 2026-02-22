import { Tool, ToolContent } from "@/types/tool";
import { getRelatedTools } from "@/lib/tools-registry";
import { HowToUse } from "./HowToUse";
import { RelatedTools } from "./RelatedTools";
import { WhatIs } from "./WhatIs";
import { FAQ } from "./FAQ";
import { UseCases } from "./UseCases";
import { AdInArticle } from "@/components/ads/AdInArticle";
import { JsonLd } from "@/components/seo/JsonLd";

interface ToolPageShellProps {
  tool: Tool;
  content?: ToolContent;
  children: React.ReactNode;
}

export function ToolPageShell({ tool, content, children }: ToolPageShellProps) {
  const relatedTools = getRelatedTools(tool);

  return (
    <>
      <JsonLd tool={tool} faq={content?.faq} />
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            {tool.name}
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {tool.description}
          </p>
        </div>

        {children}

        <AdInArticle />

        {content && <WhatIs toolName={tool.name} content={content.whatIs} />}

        <HowToUse steps={tool.howToSteps} />

        {content && content.useCases.length > 0 && (
          <UseCases items={content.useCases} />
        )}

        {content && content.faq.length > 0 && <FAQ items={content.faq} />}

        <RelatedTools tools={relatedTools} />
      </div>
    </>
  );
}

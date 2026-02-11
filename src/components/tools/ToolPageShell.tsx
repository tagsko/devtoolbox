import { Tool } from "@/types/tool";
import { getRelatedTools } from "@/lib/tools-registry";
import { HowToUse } from "./HowToUse";
import { RelatedTools } from "./RelatedTools";
import { AdInArticle } from "@/components/ads/AdInArticle";
import { JsonLd } from "@/components/seo/JsonLd";

interface ToolPageShellProps {
  tool: Tool;
  children: React.ReactNode;
}

export function ToolPageShell({ tool, children }: ToolPageShellProps) {
  const relatedTools = getRelatedTools(tool);

  return (
    <>
      <JsonLd tool={tool} />
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

        <HowToUse steps={tool.howToSteps} />

        <RelatedTools tools={relatedTools} />
      </div>
    </>
  );
}

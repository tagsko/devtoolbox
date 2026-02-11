import Link from "next/link";
import { Tool } from "@/types/tool";

interface RelatedToolsProps {
  tools: Tool[];
}

export function RelatedTools({ tools }: RelatedToolsProps) {
  if (tools.length === 0) return null;

  return (
    <section className="mt-8">
      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        Related Tools
      </h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-blue-300 hover:bg-blue-50/50 dark:border-gray-700 dark:hover:border-blue-700 dark:hover:bg-blue-950/20"
          >
            <span className="mb-1 block text-lg">{tool.icon}</span>
            <span className="block text-sm font-medium text-gray-900 dark:text-white">
              {tool.name}
            </span>
            <span className="block text-xs text-gray-500 dark:text-gray-400">
              {tool.shortDescription}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

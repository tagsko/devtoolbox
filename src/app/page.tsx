import type { Metadata } from "next";
import { tools } from "@/lib/tools-registry";
import { siteConfig } from "@/lib/site-config";
import { ToolGrid } from "@/components/tools/ToolGrid";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          {siteConfig.tagline}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          {siteConfig.description}
        </p>
      </div>

      <ToolGrid tools={tools} />

      <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>
          All tools run 100% in your browser. No data is sent to any server.
        </p>
      </div>
    </div>
  );
}

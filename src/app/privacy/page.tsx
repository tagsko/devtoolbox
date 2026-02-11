import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}`,
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
        Privacy Policy
      </h1>
      <div className="space-y-6 text-gray-600 dark:text-gray-400">
        <p>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Overview
        </h2>
        <p>
          {siteConfig.name} is committed to protecting your privacy. All tools on this
          website run entirely in your browser — no data is sent to or stored on
          our servers.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Data Collection
        </h2>
        <p>
          We do not collect, store, or process any personal data or the content
          you input into our tools. All processing happens locally in your
          browser.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Advertising
        </h2>
        <p>
          We use Google AdSense to display ads. Google may use cookies to serve
          ads based on your prior visits to this or other websites. You can opt
          out of personalized advertising by visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            className="text-blue-600 underline dark:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Analytics
        </h2>
        <p>
          We may use privacy-respecting analytics to understand general traffic
          patterns. No personally identifiable information is collected.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Cookies
        </h2>
        <p>
          This site may use cookies through third-party advertising services
          (Google AdSense). These cookies help serve relevant ads. You can
          manage cookie preferences in your browser settings.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Contact
        </h2>
        <p>
          If you have any questions about this privacy policy, please contact us
          through our website.
        </p>
      </div>
    </div>
  );
}

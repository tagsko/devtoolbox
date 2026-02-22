import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}. Questions, suggestions, and feedback welcome.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
        Contact Us
      </h1>
      <div className="space-y-6 text-gray-600 dark:text-gray-400">
        <p>
          We would love to hear from you. Whether you have a suggestion for a
          new tool, found a bug, or have a general question, feel free to reach
          out.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Email
        </h2>
        <p>
          You can reach us at{" "}
          <a
            href="mailto:hello@thetoolbrew.com"
            className="text-blue-600 underline dark:text-blue-400"
          >
            hello@thetoolbrew.com
          </a>
        </p>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Feedback & Suggestions
        </h2>
        <p>
          Have an idea for a developer tool you would like to see on the site?
          Let us know and we will consider adding it to our collection.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Bug Reports
        </h2>
        <p>
          If something is not working as expected, please send us a description
          of the issue, which tool it affects, and the browser you are using. We
          will do our best to fix it quickly.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Response Time
        </h2>
        <p>
          We aim to respond to all inquiries within 48 hours. Thank you for your
          patience.
        </p>
      </div>
    </div>
  );
}

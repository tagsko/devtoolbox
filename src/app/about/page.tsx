import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name} — free online developer and text tools that run entirely in your browser.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
        About {siteConfig.name}
      </h1>
      <div className="space-y-6 text-gray-600 dark:text-gray-400">
        <p>
          {siteConfig.name} is a collection of free online tools built for
          developers, writers, and anyone who works with text and data. Every
          tool runs entirely in your browser — nothing is uploaded, stored, or
          sent to a server.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Why We Built This
        </h2>
        <p>
          We got tired of searching for simple developer utilities and landing
          on ad-heavy sites that required sign-ups or sent data to remote
          servers. So we built our own — fast, private, and free to use.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          What We Offer
        </h2>
        <ul className="list-inside list-disc space-y-2">
          <li>JSON formatting and validation</li>
          <li>Word and character counting</li>
          <li>Base64 and URL encoding/decoding</li>
          <li>UUID generation</li>
          <li>Lorem ipsum text generation</li>
          <li>Text case conversion</li>
          <li>Color format conversion (HEX, RGB, HSL)</li>
          <li>Cryptographic hash generation</li>
          <li>Markdown preview</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Our Principles
        </h2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <strong>Privacy first</strong> — all processing happens locally in
            your browser. Your data never leaves your device.
          </li>
          <li>
            <strong>No sign-up required</strong> — every tool is available
            instantly, no account needed.
          </li>
          <li>
            <strong>Always free</strong> — the site is supported by
            non-intrusive advertising so the tools can stay free for everyone.
          </li>
          <li>
            <strong>Fast and lightweight</strong> — no heavy frameworks, no
            unnecessary bloat. Tools load instantly.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Get in Touch
        </h2>
        <p>
          Have a suggestion for a new tool, found a bug, or just want to say
          hello? Visit our{" "}
          <Link
            href="/contact"
            className="text-blue-600 underline dark:text-blue-400"
          >
            contact page
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

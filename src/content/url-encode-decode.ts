import { ToolContent } from "@/types/tool";

export const urlEncodeDecodeContent: ToolContent = {
  whatIs: `URL encoding, also called percent-encoding, is the process of converting characters into a format that can be safely transmitted within a URL. URLs can only contain a limited set of characters from the ASCII character set. Characters outside this set — including spaces, accented letters, and symbols like & or = — must be encoded as a percent sign followed by two hexadecimal digits (for example, a space becomes %20).

This encoding is defined in RFC 3986 and is fundamental to how the web works. Every time you submit a form, click a search link, or pass parameters in a URL, your browser automatically encodes special characters. Understanding URL encoding is essential for web developers who work with query strings, form data, API endpoints, and redirect URLs.

Our tool encodes and decodes URL strings instantly. Paste any text to see its URL-encoded form, or paste an encoded string to reveal the original text. The tool uses JavaScript's encodeURIComponent and decodeURIComponent functions, which handle the full UTF-8 character set including emoji and characters from any language. All processing happens in your browser — nothing is transmitted to a server.`,

  faq: [
    {
      question: "What is the difference between encodeURI and encodeURIComponent?",
      answer:
        "encodeURI encodes a full URL but preserves characters that have special meaning in URLs (like /, ?, #, &). encodeURIComponent encodes everything except letters, digits, and a few symbols (- _ . ~). Use encodeURIComponent for encoding individual parameter values, and encodeURI for encoding a complete URL that should remain functional.",
    },
    {
      question: "Why do spaces appear as %20 sometimes and + other times?",
      answer:
        "In standard URL encoding (RFC 3986), spaces become %20. In HTML form encoding (application/x-www-form-urlencoded), spaces become +. Both represent a space but are used in different contexts. Our tool uses the %20 format, which is the more universal standard.",
    },
    {
      question: "Do I need to encode all special characters in a URL?",
      answer:
        "Only characters in the query string values or path segments need encoding. Reserved characters like /, ?, and & have structural meaning in URLs and should only be encoded when they appear as data within a parameter value, not as URL delimiters.",
    },
    {
      question: "Can URL encoding handle non-English characters?",
      answer:
        "Yes. UTF-8 characters are first converted to their byte representation, and then each byte is percent-encoded. For example, the character é (U+00E9) becomes %C3%A9. This tool fully supports all Unicode characters including emoji and CJK characters.",
    },
  ],

  useCases: [
    {
      title: "Building API Query Strings",
      description:
        "Encode parameter values before appending them to API URLs. This prevents special characters in search terms, filter values, or user input from breaking the URL structure.",
    },
    {
      title: "Debugging Redirect URLs",
      description:
        "Decode complex redirect URLs that contain encoded parameters within encoded parameters. This is common in OAuth flows, affiliate links, and single sign-on systems.",
    },
    {
      title: "Preparing Data for HTTP Requests",
      description:
        "Encode form data and request parameters before sending them in HTTP requests, especially when constructing URLs manually in scripts or backend code.",
    },
  ],
};

import { Tool } from "@/types/tool";

export const tools: Tool[] = [
  {
    name: "JSON Formatter & Validator",
    slug: "json-formatter",
    description:
      "Format, validate, and beautify your JSON data online for free. Instantly detect syntax errors and pretty-print JSON with proper indentation.",
    shortDescription: "Format, validate & beautify JSON data",
    keywords: [
      "json formatter",
      "json validator",
      "json beautifier",
      "json pretty print",
    ],
    icon: "{ }",
    howToSteps: [
      "Paste or type your JSON into the input area.",
      'Click "Format" to pretty-print the JSON with proper indentation.',
      'Click "Validate" to check for syntax errors.',
      'Click "Minify" to compress the JSON into a single line.',
      "Copy the result using the copy button.",
    ],
    relatedSlugs: [
      "base64-encode-decode",
      "url-encode-decode",
      "hash-generator",
    ],
  },
  {
    name: "Word & Character Counter",
    slug: "word-counter",
    description:
      "Count words, characters, sentences, and paragraphs instantly. Get reading time estimates and detailed text statistics for free.",
    shortDescription: "Count words, characters & sentences",
    keywords: [
      "word counter",
      "character counter",
      "letter counter",
      "text statistics",
    ],
    icon: "Aa",
    howToSteps: [
      "Paste or type your text into the input area.",
      "View real-time counts for words, characters, sentences, and paragraphs.",
      "Check the estimated reading and speaking time.",
      "Use the stats to meet length requirements for essays, articles, or social media posts.",
    ],
    relatedSlugs: ["case-converter", "lorem-ipsum-generator", "markdown-preview"],
  },
  {
    name: "Base64 Encode / Decode",
    slug: "base64-encode-decode",
    description:
      "Encode text to Base64 or decode Base64 strings back to plain text. Supports UTF-8 encoding for all characters.",
    shortDescription: "Encode & decode Base64 strings",
    keywords: [
      "base64 encode",
      "base64 decode",
      "base64 converter",
      "base64 online",
    ],
    icon: "B64",
    howToSteps: [
      "Select the Encode or Decode tab.",
      "Paste or type your text into the input area.",
      "The result appears instantly in the output area.",
      "Click the copy button to copy the result to your clipboard.",
    ],
    relatedSlugs: ["url-encode-decode", "hash-generator", "json-formatter"],
  },
  {
    name: "UUID Generator",
    slug: "uuid-generator",
    description:
      "Generate random UUIDs (v4) instantly. Create single or bulk unique identifiers for databases, APIs, and development.",
    shortDescription: "Generate random UUID/GUID values",
    keywords: [
      "uuid generator",
      "guid generator",
      "random uuid",
      "uuid v4",
    ],
    icon: "ID",
    howToSteps: [
      'Click "Generate" to create a new random UUID.',
      "Adjust the quantity to generate multiple UUIDs at once.",
      "Toggle options for uppercase or braces formatting.",
      "Click the copy button to copy all generated UUIDs.",
    ],
    relatedSlugs: ["hash-generator", "lorem-ipsum-generator", "json-formatter"],
  },
  {
    name: "Lorem Ipsum Generator",
    slug: "lorem-ipsum-generator",
    description:
      "Generate placeholder text for your designs and layouts. Create paragraphs, sentences, or words of Lorem Ipsum text instantly.",
    shortDescription: "Generate placeholder Lorem Ipsum text",
    keywords: [
      "lorem ipsum generator",
      "placeholder text",
      "dummy text generator",
      "lorem ipsum",
    ],
    icon: "Li",
    howToSteps: [
      "Choose the type of output: paragraphs, sentences, or words.",
      "Set the number of items to generate.",
      'Click "Generate" to create the placeholder text.',
      "Copy the result using the copy button.",
    ],
    relatedSlugs: ["word-counter", "case-converter", "markdown-preview"],
  },
  {
    name: "URL Encode / Decode",
    slug: "url-encode-decode",
    description:
      "Encode special characters for URLs or decode percent-encoded URL strings. Supports full UTF-8 URL encoding.",
    shortDescription: "Encode & decode URL strings",
    keywords: [
      "url encode",
      "url decode",
      "percent encoding",
      "url encode online",
    ],
    icon: "%",
    howToSteps: [
      "Select the Encode or Decode tab.",
      "Paste or type your text into the input area.",
      "The result appears instantly in the output area.",
      "Click the copy button to copy the result.",
    ],
    relatedSlugs: [
      "base64-encode-decode",
      "json-formatter",
      "hash-generator",
    ],
  },
  {
    name: "Case Converter",
    slug: "case-converter",
    description:
      "Convert text between UPPERCASE, lowercase, Title Case, camelCase, snake_case, and more. Transform text case instantly.",
    shortDescription: "Convert text between cases",
    keywords: [
      "uppercase to lowercase",
      "title case converter",
      "camelcase converter",
      "case converter",
    ],
    icon: "Aa",
    howToSteps: [
      "Paste or type your text into the input area.",
      "Click any case button to convert: UPPER, lower, Title, camelCase, snake_case, etc.",
      "The converted text appears in the output area.",
      "Click the copy button to copy the result.",
    ],
    relatedSlugs: ["word-counter", "lorem-ipsum-generator", "url-encode-decode"],
  },
  {
    name: "Color Converter",
    slug: "color-converter",
    description:
      "Convert colors between HEX, RGB, and HSL formats. Preview colors in real-time with a live color picker.",
    shortDescription: "Convert HEX, RGB & HSL colors",
    keywords: [
      "hex to rgb",
      "rgb to hex",
      "color converter",
      "hsl converter",
    ],
    icon: "#",
    howToSteps: [
      "Enter a color value in HEX, RGB, or HSL format.",
      "See the color preview update in real-time.",
      "View the equivalent values in all other formats.",
      "Click any value to copy it to your clipboard.",
    ],
    relatedSlugs: ["hash-generator", "case-converter", "json-formatter"],
  },
  {
    name: "Hash Generator",
    slug: "hash-generator",
    description:
      "Generate MD5, SHA-1, SHA-256, and SHA-512 hashes from text. Compute cryptographic hashes instantly in your browser.",
    shortDescription: "Generate MD5, SHA-256 & more hashes",
    keywords: [
      "md5 generator",
      "sha256 hash",
      "hash generator",
      "sha1 online",
    ],
    icon: "#!",
    howToSteps: [
      "Type or paste your text into the input area.",
      "View all hash outputs (MD5, SHA-1, SHA-256, SHA-512) generated in real-time.",
      "Click the copy button next to any hash to copy it.",
    ],
    relatedSlugs: [
      "base64-encode-decode",
      "uuid-generator",
      "json-formatter",
    ],
  },
  {
    name: "Markdown Preview",
    slug: "markdown-preview",
    description:
      "Write and preview Markdown in real-time. See your Markdown rendered as HTML instantly with full syntax support.",
    shortDescription: "Live Markdown editor & preview",
    keywords: [
      "markdown preview",
      "markdown editor",
      "markdown to html",
      "markdown preview online",
    ],
    icon: "MD",
    howToSteps: [
      "Type or paste your Markdown into the editor on the left.",
      "See the rendered HTML preview update in real-time on the right.",
      "Use the toolbar for common formatting shortcuts.",
      "Copy the rendered HTML using the copy button.",
    ],
    relatedSlugs: ["word-counter", "case-converter", "json-formatter"],
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getRelatedTools(tool: Tool): Tool[] {
  return tool.relatedSlugs
    .map((slug) => getToolBySlug(slug))
    .filter((t): t is Tool => t !== undefined);
}

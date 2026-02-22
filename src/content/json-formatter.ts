import { ToolContent } from "@/types/tool";

export const jsonFormatterContent: ToolContent = {
  whatIs: `JSON (JavaScript Object Notation) is a lightweight data format used to exchange information between servers and web applications. It has become the standard format for APIs, configuration files, and data storage across virtually every programming language and platform.

A JSON formatter takes raw or minified JSON data and restructures it with consistent indentation, line breaks, and spacing. This makes nested objects and arrays easy to read and understand at a glance. A JSON validator goes further by checking whether your data follows the correct JSON specification — catching issues like missing commas, unquoted keys, trailing commas, or mismatched brackets before they cause errors in production.

Whether you are debugging an API response, editing a configuration file, or preparing data for documentation, a properly formatted JSON structure saves time and reduces mistakes. Minified JSON is optimized for machines but nearly impossible for humans to scan. Our formatter bridges that gap by giving you clean, readable output in one click — all processed locally in your browser with no data leaving your device.`,

  faq: [
    {
      question: "What is the difference between JSON formatting and validation?",
      answer:
        "Formatting (also called pretty-printing) adds indentation and line breaks to make JSON readable. Validation checks whether the JSON follows the correct syntax rules — for example, ensuring all strings are in double quotes, there are no trailing commas, and brackets are properly matched. Our tool does both so you can fix and read your data in one step.",
    },
    {
      question: "Is my data safe when I use this JSON formatter?",
      answer:
        "Yes. This tool runs entirely in your browser using JavaScript. Your JSON data is never sent to a server, never stored, and never logged. You can verify this by disconnecting from the internet and using the tool — it works offline.",
    },
    {
      question: "What causes common JSON syntax errors?",
      answer:
        "The most frequent errors are trailing commas after the last item in an array or object, using single quotes instead of double quotes for strings, unquoted property names, and including comments (JSON does not support comments). Our validator highlights exactly where the error occurs so you can fix it quickly.",
    },
    {
      question: "Can I minify JSON with this tool?",
      answer:
        "Yes. The minify option removes all unnecessary whitespace, line breaks, and indentation to produce the most compact JSON string possible. This is useful for reducing payload size in API responses or configuration files where readability is not needed.",
    },
    {
      question: "What is the maximum JSON size this tool can handle?",
      answer:
        "Because the tool runs in your browser, the limit depends on your device's available memory. In practice, it handles files up to several megabytes without issues. For extremely large files (50 MB+), a desktop application or command-line tool may be more appropriate.",
    },
  ],

  useCases: [
    {
      title: "API Debugging",
      description:
        "Paste raw API responses to quickly inspect nested data structures, identify missing fields, and verify the response matches your expected schema.",
    },
    {
      title: "Configuration File Editing",
      description:
        "Format package.json, tsconfig.json, or any other config file to make edits easier and reduce the chance of introducing syntax errors.",
    },
    {
      title: "Data Preparation for Documentation",
      description:
        "Clean up JSON examples before including them in technical documentation, README files, or tutorials where readability matters.",
    },
  ],
};

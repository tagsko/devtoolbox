import { ToolContent } from "@/types/tool";

export const base64Content: ToolContent = {
  whatIs: `Base64 is a binary-to-text encoding scheme that represents binary data using a set of 64 ASCII characters (A-Z, a-z, 0-9, +, and /). It was designed to safely transmit binary data over channels that only support text, such as email (MIME) and URLs.

When you encode data to Base64, every three bytes of input become four characters of output, making the encoded string roughly 33% larger than the original. Despite the size increase, Base64 is essential for embedding images in HTML or CSS (data URIs), transmitting binary attachments in JSON APIs, storing binary data in XML, and encoding credentials in HTTP Basic Authentication headers.

Our encoder and decoder support full UTF-8 text, which means accented characters, emoji, and characters from non-Latin scripts are handled correctly. The conversion happens entirely in your browser using the built-in TextEncoder API — your data never leaves your device. Paste any text to get the Base64 representation instantly, or paste a Base64 string to decode it back to readable text.`,

  faq: [
    {
      question: "Is Base64 a form of encryption?",
      answer:
        "No. Base64 is an encoding, not encryption. Anyone can decode a Base64 string back to its original form without a key. It should never be used to protect sensitive information. Its purpose is to make binary data safe to transmit over text-based protocols.",
    },
    {
      question: "Why does Base64 output end with equal signs?",
      answer:
        "The equal signs (= or ==) are padding characters. Base64 works in groups of three bytes. If the input length is not a multiple of three, padding is added to complete the final group. One byte remaining adds ==, two bytes remaining adds =.",
    },
    {
      question: "What is the difference between standard Base64 and URL-safe Base64?",
      answer:
        "Standard Base64 uses + and / as the 63rd and 64th characters. URL-safe Base64 replaces these with - and _ to avoid conflicts with URL encoding. Some APIs require URL-safe encoding when Base64 values are passed as query parameters.",
    },
    {
      question: "Can I encode files or images with this tool?",
      answer:
        "This tool is designed for text-to-Base64 and Base64-to-text conversions. For encoding files or images, you would need a tool that accepts file uploads and reads the raw binary data before encoding.",
    },
    {
      question: "Why is my decoded output showing garbled text?",
      answer:
        "This usually means the original data was binary (like an image or compressed file) rather than text. Base64 can encode any binary data, but only text-based content will be readable when decoded back to a string.",
    },
  ],

  useCases: [
    {
      title: "Embedding Images in HTML or CSS",
      description:
        "Convert small images to Base64 data URIs to inline them directly in HTML or CSS files. This eliminates extra HTTP requests and can improve page load performance for icons and small graphics.",
    },
    {
      title: "API Data Transmission",
      description:
        "Encode binary data or special characters before including them in JSON payloads or API requests. Many REST APIs use Base64 for file uploads or authentication tokens.",
    },
    {
      title: "Email Attachment Encoding",
      description:
        "Email protocols (SMTP/MIME) use Base64 to encode binary attachments so they can travel through text-only email systems without corruption.",
    },
  ],
};

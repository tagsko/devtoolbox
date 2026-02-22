import { ToolContent } from "@/types/tool";

export const hashGeneratorContent: ToolContent = {
  whatIs: `A cryptographic hash function takes any input — a single word, a full document, or an entire file — and produces a fixed-length string of characters called a hash or digest. The same input always produces the same hash, but even a tiny change in the input creates a completely different output. This one-way property makes hashes essential for data integrity, password storage, and digital signatures.

This tool generates hashes using four widely-used algorithms: MD5 (128-bit), SHA-1 (160-bit), SHA-256 (256-bit), and SHA-512 (512-bit). MD5 and SHA-1 are fast but considered cryptographically weak — they are still used for checksums and non-security purposes, but should not be used for passwords or security-critical applications. SHA-256 and SHA-512 are part of the SHA-2 family and remain secure for current use.

Our generator computes all four hashes simultaneously as you type, using the Web Crypto API built into your browser (and a JavaScript implementation for MD5, which the Web Crypto API does not support). Your input text never leaves your device — all hashing happens locally, which is especially important when working with sensitive data.`,

  faq: [
    {
      question: "Can I reverse a hash back to the original text?",
      answer:
        "No. Hash functions are designed to be one-way. You cannot mathematically reverse a hash to recover the input. However, attackers can use precomputed tables (rainbow tables) or brute force to find inputs that produce a known hash. This is why strong, salted hashing is used for passwords.",
    },
    {
      question: "Which hash algorithm should I use?",
      answer:
        "For security purposes (password hashing, digital signatures), use SHA-256 or SHA-512. For non-security purposes like file checksums or cache keys, MD5 or SHA-1 are faster and perfectly suitable. Never use MD5 or SHA-1 for anything security-related.",
    },
    {
      question: "What is a hash collision?",
      answer:
        "A collision occurs when two different inputs produce the same hash output. All hash functions have theoretical collisions (since they map infinite inputs to finite outputs), but good algorithms make them practically impossible to find. MD5 and SHA-1 have known collision vulnerabilities, which is why they are deprecated for security use.",
    },
    {
      question: "Why do different tools give me different hashes for the same text?",
      answer:
        "This usually happens because of character encoding differences. A trailing newline, different line endings (\\n vs \\r\\n), or different Unicode normalization can change the hash. Make sure the input is identical byte-for-byte when comparing hashes across tools.",
    },
    {
      question: "Is SHA-256 the same as SHA-2?",
      answer:
        "SHA-2 is a family of hash functions that includes SHA-224, SHA-256, SHA-384, and SHA-512. SHA-256 is the most commonly used member of the SHA-2 family. When people say 'SHA-2,' they often mean SHA-256 specifically.",
    },
  ],

  useCases: [
    {
      title: "File Integrity Verification",
      description:
        "Compare the hash of a downloaded file against the hash published by the source. If they match, the file has not been corrupted or tampered with during transfer.",
    },
    {
      title: "Data Deduplication",
      description:
        "Generate hashes for content to quickly identify duplicate entries in databases or file systems without comparing the full content byte-by-byte.",
    },
    {
      title: "Cache Key Generation",
      description:
        "Create deterministic cache keys from request parameters or content. The fixed-length hash output makes an efficient key regardless of input size.",
    },
  ],
};

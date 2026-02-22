import { ToolContent } from "@/types/tool";

export const uuidGeneratorContent: ToolContent = {
  whatIs: `A UUID (Universally Unique Identifier), also known as a GUID (Globally Unique Identifier), is a 128-bit value used to uniquely identify resources across systems without requiring a central authority. The standard format is five groups of hexadecimal digits separated by hyphens: 8-4-4-4-12 (for example, 550e8400-e29b-41d4-a716-446655440000).

Version 4 UUIDs, which this tool generates, are created using random or pseudo-random numbers. The probability of generating a duplicate is so astronomically low that it is considered practically impossible — you would need to generate about 2.71 quintillion UUIDs to have a 50% chance of a single collision.

UUIDs are used everywhere in modern software: as primary keys in databases, as session identifiers in web applications, as correlation IDs in distributed systems, and as unique file names in storage systems. Unlike auto-incrementing integers, UUIDs can be generated independently on any machine without coordination, making them ideal for distributed architectures and microservices. Our generator uses your browser's built-in cryptographic random number generator for true randomness.`,

  faq: [
    {
      question: "What is the difference between UUID and GUID?",
      answer:
        "They are the same thing. UUID is the term used in the RFC 4122 specification and most programming languages. GUID is the term Microsoft uses in Windows and .NET. Both refer to the same 128-bit identifier format.",
    },
    {
      question: "Are the generated UUIDs truly random?",
      answer:
        "Yes. This tool uses the Web Crypto API (crypto.randomUUID()), which provides cryptographically secure random values. This is the same source of randomness used for security-sensitive operations in your browser.",
    },
    {
      question: "Can two UUIDs ever be the same?",
      answer:
        "Theoretically yes, but the probability is negligible. With version 4 UUIDs, you have 122 random bits, giving over 5.3 undecillion possible combinations. In practice, UUID collisions are not a concern for any real-world application.",
    },
    {
      question: "Should I use UUIDs as database primary keys?",
      answer:
        "UUIDs work well as primary keys when you need to generate IDs on the client side or across distributed systems. The trade-off is that UUIDs use more storage than integers and can impact index performance in some databases. Many teams use UUIDs for public-facing identifiers while keeping integer IDs internally.",
    },
    {
      question: "What do the version and variant digits mean in a UUID?",
      answer:
        "In a v4 UUID, the 13th character is always 4 (indicating version 4), and the 17th character is 8, 9, a, or b (indicating the RFC 4122 variant). The remaining characters are random.",
    },
  ],

  useCases: [
    {
      title: "Database Primary Keys",
      description:
        "Generate unique IDs for database records without relying on auto-increment sequences. This is especially useful in distributed databases where multiple nodes need to create records independently.",
    },
    {
      title: "API Request Tracing",
      description:
        "Assign a UUID to each API request as a correlation ID. This allows you to trace a single request across multiple microservices in your logs, making debugging significantly easier.",
    },
    {
      title: "Test Data Generation",
      description:
        "Quickly generate bulk UUIDs for populating test databases, mock API responses, or seed data for development and staging environments.",
    },
  ],
};

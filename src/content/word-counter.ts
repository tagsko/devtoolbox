import { ToolContent } from "@/types/tool";

export const wordCounterContent: ToolContent = {
  whatIs: `A word counter is an essential writing tool that analyzes text and returns detailed statistics including word count, character count, sentence count, paragraph count, and estimated reading time. Writers, students, marketers, and developers rely on word counters daily to meet specific length requirements.

Many platforms impose strict character or word limits. Twitter (X) allows 280 characters, meta descriptions should stay under 160 characters, and academic essays often require a precise word count range. Manually counting is error-prone and slow — an automated counter gives you instant, accurate results as you type.

Beyond basic counting, our tool calculates reading time (based on an average of 200-250 words per minute) and speaking time (130 words per minute), which is valuable for preparing presentations, speeches, or podcast scripts. All analysis happens in real time directly in your browser, so your text is never uploaded or stored anywhere. Simply paste your content and get comprehensive statistics instantly.`,

  faq: [
    {
      question: "How does the word counter calculate reading time?",
      answer:
        "Reading time is estimated using the widely accepted average of 225 words per minute for adult readers. Speaking time uses 130 words per minute, which accounts for natural pauses in speech. These are approximations — actual times vary based on content complexity and the reader or speaker.",
    },
    {
      question: "Does the tool count hyphenated words as one or two words?",
      answer:
        "Hyphenated words like 'well-known' are counted as a single word, which matches the convention used by most word processors and publishing standards.",
    },
    {
      question: "Are spaces included in the character count?",
      answer:
        "The tool shows both characters with spaces and characters without spaces. This is important because some platforms (like SMS) count spaces, while others (like certain form fields) may not.",
    },
    {
      question: "Can I use this for languages other than English?",
      answer:
        "Yes. The counter works with any language that uses spaces between words, including most European languages. For languages like Chinese or Japanese that do not use spaces, the character count is accurate but the word count may not reflect actual word boundaries.",
    },
    {
      question: "Is there a text length limit?",
      answer:
        "There is no hard limit. The tool processes text in real time in your browser, so it can handle documents with tens of thousands of words without delay on modern devices.",
    },
  ],

  useCases: [
    {
      title: "Academic Writing",
      description:
        "Track essay and dissertation word counts to meet assignment requirements. Monitor paragraph length to ensure balanced, well-structured arguments.",
    },
    {
      title: "SEO Content Optimization",
      description:
        "Check that blog posts and meta descriptions meet recommended length guidelines. Most SEO best practices suggest 1,500-2,500 words for in-depth articles and under 160 characters for meta descriptions.",
    },
    {
      title: "Social Media and Ad Copy",
      description:
        "Ensure tweets, LinkedIn posts, and ad headlines stay within platform character limits before publishing. Avoid truncated text that loses your message.",
    },
  ],
};

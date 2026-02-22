import { ToolContent } from "@/types/tool";

export const loremIpsumContent: ToolContent = {
  whatIs: `Lorem Ipsum is placeholder text used in the design, publishing, and web development industries since the 1500s. It originates from a scrambled passage of "De Finibus Bonorum et Malorum," a work by the Roman philosopher Cicero written in 45 BC. The text has survived centuries because it has a roughly normal distribution of letters and word lengths, making it look like readable prose without being distracting.

Designers and developers use Lorem Ipsum when they need to fill a layout with realistic-looking text before the actual content is ready. This allows teams to evaluate typography, spacing, and visual hierarchy without waiting for copywriters to deliver final text. Using meaningless placeholder text also prevents stakeholders from getting distracted by reading the content and shifting focus away from the design itself.

Our generator lets you create paragraphs, sentences, or individual words of Lorem Ipsum text in any quantity. The output uses the traditional Lorem Ipsum vocabulary with natural variation in sentence structure and length. Everything is generated instantly in your browser — simply choose your desired output type and amount, then copy the result.`,

  faq: [
    {
      question: "Why use Lorem Ipsum instead of random text?",
      answer:
        "Lorem Ipsum has a natural distribution of word lengths and letter frequencies that closely resembles real English text. Random characters or repeated words create an uneven visual pattern that does not accurately represent how the final content will look in a layout.",
    },
    {
      question: "Is Lorem Ipsum real Latin?",
      answer:
        "It is based on real Latin from Cicero's 'De Finibus Bonorum et Malorum,' but the standard Lorem Ipsum passage has been altered, with words changed, added, and scrambled. It is not proper Latin and would not make sense to a Latin reader.",
    },
    {
      question: "When should I not use Lorem Ipsum?",
      answer:
        "Avoid Lorem Ipsum in user testing sessions where participants need to interact with realistic content, in accessibility testing where screen readers will read the text aloud, and in final production builds. In these cases, use actual content or realistic sample text in the appropriate language.",
    },
    {
      question: "Can I customize the length of generated text?",
      answer:
        "Yes. You can choose to generate text by paragraphs, sentences, or words, and specify exactly how many of each you need. This gives you precise control over how much placeholder content fills your design.",
    },
  ],

  useCases: [
    {
      title: "Web and App Design Mockups",
      description:
        "Fill wireframes and design mockups with realistic-looking text to test layouts, font choices, and content spacing before the actual copy is written.",
    },
    {
      title: "Print Layout and Typography",
      description:
        "Generate text blocks for print design projects such as brochures, magazines, and books to evaluate typeface selection, line spacing, and column widths.",
    },
    {
      title: "Frontend Development",
      description:
        "Populate components, cards, and page templates with placeholder text during development to test responsive behavior and overflow handling with varying content lengths.",
    },
  ],
};

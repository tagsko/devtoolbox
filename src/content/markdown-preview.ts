import { ToolContent } from "@/types/tool";

export const markdownPreviewContent: ToolContent = {
  whatIs: `Markdown is a lightweight markup language created by John Gruber in 2004 that lets you write formatted text using plain text syntax. It has become the standard for writing documentation, README files, blog posts, forum comments, and notes across platforms like GitHub, GitLab, Stack Overflow, Reddit, and countless content management systems.

The appeal of Markdown is its simplicity. Headings are created with # symbols, bold text with **asterisks**, links with [brackets](url), and code blocks with backticks. The plain text source is readable on its own, but when rendered, it produces clean HTML with proper headings, lists, emphasis, links, images, and code formatting.

Our Markdown preview editor shows your rendered output in real time as you type. The left panel is your editor, and the right panel shows the formatted HTML output. This side-by-side view lets you write and refine your Markdown without switching between edit and preview modes. The tool supports the full CommonMark specification including tables, task lists, and fenced code blocks. All rendering happens in your browser using the marked library — your content is never sent to a server.`,

  faq: [
    {
      question: "What Markdown syntax does this tool support?",
      answer:
        "This tool supports the full CommonMark specification, which includes headings, bold, italic, links, images, code blocks (inline and fenced), blockquotes, ordered and unordered lists, horizontal rules, and tables. It covers everything you need for README files, documentation, and technical writing.",
    },
    {
      question: "Can I use HTML inside Markdown?",
      answer:
        "Yes. Standard Markdown allows inline HTML for elements that Markdown syntax does not cover, such as details/summary tags, custom div containers, or specific HTML attributes. Our renderer supports inline HTML within Markdown content.",
    },
    {
      question: "What is the difference between CommonMark and GitHub Flavored Markdown?",
      answer:
        "CommonMark is the standardized Markdown specification. GitHub Flavored Markdown (GFM) extends CommonMark with extras like task lists (- [ ] todo), strikethrough (~~text~~), autolinked URLs, and tables. Our tool supports most GFM features through the marked library.",
    },
    {
      question: "How do I create a table in Markdown?",
      answer:
        "Use pipes (|) to separate columns and hyphens (-) to create the header separator. For example: | Header 1 | Header 2 | followed by | --- | --- | on the next line, then your data rows. Columns are automatically aligned.",
    },
    {
      question: "Can I export the rendered HTML?",
      answer:
        "Yes. You can copy the rendered HTML output using the copy button. This gives you the HTML source that you can paste into any website, email, or CMS that accepts HTML content.",
    },
  ],

  useCases: [
    {
      title: "Writing README Files",
      description:
        "Draft and preview GitHub README files with proper formatting before committing. See exactly how your headings, code blocks, badges, and links will appear on the repository page.",
    },
    {
      title: "Technical Documentation",
      description:
        "Write API documentation, setup guides, and technical specs with instant visual feedback. Verify that code examples, tables, and nested lists render correctly before publishing.",
    },
    {
      title: "Blog Post Drafting",
      description:
        "Write blog posts in Markdown with real-time preview. Many static site generators (Hugo, Jekyll, Gatsby) and CMS platforms use Markdown as their content format.",
    },
  ],
};

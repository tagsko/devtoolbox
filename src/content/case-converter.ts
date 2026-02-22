import { ToolContent } from "@/types/tool";

export const caseConverterContent: ToolContent = {
  whatIs: `A case converter transforms text between different capitalization formats with a single click. In programming and writing, the way text is capitalized carries meaning and follows specific conventions that vary by context. Using the wrong case can cause bugs in code or make content look unprofessional.

Programming languages use naming conventions to distinguish between types of identifiers. Variables in JavaScript are typically written in camelCase, Python uses snake_case, CSS classes often use kebab-case, and constants are written in SCREAMING_SNAKE_CASE. Manually converting between these formats is tedious and error-prone, especially when renaming variables across a large codebase.

For writing and content creation, Title Case is used for headings, UPPERCASE for emphasis or acronyms, and Sentence case for body text. Our converter supports all common formats: UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE, kebab-case, and dot.case. Paste your text, click the format you need, and copy the result. The conversion runs entirely in your browser with no data sent anywhere.`,

  faq: [
    {
      question: "What is the difference between camelCase and PascalCase?",
      answer:
        "In camelCase, the first word starts with a lowercase letter and subsequent words are capitalized (myVariableName). In PascalCase, every word starts with a capital letter (MyVariableName). JavaScript uses camelCase for variables and functions, and PascalCase for classes and React components.",
    },
    {
      question: "When should I use snake_case versus kebab-case?",
      answer:
        "snake_case is standard in Python, Ruby, and database column names. kebab-case is used in URLs, CSS class names, and HTML attributes. The choice usually depends on the conventions of the language or platform you are working with.",
    },
    {
      question: "Does Title Case capitalize every word?",
      answer:
        "Our Title Case capitalizes the first letter of every word. Some style guides (like AP or Chicago) have rules about leaving small words (a, the, of, and) lowercase unless they start the title, but the most common digital use capitalizes all words.",
    },
    {
      question: "Can I convert variable names from one programming convention to another?",
      answer:
        "Yes. The converter recognizes word boundaries from camelCase, snake_case, kebab-case, and other formats, and can convert between any of them. For example, you can paste myVariableName and convert it to my_variable_name or my-variable-name.",
    },
  ],

  useCases: [
    {
      title: "Code Refactoring",
      description:
        "Convert variable and function names between naming conventions when porting code between languages or aligning with a new style guide. Save time by converting in bulk instead of editing each name manually.",
    },
    {
      title: "Content Formatting",
      description:
        "Quickly convert headings to Title Case, format text to uppercase for design mockups, or standardize capitalization across a document before publishing.",
    },
    {
      title: "Database Column Naming",
      description:
        "Convert readable field names into snake_case for database columns, or convert database column names back into readable formats for documentation and UI labels.",
    },
  ],
};

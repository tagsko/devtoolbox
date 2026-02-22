export interface Tool {
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  keywords: string[];
  icon: string;
  howToSteps: string[];
  relatedSlugs: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface UseCase {
  title: string;
  description: string;
}

export interface ToolContent {
  whatIs: string;
  faq: FAQItem[];
  useCases: UseCase[];
}

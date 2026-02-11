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

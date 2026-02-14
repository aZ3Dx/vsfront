export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  article?: {
    publishedTime?: string;
    author?: string;
  };
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

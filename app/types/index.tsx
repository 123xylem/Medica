export interface Article {
  id: string;
  title: string;
  content: string;
  keywords?: string[];
  url?: string;
  date?: string;
  authors?: string;
}

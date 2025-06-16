export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  category: 'Machine Learning' | 'DevOps';
  image: string;
  pages: number;
  publishedYear: number;
  rating: number;
  price: number;
  format: 'PDF' | 'Kindle' | 'Hardcover' | 'Paperback';
  featured: boolean;
  topics: string[];
}
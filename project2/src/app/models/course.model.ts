export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'Machine Learning' | 'DevOps';
  image: string;
  price: number;
  rating: number;
  students: number;
  modules: string[];
  skills: string[];
  featured: boolean;
}
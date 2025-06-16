import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    {
      id: 1,
      title: 'Hands-On Machine Learning',
      author: 'Aurélien Géron',
      description: 'A comprehensive guide to machine learning with practical examples using Python, Scikit-Learn, and TensorFlow.',
      category: 'Machine Learning',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      pages: 851,
      publishedYear: 2022,
      rating: 4.9,
      price: 49.99,
      format: 'PDF',
      featured: true,
      topics: ['Supervised Learning', 'Unsupervised Learning', 'Deep Learning', 'TensorFlow', 'Scikit-Learn']
    },
    {
      id: 2,
      title: 'The DevOps Handbook',
      author: 'Gene Kim, Jez Humble',
      description: 'Transform your organization with DevOps practices and create high-performing technology teams.',
      category: 'DevOps',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
      pages: 480,
      publishedYear: 2021,
      rating: 4.8,
      price: 39.99,
      format: 'Kindle',
      featured: true,
      topics: ['Continuous Integration', 'Continuous Deployment', 'Infrastructure as Code', 'Monitoring', 'Culture']
    },
    {
      id: 3,
      title: 'Pattern Recognition and Machine Learning',
      author: 'Christopher Bishop',
      description: 'Advanced textbook covering pattern recognition, machine learning, and Bayesian methods.',
      category: 'Machine Learning',
      image: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=600',
      pages: 738,
      publishedYear: 2020,
      rating: 4.7,
      price: 89.99,
      format: 'Hardcover',
      featured: false,
      topics: ['Pattern Recognition', 'Bayesian Methods', 'Neural Networks', 'Kernel Methods', 'Graphical Models']
    },
    {
      id: 4,
      title: 'Docker Deep Dive',
      author: 'Nigel Poulton',
      description: 'Master Docker containers from basics to production deployments with real-world examples.',
      category: 'DevOps',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
      pages: 356,
      publishedYear: 2023,
      rating: 4.6,
      price: 34.99,
      format: 'Paperback',
      featured: false,
      topics: ['Docker Fundamentals', 'Container Orchestration', 'Docker Compose', 'Swarm Mode', 'Security']
    },
    {
      id: 5,
      title: 'Kubernetes in Action',
      author: 'Marko Lukša',
      description: 'Complete guide to Kubernetes orchestration platform with hands-on examples and best practices.',
      category: 'DevOps',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
      pages: 624,
      publishedYear: 2022,
      rating: 4.5,
      price: 59.99,
      format: 'PDF',
      featured: true,
      topics: ['Pod Management', 'Services', 'ConfigMaps', 'Secrets', 'Deployments', 'Monitoring']
    }
  ];

  getBooks(): Observable<Book[]> {
    return of(this.books);
  }

  getBook(id: number): Observable<Book | undefined> {
    return of(this.books.find(book => book.id === id));
  }

  getFeaturedBooks(): Observable<Book[]> {
    return of(this.books.filter(book => book.featured));
  }

  getBooksByCategory(category: string): Observable<Book[]> {
    return of(this.books.filter(book => book.category === category));
  }
}
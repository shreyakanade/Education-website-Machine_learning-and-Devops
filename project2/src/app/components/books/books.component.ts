import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="books-page">
      <div class="page-header">
        <div class="container">
          <h1>Books Library</h1>
          <p>Discover expertly curated books on Machine Learning and DevOps</p>
        </div>
      </div>

      <div class="container">
        <div class="filters">
          <div class="filter-group">
            <label>Category:</label>
            <select [(ngModel)]="selectedCategory" (change)="filterBooks()">
              <option value="">All Categories</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="DevOps">DevOps</option>
            </select>
          </div>
          <div class="filter-group">
            <label>Format:</label>
            <select [(ngModel)]="selectedFormat" (change)="filterBooks()">
              <option value="">All Formats</option>
              <option value="PDF">PDF</option>
              <option value="Kindle">Kindle</option>
              <option value="Hardcover">Hardcover</option>
              <option value="Paperback">Paperback</option>
            </select>
          </div>
          <div class="filter-group">
            <label>Search:</label>
            <input type="text" [(ngModel)]="searchTerm" (input)="filterBooks()" placeholder="Search books...">
          </div>
        </div>

        <div class="books-grid grid grid-3">
          <div *ngFor="let book of filteredBooks" class="book-card card">
            <div class="book-image">
              <img [src]="book.image" [alt]="book.title">
              <div class="book-format">{{book.format}}</div>
              <div class="book-featured" *ngIf="book.featured">
                <i class="fas fa-star"></i>
              </div>
            </div>
            <div class="book-content">
              <div class="book-category">{{book.category}}</div>
              <h3>{{book.title}}</h3>
              <p class="book-author">by {{book.author}}</p>
              <p class="book-description">{{book.description}}</p>
              <div class="book-meta">
                <span><i class="fas fa-file-alt"></i> {{book.pages}} pages</span>
                <span><i class="fas fa-calendar"></i> {{book.publishedYear}}</span>
              </div>
              <div class="book-topics">
                <span *ngFor="let topic of book.topics.slice(0, 2)" class="topic-tag">{{topic}}</span>
              </div>
              <div class="book-footer">
                <div class="book-rating">
                  <i class="fas fa-star"></i>
                  {{book.rating}}
                </div>
                <div class="book-price">\${{book.price}}</div>
              </div>
              <a [routerLink]="['/books', book.id]" class="btn btn-primary book-btn">View Details</a>
            </div>
          </div>
        </div>

        <div *ngIf="filteredBooks.length === 0" class="no-results">
          <i class="fas fa-search"></i>
          <h3>No books found</h3>
          <p>Try adjusting your filters or search terms</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .books-page {
      padding-top: 80px;
      min-height: 100vh;
    }

    .page-header {
      background: linear-gradient(135deg, #059669 0%, #047857 100%);
      color: white;
      padding: 3rem 0;
      text-align: center;
    }

    .page-header h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .page-header p {
      font-size: 1.25rem;
      opacity: 0.9;
    }

    .filters {
      display: flex;
      gap: 2rem;
      margin: 3rem 0;
      padding: 2rem;
      background: white;
      border-radius: 1rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .filter-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .filter-group label {
      font-weight: 600;
      color: #374151;
    }

    .filter-group select,
    .filter-group input {
      padding: 0.75rem;
      border: 2px solid #e5e7eb;
      border-radius: 0.5rem;
      font-size: 1rem;
      transition: border-color 0.3s ease;
    }

    .filter-group select:focus,
    .filter-group input:focus {
      outline: none;
      border-color: #059669;
    }

    .books-grid {
      margin-bottom: 3rem;
    }

    .book-card {
      overflow: hidden;
      position: relative;
    }

    .book-image {
      position: relative;
      height: 250px;
      overflow: hidden;
    }

    .book-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .card:hover .book-image img {
      transform: scale(1.05);
    }

    .book-format {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: rgba(255, 255, 255, 0.9);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.875rem;
      font-weight: 500;
    }

    .book-featured {
      position: absolute;
      top: 1rem;
      left: 1rem;
      background: #f59e0b;
      color: white;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .book-content {
      padding: 1.5rem;
    }

    .book-category {
      color: #059669;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.5rem;
    }

    .book-content h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #1f2937;
    }

    .book-author {
      color: #6b7280;
      font-style: italic;
      margin-bottom: 0.75rem;
      font-size: 0.9rem;
    }

    .book-description {
      color: #6b7280;
      margin-bottom: 1rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-size: 0.875rem;
    }

    .book-meta {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      margin-bottom: 1rem;
      font-size: 0.875rem;
      color: #6b7280;
    }

    .book-meta span {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .book-topics {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;
      flex-wrap: wrap;
    }

    .topic-tag {
      background: #f0fdf4;
      color: #059669;
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
      font-size: 0.75rem;
      font-weight: 500;
    }

    .book-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      font-size: 0.875rem;
    }

    .book-rating {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      color: #f59e0b;
    }

    .book-price {
      font-size: 1.25rem;
      font-weight: 700;
      color: #059669;
    }

    .book-btn {
      width: 100%;
    }

    .no-results {
      text-align: center;
      padding: 3rem;
      color: #6b7280;
    }

    .no-results i {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .no-results h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    @media (max-width: 768px) {
      .page-header h1 {
        font-size: 2rem;
      }

      .filters {
        flex-direction: column;
        gap: 1rem;
      }

      .book-meta {
        gap: 0.5rem;
      }
    }
  `]
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  selectedCategory = '';
  selectedFormat = '';
  searchTerm = '';

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
      this.filteredBooks = books;
    });
  }

  filterBooks() {
    this.filteredBooks = this.books.filter(book => {
      const matchesCategory = !this.selectedCategory || book.category === this.selectedCategory;
      const matchesFormat = !this.selectedFormat || book.format === this.selectedFormat;
      const matchesSearch = !this.searchTerm || 
        book.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        book.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      return matchesCategory && matchesFormat && matchesSearch;
    });
  }
}
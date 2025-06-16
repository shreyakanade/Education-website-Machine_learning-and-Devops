import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="book-detail" *ngIf="book">
      <div class="book-hero">
        <div class="container">
          <div class="hero-content">
            <div class="book-image">
              <img [src]="book.image" [alt]="book.title">
              <div class="book-format">{{book.format}}</div>
            </div>
            <div class="book-info">
              <div class="book-category">{{book.category}}</div>
              <h1>{{book.title}}</h1>
              <p class="book-author">by {{book.author}}</p>
              <p class="book-description">{{book.description}}</p>
              <div class="book-meta">
                <div class="meta-item">
                  <i class="fas fa-file-alt"></i>
                  <span>{{book.pages}} pages</span>
                </div>
                <div class="meta-item">
                  <i class="fas fa-calendar"></i>
                  <span>Published {{book.publishedYear}}</span>
                </div>
                <div class="meta-item">
                  <i class="fas fa-star"></i>
                  <span>{{book.rating}} rating</span>
                </div>
                <div class="meta-item">
                  <i class="fas fa-bookmark"></i>
                  <span>{{book.format}} format</span>
                </div>
              </div>
              <div class="book-price">
                <span class="price">\${{book.price}}</span>
                <button class="btn btn-primary purchase-btn">Purchase Now</button>
                <button class="btn btn-outline">Add to Reading List</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="book-content">
        <div class="container">
          <div class="content-grid">
            <div class="main-content">
              <section class="topics-section">
                <h2>Topics Covered</h2>
                <div class="topics-grid">
                  <div *ngFor="let topic of book.topics" class="topic-item">
                    <i class="fas fa-check-circle"></i>
                    <span>{{topic}}</span>
                  </div>
                </div>
              </section>

              <section class="description-section">
                <h2>About This Book</h2>
                <div class="description-content">
                  <p>{{book.description}}</p>
                  <p>This comprehensive guide provides in-depth coverage of {{book.category}} concepts, making it an essential resource for both beginners and experienced professionals. The book combines theoretical foundations with practical examples, ensuring readers gain both understanding and applicable skills.</p>
                  <p>Whether you're looking to advance your career, prepare for certifications, or simply expand your knowledge in {{book.category}}, this book offers the insights and guidance you need to succeed.</p>
                </div>
              </section>

              <section class="author-section">
                <h2>About the Author</h2>
                <div class="author-card">
                  <div class="author-info">
                    <h3>{{book.author}}</h3>
                    <p>{{book.author}} is a renowned expert in {{book.category}} with over 15 years of industry experience. They have worked with leading technology companies and have authored multiple bestselling books on the subject.</p>
                    <p>Their expertise spans both academic research and practical implementation, making them one of the most respected voices in the field. They regularly speak at international conferences and contribute to major industry publications.</p>
                  </div>
                </div>
              </section>

              <section class="reviews-section">
                <h2>Reader Reviews</h2>
                <div class="reviews-list">
                  <div class="review-item">
                    <div class="review-header">
                      <div class="reviewer-name">Sarah M.</div>
                      <div class="review-rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                    </div>
                    <p>"Excellent resource! The author explains complex concepts in an easy-to-understand way. Perfect for both beginners and intermediate learners."</p>
                  </div>
                  <div class="review-item">
                    <div class="review-header">
                      <div class="reviewer-name">Mike R.</div>
                      <div class="review-rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                    </div>
                    <p>"This book transformed my understanding of {{book.category}}. The practical examples and real-world applications make it invaluable."</p>
                  </div>
                </div>
              </section>
            </div>

            <div class="sidebar">
              <div class="book-card">
                <div class="card-header">
                  <h3>Book Details</h3>
                </div>
                <div class="card-content">
                  <div class="detail-item">
                    <i class="fas fa-file-alt"></i>
                    <span>{{book.pages}} Pages</span>
                  </div>
                  <div class="detail-item">
                    <i class="fas fa-calendar"></i>
                    <span>Published {{book.publishedYear}}</span>
                  </div>
                  <div class="detail-item">
                    <i class="fas fa-bookmark"></i>
                    <span>{{book.format}} Format</span>
                  </div>
                  <div class="detail-item">
                    <i class="fas fa-download"></i>
                    <span>Instant Download</span>
                  </div>
                  <div class="detail-item">
                    <i class="fas fa-mobile-alt"></i>
                    <span>Mobile Compatible</span>
                  </div>
                  <div class="detail-item">
                    <i class="fas fa-infinity"></i>
                    <span>Lifetime Access</span>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="price">\${{book.price}}</div>
                  <button class="btn btn-primary full-width">Purchase Now</button>
                  <button class="btn btn-outline full-width">Preview Sample</button>
                </div>
              </div>

              <div class="similar-books">
                <h3>Similar Books</h3>
                <div class="similar-book-list">
                  <div class="similar-book-item">
                    <img src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Book">
                    <div class="similar-book-info">
                      <h4>Advanced {{book.category}}</h4>
                      <p>\$59.99</p>
                    </div>
                  </div>
                  <div class="similar-book-item">
                    <img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Book">
                    <div class="similar-book-info">
                      <h4>{{book.category}} Patterns</h4>
                      <p>\$44.99</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div *ngIf="!book" class="loading">
      <div class="container">
        <div class="loading-spinner"></div>
        <p>Loading book details...</p>
      </div>
    </div>
  `,
  styles: [`
    .book-detail {
      padding-top: 80px;
    }

    .book-hero {
      background: linear-gradient(135deg, #059669 0%, #047857 100%);
      color: white;
      padding: 3rem 0;
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 3rem;
      align-items: center;
    }

    .book-image {
      position: relative;
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      max-width: 300px;
      margin: 0 auto;
    }

    .book-image img {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }

    .book-format {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: rgba(255, 255, 255, 0.9);
      color: #059669;
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      font-weight: 600;
    }

    .book-category {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.5rem;
    }

    .book-hero h1 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 0.75rem;
    }

    .book-author {
      font-size: 1.25rem;
      font-style: italic;
      margin-bottom: 1.5rem;
      opacity: 0.9;
    }

    .book-description {
      font-size: 1.125rem;
      margin-bottom: 2rem;
      opacity: 0.9;
      line-height: 1.6;
    }

    .book-meta {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .meta-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .book-price {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .price {
      font-size: 2rem;
      font-weight: 700;
    }

    .purchase-btn {
      font-size: 1.125rem;
      padding: 1rem 2rem;
    }

    .book-content {
      padding: 4rem 0;
    }

    .content-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 3rem;
    }

    .main-content section {
      margin-bottom: 3rem;
    }

    .main-content h2 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 2rem;
      color: #1f2937;
    }

    .topics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
    }

    .topic-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      background: #f0fdf4;
      border-radius: 0.5rem;
      color: #059669;
      font-weight: 500;
    }

    .topic-item i {
      font-size: 1.25rem;
    }

    .description-content p {
      margin-bottom: 1.5rem;
      color: #6b7280;
      line-height: 1.6;
    }

    .author-card {
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .author-card h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #1f2937;
    }

    .author-card p {
      color: #6b7280;
      margin-bottom: 1rem;
      line-height: 1.6;
    }

    .reviews-list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .review-item {
      background: white;
      padding: 1.5rem;
      border-radius: 1rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .review-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .reviewer-name {
      font-weight: 600;
      color: #1f2937;
    }

    .review-rating {
      color: #f59e0b;
    }

    .review-item p {
      color: #6b7280;
      line-height: 1.6;
    }

    .sidebar {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .book-card {
      background: white;
      border-radius: 1rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      position: sticky;
      top: 100px;
    }

    .card-header {
      background: #f8fafc;
      padding: 1.5rem;
      border-bottom: 1px solid #e5e7eb;
    }

    .card-header h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1f2937;
    }

    .card-content {
      padding: 1.5rem;
    }

    .detail-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1rem;
      color: #6b7280;
    }

    .detail-item i {
      width: 20px;
      color: #059669;
    }

    .card-footer {
      padding: 1.5rem;
      border-top: 1px solid #e5e7eb;
    }

    .card-footer .price {
      font-size: 1.5rem;
      font-weight: 700;
      color: #059669;
      margin-bottom: 1rem;
    }

    .full-width {
      width: 100%;
      margin-bottom: 0.75rem;
    }

    .similar-books h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #1f2937;
    }

    .similar-book-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .similar-book-item {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      background: white;
      border-radius: 0.5rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .similar-book-item img {
      width: 60px;
      height: 80px;
      object-fit: cover;
      border-radius: 0.5rem;
    }

    .similar-book-info h4 {
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
      color: #1f2937;
    }

    .similar-book-info p {
      color: #059669;
      font-weight: 600;
    }

    .loading {
      padding: 5rem 0;
      text-align: center;
    }

    .loading-spinner {
      width: 50px;
      height: 50px;
      border: 4px solid #e5e7eb;
      border-top: 4px solid #059669;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 1rem;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
      }

      .book-hero h1 {
        font-size: 2rem;
      }

      .book-meta {
        grid-template-columns: 1fr;
      }

      .book-price {
        flex-direction: column;
        align-items: stretch;
        gap: 1rem;
      }

      .content-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .topics-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class BookDetailComponent implements OnInit {
  book: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBook(id).subscribe(book => {
      this.book = book;
    });
  }
}
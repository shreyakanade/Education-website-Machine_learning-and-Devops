import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { BookService } from '../../services/book.service';
import { Course } from '../../models/course.model';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="home">
      <!-- Hero Section -->
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">
              Master the Future with 
              <span class="gradient-text">Machine Learning</span> 
              & <span class="gradient-text">DevOps</span>
            </h1>
            <p class="hero-description">
              Join thousands of professionals advancing their careers with our comprehensive courses and expert-curated books. 
              Learn from industry experts and build real-world projects.
            </p>
            <div class="hero-actions">
              <a routerLink="/courses" class="btn btn-primary">Explore Courses</a>
              <a routerLink="/books" class="btn btn-outline">Browse Books</a>
            </div>
            <div class="hero-stats">
              <div class="stat">
                <strong>50,000+</strong>
                <span>Students</span>
              </div>
              <div class="stat">
                <strong>500+</strong>
                <span>Courses</span>
              </div>
              <div class="stat">
                <strong>4.8</strong>
                <span>Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="features">
        <div class="container">
          <h2 class="section-title">Why Choose EduTech?</h2>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-brain"></i>
              </div>
              <h3>Expert-Led Courses</h3>
              <p>Learn from industry professionals with years of real-world experience in ML and DevOps.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-project-diagram"></i>
              </div>
              <h3>Hands-On Projects</h3>
              <p>Build portfolio-worthy projects that demonstrate your skills to potential employers.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-certificate"></i>
              </div>
              <h3>Industry Certification</h3>
              <p>Earn recognized certifications that validate your expertise and boost your career.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-users"></i>
              </div>
              <h3>Community Support</h3>
              <p>Join a vibrant community of learners and get help whenever you need it.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Courses -->
      <section class="featured-courses">
        <div class="container">
          <h2 class="section-title">Featured Courses</h2>
          <div class="courses-grid grid grid-2">
            <div *ngFor="let course of featuredCourses" class="course-card card">
              <div class="course-image">
                <img [src]="course.image" [alt]="course.title">
                <div class="course-level">{{course.level}}</div>
              </div>
              <div class="course-content">
                <div class="course-category">{{course.category}}</div>
                <h3>{{course.title}}</h3>
                <p>{{course.description}}</p>
                <div class="course-meta">
                  <div class="instructor">
                    <i class="fas fa-user"></i>
                    {{course.instructor}}
                  </div>
                  <div class="duration">
                    <i class="fas fa-clock"></i>
                    {{course.duration}}
                  </div>
                </div>
                <div class="course-footer">
                  <div class="course-rating">
                    <i class="fas fa-star"></i>
                    {{course.rating}} ({{course.students}} students)
                  </div>
                  <div class="course-price">\${{course.price}}</div>
                </div>
                <a [routerLink]="['/courses', course.id]" class="btn btn-primary course-btn">Learn More</a>
              </div>
            </div>
          </div>
          <div class="section-footer">
            <a routerLink="/courses" class="btn btn-secondary">View All Courses</a>
          </div>
        </div>
      </section>

      <!-- Featured Books -->
      <section class="featured-books">
        <div class="container">
          <h2 class="section-title">Featured Books</h2>
          <div class="books-grid grid grid-3">
            <div *ngFor="let book of featuredBooks" class="book-card card">
              <div class="book-image">
                <img [src]="book.image" [alt]="book.title">
                <div class="book-format">{{book.format}}</div>
              </div>
              <div class="book-content">
                <div class="book-category">{{book.category}}</div>
                <h3>{{book.title}}</h3>
                <p class="book-author">by {{book.author}}</p>
                <p>{{book.description}}</p>
                <div class="book-meta">
                  <span><i class="fas fa-file-alt"></i> {{book.pages}} pages</span>
                  <span><i class="fas fa-calendar"></i> {{book.publishedYear}}</span>
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
          <div class="section-footer">
            <a routerLink="/books" class="btn btn-secondary">Browse All Books</a>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta">
        <div class="container">
          <div class="cta-content">
            <h2>Ready to Transform Your Career?</h2>
            <p>Join thousands of professionals who have advanced their careers with our expert-led courses and curated learning resources.</p>
            <div class="cta-actions">
              <a routerLink="/courses" class="btn btn-primary">Start Learning Today</a>
              <a href="#" class="btn btn-outline">Free Trial</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home {
      padding-top: 80px;
    }

    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 5rem 0;
      text-align: center;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }

    .gradient-text {
      background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-description {
      font-size: 1.25rem;
      margin-bottom: 2.5rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      opacity: 0.9;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin-bottom: 3rem;
    }

    .hero-stats {
      display: flex;
      justify-content: center;
      gap: 3rem;
    }

    .stat {
      text-align: center;
    }

    .stat strong {
      display: block;
      font-size: 2rem;
      font-weight: 700;
    }

    .stat span {
      opacity: 0.8;
    }

    .features {
      padding: 5rem 0;
      background: #f8fafc;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .feature-card {
      text-align: center;
      padding: 2rem;
    }

    .feature-icon {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #2563eb, #7c3aed);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
      color: white;
      font-size: 2rem;
    }

    .feature-card h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .featured-courses,
    .featured-books {
      padding: 5rem 0;
    }

    .featured-books {
      background: #f8fafc;
    }

    .courses-grid,
    .books-grid {
      margin-bottom: 3rem;
    }

    .course-card,
    .book-card {
      overflow: hidden;
    }

    .course-image,
    .book-image {
      position: relative;
      height: 200px;
      overflow: hidden;
    }

    .course-image img,
    .book-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .card:hover .course-image img,
    .card:hover .book-image img {
      transform: scale(1.05);
    }

    .course-level,
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

    .course-content,
    .book-content {
      padding: 1.5rem;
    }

    .course-category,
    .book-category {
      color: #7c3aed;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.5rem;
    }

    .course-content h3,
    .book-content h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
      color: #1f2937;
    }

    .book-author {
      color: #6b7280;
      font-style: italic;
      margin-bottom: 0.75rem;
    }

    .course-content p,
    .book-content p {
      color: #6b7280;
      margin-bottom: 1rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .course-meta,
    .book-meta {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
      font-size: 0.875rem;
      color: #6b7280;
    }

    .course-meta div,
    .book-meta span {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .course-footer,
    .book-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      font-size: 0.875rem;
    }

    .course-rating,
    .book-rating {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      color: #f59e0b;
    }

    .course-price,
    .book-price {
      font-size: 1.25rem;
      font-weight: 700;
      color: #059669;
    }

    .course-btn,
    .book-btn {
      width: 100%;
    }

    .section-footer {
      text-align: center;
    }

    .cta {
      padding: 5rem 0;
      background: linear-gradient(135deg, #1e3a8a 0%, #7c3aed 100%);
      color: white;
      text-align: center;
    }

    .cta h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .cta p {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .cta-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }

      .hero-actions,
      .cta-actions {
        flex-direction: column;
        align-items: center;
      }

      .hero-stats {
        flex-direction: column;
        gap: 1rem;
      }

      .course-meta,
      .book-meta {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  featuredCourses: Course[] = [];
  featuredBooks: Book[] = [];

  constructor(
    private courseService: CourseService,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.courseService.getFeaturedCourses().subscribe(courses => {
      this.featuredCourses = courses;
    });

    this.bookService.getFeaturedBooks().subscribe(books => {
      this.featuredBooks = books;
    });
  }
}
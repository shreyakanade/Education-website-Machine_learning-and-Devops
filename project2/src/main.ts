import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './app/components/header/header.component';
import { HomeComponent } from './app/components/home/home.component';
import { CoursesComponent } from './app/components/courses/courses.component';
import { BooksComponent } from './app/components/books/books.component';
import { CourseDetailComponent } from './app/components/course-detail/course-detail.component';
import { BookDetailComponent } from './app/components/book-detail/book-detail.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/:id', component: CourseDetailComponent },
  { path: 'books', component: BooksComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: '**', redirectTo: '' }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  template: `
    <div class="app">
      <app-header></app-header>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-section">
              <h3>EduTech</h3>
              <p>Empowering professionals with cutting-edge Machine Learning and DevOps education.</p>
            </div>
            <div class="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/courses">Courses</a></li>
                <li><a href="/books">Books</a></li>
                <li><a href="#">About</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h4>Categories</h4>
              <ul>
                <li><a href="/courses">Machine Learning</a></li>
                <li><a href="/courses">DevOps</a></li>
                <li><a href="/books">Technical Books</a></li>
                <li><a href="#">Certifications</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h4>Connect</h4>
              <div class="social-links">
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2025 EduTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    .app {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .main-content {
      flex: 1;
    }

    .footer {
      background: #1f2937;
      color: white;
      padding: 3rem 0 1rem;
      margin-top: auto;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-section h3 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #3b82f6;
    }

    .footer-section h4 {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .footer-section p {
      color: #9ca3af;
      line-height: 1.6;
    }

    .footer-section ul {
      list-style: none;
    }

    .footer-section ul li {
      margin-bottom: 0.5rem;
    }

    .footer-section ul li a {
      color: #9ca3af;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-section ul li a:hover {
      color: #3b82f6;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-links a {
      width: 40px;
      height: 40px;
      background: #374151;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .social-links a:hover {
      background: #3b82f6;
      transform: translateY(-2px);
    }

    .footer-bottom {
      border-top: 1px solid #374151;
      padding-top: 2rem;
      text-align: center;
      color: #9ca3af;
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
      }
    }
  `]
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});
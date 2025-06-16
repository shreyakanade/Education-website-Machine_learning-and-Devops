import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header">
      <div class="container header-content">
        <div class="logo">
          <i class="fas fa-graduation-cap"></i>
          <span>EduTech</span>
        </div>
        
        <nav class="nav" [class.nav-open]="isMenuOpen">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a routerLink="/courses" routerLinkActive="active">Courses</a>
          <a routerLink="/books" routerLinkActive="active">Books</a>
          <a href="#" class="btn btn-primary">Get Started</a>
        </nav>
        
        <button class="menu-toggle" (click)="toggleMenu()">
          <i class="fas" [ngClass]="isMenuOpen ? 'fa-times' : 'fa-bars'"></i>
        </button>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      transition: all 0.3s ease;
    }

    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      max-width: 1200px;
    }

    .logo {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      font-weight: 700;
      color: #2563eb;
      text-decoration: none;
    }

    .logo i {
      margin-right: 0.5rem;
      font-size: 1.8rem;
    }

    .nav {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .nav a {
      text-decoration: none;
      color: #4b5563;
      font-weight: 500;
      transition: color 0.3s ease;
      position: relative;
    }

    .nav a:hover,
    .nav a.active {
      color: #2563eb;
    }

    .nav a.active::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(135deg, #2563eb, #7c3aed);
      border-radius: 1px;
    }

    .menu-toggle {
      display: none;
      background: none;
      border: none;
      font-size: 1.5rem;
      color: #2563eb;
      cursor: pointer;
    }

    @media (max-width: 768px) {
      .nav {
        position: fixed;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        flex-direction: column;
        padding: 2rem;
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      }

      .nav-open {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }

      .menu-toggle {
        display: block;
      }
    }
  `]
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
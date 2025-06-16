import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="courses-page">
      <div class="page-header">
        <div class="container">
          <h1>Courses</h1>
          <p>Explore our comprehensive collection of Machine Learning and DevOps courses</p>
        </div>
      </div>

      <div class="container">
        <div class="filters">
          <div class="filter-group">
            <label>Category:</label>
            <select [(ngModel)]="selectedCategory" (change)="filterCourses()">
              <option value="">All Categories</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="DevOps">DevOps</option>
            </select>
          </div>
          <div class="filter-group">
            <label>Level:</label>
            <select [(ngModel)]="selectedLevel" (change)="filterCourses()">
              <option value="">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <div class="filter-group">
            <label>Search:</label>
            <input type="text" [(ngModel)]="searchTerm" (input)="filterCourses()" placeholder="Search courses...">
          </div>
        </div>

        <div class="courses-grid grid grid-2">
          <div *ngFor="let course of filteredCourses" class="course-card card">
            <div class="course-image">
              <img [src]="course.image" [alt]="course.title">
              <div class="course-level">{{course.level}}</div>
              <div class="course-featured" *ngIf="course.featured">
                <i class="fas fa-star"></i>
              </div>
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
              <div class="course-skills">
                <span *ngFor="let skill of course.skills.slice(0, 3)" class="skill-tag">{{skill}}</span>
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

        <div *ngIf="filteredCourses.length === 0" class="no-results">
          <i class="fas fa-search"></i>
          <h3>No courses found</h3>
          <p>Try adjusting your filters or search terms</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .courses-page {
      padding-top: 80px;
      min-height: 100vh;
    }

    .page-header {
      background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
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
      border-color: #2563eb;
    }

    .courses-grid {
      margin-bottom: 3rem;
    }

    .course-card {
      overflow: hidden;
      position: relative;
    }

    .course-image {
      position: relative;
      height: 200px;
      overflow: hidden;
    }

    .course-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .card:hover .course-image img {
      transform: scale(1.05);
    }

    .course-level {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: rgba(255, 255, 255, 0.9);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.875rem;
      font-weight: 500;
    }

    .course-featured {
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

    .course-content {
      padding: 1.5rem;
    }

    .course-category {
      color: #7c3aed;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.5rem;
    }

    .course-content h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
      color: #1f2937;
    }

    .course-content p {
      color: #6b7280;
      margin-bottom: 1rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .course-meta {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
      font-size: 0.875rem;
      color: #6b7280;
    }

    .course-meta div {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .course-skills {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;
      flex-wrap: wrap;
    }

    .skill-tag {
      background: #f3f4f6;
      color: #374151;
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
      font-size: 0.75rem;
      font-weight: 500;
    }

    .course-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      font-size: 0.875rem;
    }

    .course-rating {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      color: #f59e0b;
    }

    .course-price {
      font-size: 1.25rem;
      font-weight: 700;
      color: #059669;
    }

    .course-btn {
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

      .course-meta {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  `]
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  selectedCategory = '';
  selectedLevel = '';
  searchTerm = '';

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
      this.filteredCourses = courses;
    });
  }

  filterCourses() {
    this.filteredCourses = this.courses.filter(course => {
      const matchesCategory = !this.selectedCategory || course.category === this.selectedCategory;
      const matchesLevel = !this.selectedLevel || course.level === this.selectedLevel;
      const matchesSearch = !this.searchTerm || 
        course.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      return matchesCategory && matchesLevel && matchesSearch;
    });
  }
}
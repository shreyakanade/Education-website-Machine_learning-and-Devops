import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="course-detail" *ngIf="course">
      <div class="course-hero">
        <div class="container">
          <div class="hero-content">
            <div class="course-info">
              <div class="course-category">{{course.category}}</div>
              <h1>{{course.title}}</h1>
              <p class="course-description">{{course.description}}</p>
              <div class="course-meta">
                <div class="meta-item">
                  <i class="fas fa-user"></i>
                  <span>{{course.instructor}}</span>
                </div>
                <div class="meta-item">
                  <i class="fas fa-clock"></i>
                  <span>{{course.duration}}</span>
                </div>
                <div class="meta-item">
                  <i class="fas fa-signal"></i>
                  <span>{{course.level}}</span>
                </div>
                <div class="meta-item">
                  <i class="fas fa-star"></i>
                  <span>{{course.rating}} ({{course.students}} students)</span>
                </div>
              </div>
              <div class="course-price">
                <span class="price">\${{course.price}}</span>
                <button class="btn btn-primary enroll-btn">Enroll Now</button>
              </div>
            </div>
            <div class="course-image">
              <img [src]="course.image" [alt]="course.title">
              <div class="course-level">{{course.level}}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="course-content">
        <div class="container">
          <div class="content-grid">
            <div class="main-content">
              <section class="modules-section">
                <h2>Course Modules</h2>
                <div class="modules-list">
                  <div *ngFor="let module of course.modules; let i = index" class="module-item">
                    <div class="module-number">{{i + 1}}</div>
                    <div class="module-content">
                      <h3>{{module}}</h3>
                      <p>Master the fundamentals and advanced concepts of {{module.toLowerCase()}} with hands-on exercises and real-world projects.</p>
                    </div>
                    <div class="module-duration">2-3 hours</div>
                  </div>
                </div>
              </section>

              <section class="skills-section">
                <h2>Skills You'll Learn</h2>
                <div class="skills-grid">
                  <div *ngFor="let skill of course.skills" class="skill-item">
                    <i class="fas fa-check-circle"></i>
                    <span>{{skill}}</span>
                  </div>
                </div>
              </section>

              <section class="instructor-section">
                <h2>About the Instructor</h2>
                <div class="instructor-card">
                  <div class="instructor-info">
                    <h3>{{course.instructor}}</h3>
                    <p>Industry expert with over 10 years of experience in {{course.category}}. Has worked with leading tech companies and taught thousands of students worldwide.</p>
                    <div class="instructor-stats">
                      <div class="stat">
                        <strong>15,000+</strong>
                        <span>Students</span>
                      </div>
                      <div class="stat">
                        <strong>4.8</strong>
                        <span>Rating</span>
                      </div>
                      <div class="stat">
                        <strong>25+</strong>
                        <span>Courses</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div class="sidebar">
              <div class="course-card">
                <div class="card-header">
                  <h3>Course Details</h3>
                </div>
                <div class="card-content">
                  <div class="detail-item">
                    <i class="fas fa-play-circle"></i>
                    <span>{{course.modules.length}} Modules</span>
                  </div>
                  <div class="detail-item">
                    <i class="fas fa-clock"></i>
                    <span>{{course.duration}} Duration</span>
                  </div>
                  <div class="detail-item">
                    <i class="fas fa-certificate"></i>
                    <span>Certificate of Completion</span>
                  </div>
                  <div class="detail-item">
                    <i class="fas fa-mobile-alt"></i>
                    <span>Mobile & Desktop Access</span>
                  </div>
                  <div class="detail-item">
                    <i class="fas fa-infinity"></i>
                    <span>Lifetime Access</span>
                  </div>
                  <div class="detail-item">
                    <i class="fas fa-users"></i>
                    <span>Community Support</span>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="price">\${{course.price}}</div>
                  <button class="btn btn-primary full-width">Enroll Now</button>
                  <button class="btn btn-outline full-width">Add to Wishlist</button>
                </div>
              </div>

              <div class="similar-courses">
                <h3>Similar Courses</h3>
                <div class="similar-course-list">
                  <div class="similar-course-item">
                    <img src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Course">
                    <div class="similar-course-info">
                      <h4>Advanced Machine Learning</h4>
                      <p>\$399</p>
                    </div>
                  </div>
                  <div class="similar-course-item">
                    <img src="https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Course">
                    <div class="similar-course-info">
                      <h4>Kubernetes Mastery</h4>
                      <p>\$299</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div *ngIf="!course" class="loading">
      <div class="container">
        <div class="loading-spinner"></div>
        <p>Loading course details...</p>
      </div>
    </div>
  `,
  styles: [`
    .course-detail {
      padding-top: 80px;
    }

    .course-hero {
      background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
      color: white;
      padding: 3rem 0;
    }

    .hero-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 3rem;
      align-items: center;
    }

    .course-category {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.5rem;
    }

    .course-hero h1 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .course-description {
      font-size: 1.125rem;
      margin-bottom: 2rem;
      opacity: 0.9;
      line-height: 1.6;
    }

    .course-meta {
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

    .course-price {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .price {
      font-size: 2rem;
      font-weight: 700;
    }

    .enroll-btn {
      font-size: 1.125rem;
      padding: 1rem 2rem;
    }

    .course-image {
      position: relative;
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }

    .course-image img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    .course-level {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: rgba(255, 255, 255, 0.9);
      color: #2563eb;
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      font-weight: 600;
    }

    .course-content {
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

    .modules-list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .module-item {
      display: flex;
      align-items: flex-start;
      gap: 1.5rem;
      padding: 1.5rem;
      background: white;
      border-radius: 1rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .module-item:hover {
      transform: translateY(-2px);
    }

    .module-number {
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #2563eb, #7c3aed);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
    }

    .module-content {
      flex: 1;
    }

    .module-content h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #1f2937;
    }

    .module-content p {
      color: #6b7280;
      line-height: 1.6;
    }

    .module-duration {
      flex-shrink: 0;
      color: #6b7280;
      font-size: 0.875rem;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
    }

    .skill-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      background: #f0fdf4;
      border-radius: 0.5rem;
      color: #059669;
      font-weight: 500;
    }

    .skill-item i {
      font-size: 1.25rem;
    }

    .instructor-card {
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .instructor-card h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #1f2937;
    }

    .instructor-card p {
      color: #6b7280;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .instructor-stats {
      display: flex;
      gap: 2rem;
    }

    .stat {
      text-align: center;
    }

    .stat strong {
      display: block;
      font-size: 1.5rem;
      font-weight: 700;
      color: #2563eb;
    }

    .stat span {
      color: #6b7280;
      font-size: 0.875rem;
    }

    .sidebar {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .course-card {
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
      color: #2563eb;
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

    .similar-courses h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #1f2937;
    }

    .similar-course-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .similar-course-item {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      background: white;
      border-radius: 0.5rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .similar-course-item img {
      width: 60px;
      height: 60px;
      object-fit: cover;
      border-radius: 0.5rem;
    }

    .similar-course-info h4 {
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
      color: #1f2937;
    }

    .similar-course-info p {
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
      border-top: 4px solid #2563eb;
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
      }

      .course-hero h1 {
        font-size: 2rem;
      }

      .course-meta {
        grid-template-columns: 1fr;
      }

      .course-price {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }

      .content-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .instructor-stats {
        flex-direction: column;
        gap: 1rem;
      }
    }
  `]
})
export class CourseDetailComponent implements OnInit {
  course: Course | undefined;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.courseService.getCourse(id).subscribe(course => {
      this.course = course;
    });
  }
}
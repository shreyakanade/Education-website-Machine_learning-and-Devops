import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    {
      id: 1,
      title: 'Complete Machine Learning Bootcamp',
      description: 'Master machine learning from basics to advanced concepts with hands-on projects and real-world applications.',
      instructor: 'Dr. Sarah Johnson',
      duration: '12 weeks',
      level: 'Beginner',
      category: 'Machine Learning',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 299,
      rating: 4.8,
      students: 15420,
      modules: ['Python Fundamentals', 'Data Preprocessing', 'Supervised Learning', 'Unsupervised Learning', 'Deep Learning', 'Model Deployment'],
      skills: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy'],
      featured: true
    },
    {
      id: 2,
      title: 'DevOps Engineering Masterclass',
      description: 'Learn complete DevOps lifecycle from CI/CD to cloud deployment with AWS, Docker, and Kubernetes.',
      instructor: 'Mike Rodriguez',
      duration: '10 weeks',
      level: 'Intermediate',
      category: 'DevOps',
      image: 'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 349,
      rating: 4.9,
      students: 12850,
      modules: ['Git & Version Control', 'Docker Containerization', 'Kubernetes Orchestration', 'CI/CD Pipelines', 'AWS Cloud Services', 'Monitoring & Logging'],
      skills: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Terraform'],
      featured: true
    },
    {
      id: 3,
      title: 'Deep Learning with TensorFlow',
      description: 'Advanced deep learning course covering neural networks, CNNs, RNNs, and cutting-edge architectures.',
      instructor: 'Prof. Alex Chen',
      duration: '8 weeks',
      level: 'Advanced',
      category: 'Machine Learning',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 399,
      rating: 4.7,
      students: 8950,
      modules: ['Neural Networks Basics', 'Convolutional Networks', 'Recurrent Networks', 'Transformers', 'GANs', 'Model Optimization'],
      skills: ['TensorFlow', 'Keras', 'PyTorch', 'Computer Vision', 'NLP'],
      featured: false
    },
    {
      id: 4,
      title: 'Cloud Infrastructure with Terraform',
      description: 'Infrastructure as Code mastery with Terraform, covering multi-cloud deployments and best practices.',
      instructor: 'Emma Thompson',
      duration: '6 weeks',
      level: 'Intermediate',
      category: 'DevOps',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 249,
      rating: 4.6,
      students: 7200,
      modules: ['Terraform Basics', 'AWS Infrastructure', 'Azure Resources', 'State Management', 'Modules & Functions', 'Best Practices'],
      skills: ['Terraform', 'AWS', 'Azure', 'Infrastructure as Code', 'Cloud Architecture'],
      featured: false
    }
  ];

  getCourses(): Observable<Course[]> {
    return of(this.courses);
  }

  getCourse(id: number): Observable<Course | undefined> {
    return of(this.courses.find(course => course.id === id));
  }

  getFeaturedCourses(): Observable<Course[]> {
    return of(this.courses.filter(course => course.featured));
  }

  getCoursesByCategory(category: string): Observable<Course[]> {
    return of(this.courses.filter(course => course.category === category));
  }
}
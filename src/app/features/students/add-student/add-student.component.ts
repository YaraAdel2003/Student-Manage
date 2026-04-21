import { Component } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  student: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    age: 0,
    gender: 'Male',
    email: '',
    phone: '',
    address: '',
    city: 'Cairo',
    country: 'Egypt',
    department: '',
    level: 1,
    GPA: 0,
    enrollmentDate: new Date().toISOString().split('T')[0],
    isActive: true,
  };

  constructor(
    private service: StudentsService,
    private router: Router,
  ) {}

  addStudent() {
    this.service.addStudent({ ...this.student });
    this.router.navigate(['/students']);
  }
}

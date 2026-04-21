import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private students: Student[] = [
    {
      id: 1,
      firstName: 'Ali',
      lastName: 'Hassan',
      age: 21,
      gender: 'Male',
      email: 'ali.hassan@email.com',
      phone: '01000000000',
      address: '12 Main Street',
      city: 'Cairo',
      country: 'Egypt',
      department: 'Computer Science',
      level: 3,
      GPA: 3.2,
      enrollmentDate: '2023-09-01',
      isActive: true,
    },
    {
      id: 2,
      firstName: 'Mona',
      lastName: 'Samir',
      age: 22,
      gender: 'Female',
      email: 'mona.samir@email.com',
      phone: '01111111111',
      address: '45 Garden Street',
      city: 'Alexandria',
      country: 'Egypt',
      department: 'Information Systems',
      level: 4,
      GPA: 3.7,
      enrollmentDate: '2022-09-15',
      isActive: true,
    },
    {
      id: 3,
      firstName: 'Omar',
      lastName: 'Nabil',
      age: 20,
      gender: 'Male',
      email: 'omar.nabil@email.com',
      phone: '01222222222',
      address: '8 Nile Avenue',
      city: 'Giza',
      country: 'Egypt',
      department: 'Software Engineering',
      level: 2,
      GPA: 3.4,
      enrollmentDate: '2024-02-01',
      isActive: false,
    },
  ];

  private studentsSubject = new BehaviorSubject<Student[]>(this.students);
  readonly students$ = this.studentsSubject.asObservable();

  getStudents() {
    return this.studentsSubject.asObservable();
  }

  addStudent(student: Student) {
    const nextId =
      this.students.length > 0
        ? Math.max(...this.students.map((existingStudent) => existingStudent.id)) + 1
        : 1;

    const newStudent = { ...student, id: nextId };
    this.students = [...this.students, newStudent];
    this.studentsSubject.next(this.students);
  }

  deleteStudent(id: number) {
    this.students = this.students.filter((s) => s.id !== id);
    this.studentsSubject.next(this.students);
  }

  getStudentById(id: number) {
    return this.students.find((s) => s.id === id);
  }
}

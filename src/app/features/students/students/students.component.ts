import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  students$: Observable<Student[]>;

  constructor(private studentsService: StudentsService) {
    this.students$ = this.studentsService.getStudents();
  }

  deleteStudent(id: number) {
    this.studentsService.deleteStudent(id);
  }
}

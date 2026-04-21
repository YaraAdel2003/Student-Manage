import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css'],
})
export class StudentTableComponent {
  @Input() students: Student[] | null = [];
  @Output() deleteStudent = new EventEmitter<number>();

  onDelete(studentId: number) {
    this.deleteStudent.emit(studentId);
  }
}

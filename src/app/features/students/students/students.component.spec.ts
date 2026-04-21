import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { StudentTableComponent } from '../student-table/student-table.component';
import { StudentsService } from 'src/app/services/students.service';

import { StudentsComponent } from './students.component';

describe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsComponent, StudentTableComponent],
      providers: [
        {
          provide: StudentsService,
          useValue: {
            getStudents: () => of([]),
            deleteStudent: jasmine.createSpy('deleteStudent'),
          },
        },
      ],
    });
    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

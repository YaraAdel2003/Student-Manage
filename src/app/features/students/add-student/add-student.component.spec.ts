import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StudentsService } from 'src/app/services/students.service';

import { AddStudentComponent } from './add-student.component';

describe('AddStudentComponent', () => {
  let component: AddStudentComponent;
  let fixture: ComponentFixture<AddStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddStudentComponent],
      imports: [FormsModule, RouterTestingModule],
      providers: [
        {
          provide: StudentsService,
          useValue: {
            addStudent: jasmine.createSpy('addStudent'),
          },
        },
      ],
    });
    fixture = TestBed.createComponent(AddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

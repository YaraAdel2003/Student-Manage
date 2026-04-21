import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StudentsService } from 'src/app/services/students.service';

import { StudentDetailsComponent } from './student-details.component';

describe('StudentDetailsComponent', () => {
  let component: StudentDetailsComponent;
  let fixture: ComponentFixture<StudentDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDetailsComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1',
              },
            },
          },
        },
        {
          provide: StudentsService,
          useValue: {
            getStudentById: () => ({
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
            }),
          },
        },
      ],
    });
    fixture = TestBed.createComponent(StudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

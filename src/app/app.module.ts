import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './features/home/home.component';
import { NotfoundComponent } from './features/notfound/notfound.component';
import { StudentsComponent } from './features/students/students/students.component';
import { AddStudentComponent } from './features/students/add-student/add-student.component';
import { StudentDetailsComponent } from './features/students/student-details/student-details.component';
import { StudentTableComponent } from './features/students/student-table/student-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotfoundComponent,
    StudentsComponent,
    AddStudentComponent,
    StudentDetailsComponent,
    StudentTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

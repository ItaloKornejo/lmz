import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentListComponent } from './components/student-list/student-list.component';

import { StudentService } from './services/student.service';
import { SessionFormComponent } from './components/session-form/session-form.component';
import { HomeworkFormComponent } from './components/homework-form/homework-form.component';
import { SessionListComponent } from './components/session-list/session-list.component';
import { HomeworkListComponent } from './components/homework-list/homework-list.component';
import { HomeworkInfoComponent } from './components/homework-info/homework-info.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalSessionEditComponent } from './components/modal-session-edit/modal-session-edit.component';
import { ModalInfoHomeworkComponent } from './components/modal-info-homework/modal-info-homework.component';
import { ModalCheckHomeworkComponent } from './components/modal-check-homework/modal-check-homework.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StudentFormComponent,
    StudentListComponent,
    SessionFormComponent,
    HomeworkFormComponent,
    SessionListComponent,
    HomeworkListComponent,
    HomeworkInfoComponent,
    LoginComponent,
    RegisterComponent,
    CourseListComponent,
    CourseFormComponent,
    ModalSessionEditComponent,
    ModalInfoHomeworkComponent,
    ModalCheckHomeworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

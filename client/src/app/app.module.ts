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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

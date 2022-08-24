import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component'; 
import { StudentFormComponent } from './components/student-form/student-form.component'; 
import { SessionListComponent } from './components/session-list/session-list.component';
import { SessionFormComponent } from './components/session-form/session-form.component';
import { HomeworkListComponent } from './components/homework-list/homework-list.component';
import { HomeworkInfoComponent } from './components/homework-info/homework-info.component';
import { HomeworkFormComponent } from './components/homework-form/homework-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseFormComponent } from './components/course-form/course-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'student',
    component: StudentListComponent
  },
  {
    path:'student/add',
    component: StudentFormComponent
  },
  {
    path:'student/edit/:id',
    component: StudentFormComponent
  },
  {
    path:'session',
    component: SessionListComponent
  },
  {
    path:'session/add',
    component: SessionFormComponent
  },
  {
    path:'homework',
    component: HomeworkListComponent
  },
  {
    path:'homework/view',
    component: HomeworkInfoComponent
  },
  {
    path:'homework/edit',
    component: HomeworkFormComponent
  },
  {
    path:'homework/add',
    component: HomeworkFormComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'course',
    component: CourseListComponent
  },
  {
    path:'course/add',
    component: CourseFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



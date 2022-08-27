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
import { ModalSessionEditComponent } from './components/modal-session-edit/modal-session-edit.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full'
  },
  {
    path:'student/:idUser/:idCourse',
    component: StudentListComponent
  },
  {
    path:'student/:idUser/:idCourse/add',
    component: StudentFormComponent
  },
  {
    path:'student/:idUser/:idCourse/edit/:id',
    component: StudentFormComponent
  },
  {
    path:'session/:idUser/:idCourse',
    component: SessionListComponent
  },
  {
    path:'session/:idUser/:idCourse/add',
    component: SessionFormComponent
  },
  {
    path:'homework/:idUser/:idCourse',
    component: HomeworkListComponent
  },
  {
    path:'homework/:idUser/:idCourse/view/:idHomework',
    component: HomeworkInfoComponent
  },
  {
    path:'homework/:idUser/:idCourse/edit',
    component: HomeworkFormComponent
  },
  {
    path:'homework/:idUser/:idCourse/add',
    component: HomeworkFormComponent
  },
  {
    path:'user',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'course/:idUser',
    component: CourseListComponent
  },
  {
    path:'course/:idUser/add',
    component: CourseFormComponent
  },
  {
    path:'modal',
    component: ModalSessionEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



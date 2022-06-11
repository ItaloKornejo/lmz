import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component'; 
import { StudentFormComponent } from './components/student-form/student-form.component'; 
import { SessionListComponent } from './components/session-list/session-list.component';
import { HomeworkListComponent } from './components/homework-list/homework-list.component';
import { HomeworkInfoComponent } from './components/homework-info/homework-info.component';
import { HomeworkFormComponent } from './components/homework-form/homework-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/student',
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
    path:'homework',
    component: HomeworkListComponent
  }
  ,
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



import { Component,HostBinding, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import {Route} from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  student: Student ={
    STUDENT_ID: 0,
    STUDENT_NAME: '' ,
    STUDENT_LASTNAME: '',
    CLASSROOMS_CLASSROOM_ID: 7 ,
    SCHOOLS_SCHOOL_ID : 1
};

edit: boolean = false;
buttonState: string="Guardar";

constructor(private userService: LoginService,private studentService: StudentService,private router: Router, private activedRoute: ActivatedRoute) { }

ngOnInit(): void {
  console.log(this.userService.isLoggedIn)
  const params = this.activedRoute.snapshot.params;
    if(params['id']){
      this.studentService.getStudent(params['id'])
        .subscribe(
          res => {
            console.log(res);
            this.student = res;
            this.edit = true;
            this.buttonState="Actualizar";
          },
          err => console.error(err)
        )
    }
  }

  saveNewStudent(){
    delete this.student.STUDENT_ID;
    this.studentService.saveStudent(this.student).subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/student']);
      },
      err => console.error(err)
    )
  }

  updateStudent(){
    console.log(this.student);
    delete this.student.CLASSROOMS_CLASSROOM_ID;
    delete this.student.SCHOOLS_SCHOOL_ID;
    delete this.student.STUDENT_STATUS;
    delete this.student.STUDENT_CREATION;
    this.studentService.updateStudent(this.student.STUDENT_ID!, this.student)
    .subscribe(
      res =>{
        console.log(res);    
        this.router.navigate(['/student']);    
      },
      err => console.error(err)
    )
  }

}



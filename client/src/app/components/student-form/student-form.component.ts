import { Component,HostBinding, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import {Route} from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  student: Student ={
    idStudent: 0,
    nameStudent: '' ,
    lastnameStudent: '',
    phoneStudent: 0 ,
    statusStudent: 0 
};

edit: boolean = false;
buttonState: string="Guardar";

constructor(private studentService: StudentService,private router: Router, private activedRoute: ActivatedRoute) { }

ngOnInit(): void {
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
    delete this.student.idStudent;
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
    this.studentService.updateStudent(this.student.idStudent!, this.student)
    .subscribe(
      res =>{
        console.log(res);    
        this.router.navigate(['/student']);    
      },
      err => console.error(err)
    )
  }



}



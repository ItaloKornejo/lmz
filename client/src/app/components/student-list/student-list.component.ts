import { Component,HostBinding, OnInit } from '@angular/core';
import { StudentService } from "../../services/student.service";
import { ClassroomService } from "../../services/classroom.service";
import { Student } from "../../models/Student";
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent implements OnInit {

 // @HostBinding('class') classes = 'row';
  students: any = []; 
  classroom: any = [];

  constructor(private router: Router,private userService: LoginService,private studentService: StudentService) { }

  ngOnInit() {
    this.userService.isLoggedIn=true;
    this.getStudents();
  }

  getStudents(){
    this.studentService.getStudents().subscribe(
      res => {
         this.students = res;
         console.log(res)
       },
       err => console.error(err)
     );
  }
  
  deleteStudent(idStudent: string){
    this.studentService.deleteStudent(idStudent).subscribe(
      res => {
        console.log(res);
        this.getStudents();
      },
      err => console.log(err)
    )
  }

  downloadStudens(){
    this.studentService.getPdf().subscribe(
      res => {
         console.log(res)
         
       },
       err => console.error(err)
     );
     Swal.fire({
          icon: 'success',
          title: 'Lista de Alumnos PDF'
          // text: 'Something went wrong!',
        });
  }
  addStudent(){
    // this.userService.isLoggedIn=true;
    this.router.navigate(['/student/add']);
  }

  /*updateStudent(idStudent: string){
    console.log(idStudent);
  }*/
}

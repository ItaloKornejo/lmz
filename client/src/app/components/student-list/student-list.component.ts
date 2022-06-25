import { Component,HostBinding, OnInit } from '@angular/core';
import { StudentService } from "../../services/student.service";
import { Student } from "../../models/Student";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent implements OnInit {

 // @HostBinding('class') classes = 'row';
  //students: Student;
  students: any = []; 

  constructor(private studentService: StudentService) { }

  ngOnInit() {
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
    /*this.studentService.deleteStudent(idStudent).subscribe(
      res => {
        console.log(res);
        this.getStudents();
      },
      err => console.log(err)
    )*/
  }

  /*updateStudent(idStudent: string){
    console.log(idStudent);
  }*/
}

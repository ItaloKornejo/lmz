import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-homework-info',
  templateUrl: './homework-info.component.html',
  styleUrls: ['./homework-info.component.css']
})
export class HomeworkInfoComponent implements OnInit {
  students: any = []; 
  constructor(private router: Router,private userService: LoginService,private studentService: StudentService) { }

  ngOnInit(): void {
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
}

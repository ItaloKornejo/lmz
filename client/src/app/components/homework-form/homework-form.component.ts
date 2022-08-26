import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Homework } from 'src/app/models/Homework';
import { ClassroomService } from 'src/app/services/classroom.service';
import { HomeworkService } from 'src/app/services/homework.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-homework-form',
  templateUrl: './homework-form.component.html',
  styleUrls: ['./homework-form.component.css']
})
export class HomeworkFormComponent implements OnInit {

  classrooms: any = []; 
  homework: Homework ={
    HOMEWORK_ID: 0,
    HOMEWORK_NAME: '' ,
    HOMEWORK_DESCRIP: '',
    HOMEWORK_MAXDATE: new Date(2040, 11, 24, 10, 33, 30, 0),
    COURSES_COURSE_ID: 1 ,
    COURSE_NAME : '',
    COURSE_CODE : 0,
    CLASSROOMS_ID : 7,
    SESSIONS_SESSION_ID: 1
};
constructor(private userService: LoginService,private homeworkService: HomeworkService,private router: Router, private activedRoute: ActivatedRoute,private classroomService: ClassroomService) { }

  ngOnInit(): void {
    this.getClassrooms();
  }

  saveNewStudent(){
    delete this.homework.HOMEWORK_ID;
    this.homeworkService.saveHomework(this.homework).subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/homework']);
      },
      err => console.error(err)
    )}

  getClassrooms(){
      this.classroomService.getClassrooms().subscribe(
        res => {
           this.classrooms = res;
           console.log(res)
         },
         err => console.error(err)
       );
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { ClassroomService } from 'src/app/services/classroom.service';
import { CourseService } from 'src/app/services/course.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  classrooms: any = [];
  namesClassroom:any = [];
  gradesClassroom:any = [];
  
  course: Course ={
    COURSE_ID: 0,
    COURSE_NAME: '' ,
    COURSE_CODE: '' ,
    CLASSROOMS_ID : 7,
};



  constructor(private userService: LoginService,private router: Router, private activedRoute: ActivatedRoute,private courseService: CourseService,private classroomService: ClassroomService) { }

  ngOnInit(): void {
    this.getClassrooms();
    
  }
  
  saveNewCourse(){
    delete this.course.COURSE_ID;
    delete this.course.COURSE_CREATION;
    this.courseService.saveCourse(this.course).subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/course']);
      },
      err => console.error(err)
    )
  }
  getClassrooms(){
    this.classroomService.getClassrooms().subscribe(
      res => {
         this.classrooms = res;
         this.namesClassrooms();
         console.log(res)
       },
       err => console.error(err)
     );
}
 namesClassrooms(){
  for (let obj of this.classrooms ){
      if(!this.namesClassroom.includes(Object.values(obj)[1])){
          this.namesClassroom.push(Object.values(obj)[1]);
      }
    }
  }
  gradeClassrooms(namesClassroom : String){
    for (let obj of this.classrooms ){
        if(!this.namesClassroom.includes(Object.values(obj)[1]) && Object.values(obj)[1]==namesClassroom){
            this.namesClassroom.push(Object.values(obj)[1]);
        }
      }
    }


}

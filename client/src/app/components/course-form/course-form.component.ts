import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { CourseService } from 'src/app/services/course.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  course: Course ={
    COURSE_ID: 0,
    COURSE_NAME: '' ,
    COURSE_CODE: '' ,
    CLASSROOMS_ID : 7,
};

  constructor(private userService: LoginService,private router: Router, private activedRoute: ActivatedRoute,private courseService: CourseService) { }

  ngOnInit(): void {
    
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

  
  // this.userService.isLoggedIn=true;

}

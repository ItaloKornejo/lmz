import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { CourseService } from "../../services/course.service";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  // @HostBinding('class') classes = 'row';

  courses: any = [];

  constructor(private courseService: CourseService,private userService: LoginService,private router: Router ) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(){
    this.courseService.getCourses().subscribe(
      res => {
         this.courses = res;
         console.log(res)
       },
       err => console.error(err)
     );
  }
  deleteCourse(idCourse: string){
    this.courseService.deleteCourse(idCourse).subscribe(
      res => {
        console.log(res);
        this.getCourses();
      },
      err => console.log(err)
    )
  }

  goCourse(){
    this.userService.isLoggedIn=true;
    this.router.navigate(['/student']);    

  }

  
  
  // this.userService.isLoggedIn=true;




}

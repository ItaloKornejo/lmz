import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { CourseService } from "../../services/course.service";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  // @HostBinding('class') classes = 'row';
  currentUser:any;

  courses: any = [];

  constructor(private courseService: CourseService,private userService: LoginService,private router: Router, private activedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    this.currentUser = params['idUser']; 
    console.log( this.currentUser)
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

  goCourse(idCourse: string){
    this.userService.isLoggedIn=true;
    this.userService.currentUser=this.currentUser;
    this.userService.currentCourse=idCourse;
    this.router.navigate([`/student/${this.currentUser}/${idCourse}`]);    

  }

  addCourse(){
    this.router.navigate([`/course/${this.currentUser}/add`]);    

  }
  

  
  
  // this.userService.isLoggedIn=true;




}

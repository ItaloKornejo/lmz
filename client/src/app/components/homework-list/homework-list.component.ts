import { Component,HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeworkService } from 'src/app/services/homework.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-homework-list',
  templateUrl: './homework-list.component.html',
  styleUrls: ['./homework-list.component.css']
})
export class HomeworkListComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  homeworks: any = []; 
  nameCourse:string ='';

  constructor(private router: Router,private userService: LoginService,private homeworkService: HomeworkService) { }

  ngOnInit(): void {
    this.getHomeworks();
  }

  getHomeworks(){
    this.homeworkService.getHomeworks().subscribe(
      res => {
         this.homeworks = res;
         this.getNamecourse();
         console.log(res)
       },
       err => console.error(err)
     );
  }
  addHomework(){
    // this.userService.isLoggedIn=true;
    this.router.navigate(['/homework/add']);
  }
  
  deleteStudent(idHomework: string){
    this.homeworkService.deleteHomework(idHomework).subscribe(
      res => {
        console.log(res);
        this.getHomeworks();
      },
      err => console.log(err)
    )
  }

  getNamecourse(){
    this.nameCourse=this.homeworks[0].COURSE_NAME;
  }

}

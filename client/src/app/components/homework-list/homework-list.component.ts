import { Component,HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  currentData:any;
  Delete :object;

  constructor(private router: Router,private userService: LoginService,private homeworkService: HomeworkService,private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    this.currentData =params;
    console.log('Estamos en HOMEWORK_LIST:');
    console.log(params);
    this.getSelectHomeworks(this.currentData.idCourse);
    // this.getHomeworks();
  }

  // getHomeworks(){
  //   this.homeworkService.getHomeworks().subscribe(
  //     res => {
  //        this.homeworks = res;
  //        this.getNamecourse();
  //        console.log(res)
  //      },
  //      err => console.error(err)
  //    );
  // }
  addHomework(){
    // this.userService.isLoggedIn=true;
    this.router.navigate([`/homework/${this.currentData.idUser}/${this.currentData.idCourse}/add`]);
  }
  
  deleteStudent(idHomework: string){
    this.homeworkService.deleteHomework(idHomework,this.Delete).subscribe(
      res => {
        console.log(res);
        this.getSelectHomeworks(this.currentData.idCourse);
      },
      err => console.log(err)
    )
  }

  getNamecourse(){
    this.nameCourse=this.homeworks[0].COURSE_NAME;
  }

  getSelectHomeworks(idCourse : string){
    this.homeworkService.getSelectHomerworks(idCourse).subscribe(
      res => {
         this.homeworks = res;
         this.getNamecourse();
         console.log(res)
       },
       err => console.error(err)
     );
  }

  goInfoHomwerk(){
    this.router.navigate([`/student/${this.currentData.idUser}/${this.currentData.idCourse}/view/`]);
  }

}

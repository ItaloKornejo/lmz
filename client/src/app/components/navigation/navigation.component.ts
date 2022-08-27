import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isLoggedin : boolean;
  currentUser:any;
  currentCourse : any;
  

  constructor(private userService: LoginService,private router: Router,private activedRoute: ActivatedRoute) { }

  // ngOnInit(): void {
  //   const params = this.activedRoute.snapshot.params;
  // }

  ngOnInit() {
    // const params = this.activedRoute.snapshot.params;
    // this.currentUser = params; 
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        this.isLoggedin = this.userService.isLoggedIn;
        this.currentUser = this.userService.currentUser;
        this.currentCourse = this.userService.currentCourse;
        console.log('from NAV is LOGIN: '+this.isLoggedin)
        console.log('from NAV is USER: '+this.currentUser)
        console.log('from NAV is COURSE: '+this.currentCourse)
        // console.log('from NAV is Current User: ')

      }
    })
  }

  goStudents(){
    // this.userService.isLoggedIn=true;
    // this.router.navigate(['/student']);
    this.router.navigate([`/student/${this.currentUser}/${this.currentCourse}`]);
  }

  goString(){
    return '/student/7/20'
  }
}

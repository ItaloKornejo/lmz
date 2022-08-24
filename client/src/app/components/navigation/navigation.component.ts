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

  constructor(private userService: LoginService,private router: Router,private activedRoute: ActivatedRoute) { }

  // ngOnInit(): void {
  //   const params = this.activedRoute.snapshot.params;
  // }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        this.isLoggedin = this.userService.isLoggedIn;
       console.log('from NAV: '+this.isLoggedin)
      }
    })
  }

  goStudents(){
    // this.userService.isLoggedIn=true;
    this.router.navigate(['/student']);
  }

}

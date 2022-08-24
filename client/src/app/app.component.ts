import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  // isLoggedin = false;
  // constructor( private router: Router, private auth:LoginService){}
  // ngOnInit() {
  //   this.router.events.subscribe(event => {
  //     if (event.constructor.name === "NavigationEnd") {
  //      this.isLoggedin = this.auth.isLoggedIn;
  //     }
  //   })
  // }
}

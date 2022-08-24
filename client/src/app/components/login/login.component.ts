import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @HostBinding('class') classes = 'row';



  user: User ={
    USER_ID: 0,
    USER_NAME: '' ,
    USER_PASSWORD: ''
    // statusStudent: 0 
};

  constructor(private userService: LoginService,private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.userService.isLoggedIn=false;
  }

  isLogin(){
    // if(this.user.USER_NAME=='user@two' && this.user.USER_PASSWORD=='passtwo'){
    if(this.user.USER_NAME=='a' && this.user.USER_PASSWORD=='a'){
      // this.userService.isLoggedIn=true;
      console.log('From LOGIN: '+this.user);
      Swal.fire({
        icon: 'success',
        timer: 1000
      });
      this.router.navigate(['/course']);
    }else{
      Swal.fire({
        icon: 'error'
      });
    }
  }
}

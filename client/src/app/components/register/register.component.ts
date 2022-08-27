import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   newVar : boolean= true;
   user: User ={
    USER_ID: 0,
    USER_NAME: '' ,
    USER_PASSWORD: ''
    // statusStudent: 0 
};

  constructor(private loginService : LoginService,private router: Router) { }

  ngOnInit(): void {

    
  }

  registerSucces(){
    // delete this.student.STUDENT_ID;
    this.loginService.saveUser(this.user).subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/user']);
      },
      err => console.error(err)
    );
    Swal.fire({
      icon: 'success',
      title: 'Usuario Registrado'
      // text: 'Something went wrong!',
    });
  }


}

import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   newVar : boolean= true;

  constructor() { }

  ngOnInit(): void {
  }

  registerSucces(){
     Swal.fire({
          icon: 'success',
          title: 'Usuario Registrado'
          // text: 'Something went wrong!',
        });
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from "../models/User";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class LoginService {

  isLoggedIn = false;

  API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.API_URL}/user/`);
  }

  getUser(idUser: string|number){
    return this.http.get(`${this.API_URL}/user/${idUser}`);
  }

  

}

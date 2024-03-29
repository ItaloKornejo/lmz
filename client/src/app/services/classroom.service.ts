import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Classroom } from "../models/Classroom";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClassroomService {

  API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getClassrooms(){
    return this.http.get(`${this.API_URL}/classroom`);
  }

  getClassroom(idClassroom: string|number){
    return this.http.get(`${this.API_URL}/classroom/${idClassroom}`);
  }

}

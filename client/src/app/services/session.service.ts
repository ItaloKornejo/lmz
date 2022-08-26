import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Session } from '../models/Session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  API_URL = 'http://localhost:3000/api';

  constructor (private http: HttpClient) { }

    getSessions(){
      return this.http.get(`${this.API_URL}/session/`);
    }

    getSession(idSession: string|number){
      return this.http.get(`${this.API_URL}/session/${idSession}`);
    }
  
    saveCourse(session: Session){
      return this.http.post(`${this.API_URL}/session`, session);
    }

    deleteCourse(idCourse: string|number){
      return this.http.delete(`${this.API_URL}/session/${idCourse}`);
    }
}

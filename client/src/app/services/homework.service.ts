import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Homework } from '../models/Homework';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {
  
  API_URL = 'http://localhost:3000/api';

  constructor (private http: HttpClient) { }

    getHomeworks(){
      return this.http.get(`${this.API_URL}/homework/`);
    }

    getHomework(idHomework: string|number){
      return this.http.get(`${this.API_URL}/homework/${idHomework}`);
    }

    deleteHomework(idHomework: string|number){
      return this.http.delete(`${this.API_URL}/homework/${idHomework}`);
    }
  
    saveHomework(homework: Homework){
      return this.http.post(`${this.API_URL}/homework`, homework);
    }

    isAuthService(){
      return true;
    }
  }
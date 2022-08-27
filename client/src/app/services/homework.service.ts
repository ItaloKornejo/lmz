import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Homework } from '../models/Homework';
import { OneHomework } from '../models/oneHomework';
import { OneNote } from '../models/oneNote';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {
  
  API_URL = 'http://localhost:3000/api';

  constructor (private http: HttpClient) { }

    getHomeworks(){
      return this.http.get(`${this.API_URL}/homework/`);
    }

    // getHomework(idHomework: string|number){
    //   return this.http.get(`${this.API_URL}/homework/${idHomework}`);
    // }

    deleteHomework(idHomework: string|number, deleteHomework: Homework): Observable<Homework>{
      return this.http.put(`${this.API_URL}/homework/${idHomework}`, deleteHomework);
    }
  
    saveHomework(homework: Homework){
      return this.http.post(`${this.API_URL}/homework`, homework);
    }

    getSelectHomerworks(idCourse: string|number){
      return this.http.get(`${this.API_URL}/homework/list/${idCourse}`);
    }

    getHomework(oneHomework : OneHomework){
      return this.http.post(`${this.API_URL}/homework/one/${oneHomework.idCourse}`,oneHomework);
    }

    saveNote(oneNote : OneNote){
      return this.http.post(`${this.API_URL}/homework/note/${oneNote.note}`,oneNote);
    }

    isAuthService(){
      return true;
    }
  }
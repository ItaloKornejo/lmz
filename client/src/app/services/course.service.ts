import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from "../models/Course";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class CourseService {
  
  API_URL = 'http://localhost:3000/api';

  constructor (private http: HttpClient) { }

    getCourses(){
      return this.http.get(`${this.API_URL}/course/`);
    }

    getClass(){
      return this.http.get(`${this.API_URL}/class/`);
    }

    getCourse(idCourse: string|number){
      return this.http.get(`${this.API_URL}/course/${idCourse}`);
    }
  
    saveCourse(course: Course){
      return this.http.post(`${this.API_URL}/course`, course);
    }

    deleteCourse(idCourse: string|number){
      return this.http.delete(`${this.API_URL}/course/${idCourse}`);
    }
}



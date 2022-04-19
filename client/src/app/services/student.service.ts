import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Student } from "../models/Student";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  API_URL = 'http://localhost:3000/api';

  constructor (private http: HttpClient) { }

    getStudents(){
      return this.http.get(`${this.API_URL}/student`);
    }

    getStudent(idStudent: string|number){
      return this.http.get(`${this.API_URL}/student/${idStudent}`);
    }
    
    
    deleteStudent(idStudent: string|number){
      return this.http.delete(`${this.API_URL}/student/${idStudent}`);
    }
  
    saveStudent(student: Student){
      return this.http.post(`${this.API_URL}/student`, student);
    }
  
    updateStudent(idStudent: string|number, updatedStudent: Student): Observable<Student>{
      return this.http.put(`${this.API_URL}/student/${idStudent}`, updatedStudent);
    }
    
  
}

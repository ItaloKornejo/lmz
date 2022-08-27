import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OneHomework } from 'src/app/models/oneHomework';
import { OneNote } from 'src/app/models/oneNote';
import { HomeworkService } from 'src/app/services/homework.service';
import { LoginService } from 'src/app/services/login.service';
import { StudentService } from 'src/app/services/student.service';
// import * as internal from 'stream';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-homework-info',
  templateUrl: './homework-info.component.html',
  styleUrls: ['./homework-info.component.css']
})

export class HomeworkInfoComponent implements OnInit {
  Delete :object;
  currentData:any;
  currentNameHomework:string;
  students: any = []; 

  oneNote : OneNote={
    note: 0,
    idHomework: 0
  };
  oneHomework: OneHomework = {
    idCourse: 0,
    idHomework: 0
  };

  constructor(public modalService:NgbModal,private router: Router,private userService: LoginService,private studentService: StudentService,private activedRoute: ActivatedRoute,private homeworkService: HomeworkService) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    this.currentData =params;
    this.oneHomework.idCourse=this.currentData.idCourse;
    this.oneHomework.idHomework=this.currentData.idHomework;
    this.userService.isLoggedIn=true;
    console.log('Estamos en HOMEWORK-VIEW:');
    console.log(params);
    this.getStudents();
  }

  getStudents(){
    this.homeworkService.getHomework(this.oneHomework).subscribe(
      res => {
         this.students = res;
         this.currentNameHomework=this.students[0].COURSE_NAME+' - '+this.students[0].HOMEWORK_NAME;
         console.log(res)
       },
       err => console.error(err)
     );
  }

  updateDateHomewwork(){
    Swal.fire({
    icon: 'success',
    text: 'Fecha Actualizada',
    timer: 1500,
  });

}

homeworkStatus(imageHomework : string){

    if(imageHomework.length>10){
      return 'Entregado'
    }else{
      return 'Sin Entregar'
    }

}

imageHomework(imageHomework : string){
  if(imageHomework.length>10){
    return imageHomework
  }else{
    return "https://cdn2.iconfinder.com/data/icons/education-4-1/256/Homework-512.png"
  }
}

homeworkNote(noteHomework : number){

  if(noteHomework==0){
    return 'Sin Registrar'
  }else{
    return noteHomework
  }
}

saveNote(Note : any,IDhomework : any){
console.log('SaveNOTE FRONTEND Compoentr')
this.oneNote.note=Note;
this.oneNote.idHomework=IDhomework;
this.homeworkService.saveNote(this.oneNote).subscribe(
  res => {
     this.getStudents();
   },
   err => console.error(err)
 );

}
  
}

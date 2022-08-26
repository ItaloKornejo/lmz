import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HomeworkService } from 'src/app/services/homework.service';
import { LoginService } from 'src/app/services/login.service';
import { SessionService } from 'src/app/services/session.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})


export class SessionListComponent implements OnInit {
  homeworksSession: any = []; 
  sessions: any = []; 
  numSessions: any = [];

  constructor(public modalService:NgbModal,private router: Router,private userService: LoginService,private sessionService: SessionService) { }

  ngOnInit(): void {
    this.getSessions();
  }
  getSessions(){
    this.sessionService.getSessions().subscribe(
      res => {
         this.sessions = res;
         this.numberSessions();
         console.log(res)
       },
       err => console.error(err)
     );
  }

  numberSessions(){
    for (let obj of this.sessions ){
        if(!this.numSessions.includes(Object.values(obj)[1])){
            this.numSessions.push(Object.values(obj)[1]);
        }
      }
  }

  getHomeworkforSessions(nowSession : number){
    const result = this.sessions.filter((obj : any) => { return Object.values(obj)[1]==nowSession;});
    return result;
  }

  getDateSession(nowSession : number){
    let dateSession:any;
    for (let obj of this.sessions ){
      if((Object.values(obj)[1])==nowSession){
        dateSession=Object.values(obj)[7];
        return dateSession.substring(5,10)+' '+dateSession.substring(11,16);
      }
    }
    dateSession='Sin Fecha';
    return dateSession
  }

  updateSession(){
      Swal.fire({
      icon: 'success',
      text: 'Fecha Actualizada',
      timer: 1500,
    });

  }
  



}

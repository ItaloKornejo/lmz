import { Component,HostBinding, OnInit } from '@angular/core';
import { StudentService } from "../../services/student.service";
import { ClassroomService } from "../../services/classroom.service";
import { Student } from "../../models/Student";
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent implements OnInit {

 // @HostBinding('class') classes = 'row';
  Delete :object;
  students: any = []; 
  classroom: any = [];
  courses:any = [];
  currentData:any;

  constructor(private courseService : CourseService,private router: Router,private userService: LoginService,private studentService: StudentService, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    this.currentData =params;
    this.userService.isLoggedIn=true;
    console.log('Estamos en STUDENT_LIST:');
    console.log(params);
    this.getStudents();
  }

  getStudents(){
    const params = this.activedRoute.snapshot.params;
    this.studentService.getStudents().subscribe(
      res => {
      
         this.students = res;
         console.log(res)
       },
       err => console.error(err)
     );
  }
  
  deleteStudent(idStudent: string){
    console.log(typeof(idStudent));
    this.studentService.deleteStudent(idStudent,this.Delete).subscribe(
      res => {
        console.log(res);
        this.getStudents();
      },
      err => console.log(err)
    )
  }

  downloadStudens(){
    this.studentService.getPdf().subscribe(
      res => {
         console.log(res)
         
       },
       err => console.error(err)
     );
     Swal.fire({
          icon: 'success',
          title: 'Lista de Alumnos PDF'
          // text: 'Something went wrong!',
        });
  }
  addStudent(){
    // this.userService.isLoggedIn=true;
    this.router.navigate([`/student/${this.currentData.idUser}/${this.currentData.idCourse}/add`]);
  }

  getCourse(idCourse : string){
    this.courseService.getCourse(idCourse).subscribe(
      res => {
        this.students = res;
      },
      err => console.log(err)
    )

  }

  getUpdateStudent(idStudent : string){
    this.router.navigate([`/student/${this.currentData.idUser}/${this.currentData.idCourse}/edit/${idStudent}`]);

  }


  /*updateStudent(idStudent: string){
    console.log(idStudent);
  }*/
}

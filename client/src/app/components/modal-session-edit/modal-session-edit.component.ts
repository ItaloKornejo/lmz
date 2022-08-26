import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-session-edit',
  templateUrl: './modal-session-edit.component.html',
  styleUrls: ['./modal-session-edit.component.css']
})
export class ModalSessionEditComponent implements OnInit {

  constructor(public modalService:NgbModal) { }

  ngOnInit(): void {
  }


}

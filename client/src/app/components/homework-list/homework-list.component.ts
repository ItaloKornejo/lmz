import { Component,HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework-list',
  templateUrl: './homework-list.component.html',
  styleUrls: ['./homework-list.component.css']
})
export class HomeworkListComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  constructor() { }

  ngOnInit(): void {
  }

}

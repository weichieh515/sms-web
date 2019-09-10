import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reply-list',
  templateUrl: './reply-list.component.html',
  styleUrls: ['./reply-list.component.scss']
})
export class ReplyListComponent implements OnInit {

  @Input() replies: any[] = [];

  constructor() {
  }

  ngOnInit() {
  }
  
}

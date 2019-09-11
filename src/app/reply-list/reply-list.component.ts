import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reply-list',
  templateUrl: './reply-list.component.html',
  styleUrls: ['./reply-list.component.scss']
})
export class ReplyListComponent implements OnInit {

  @Input() replies: any;
  @Output() scrolled: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    console.log(this.replies)
  }

  onScroll() {
    this.scrolled.emit(this.replies.nextPage);
  }
}

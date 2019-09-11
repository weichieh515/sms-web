import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reply-list',
  templateUrl: './reply-list.component.html',
  styleUrls: ['./reply-list.component.scss']
})
export class ReplyListComponent  {

  @Input() replyList: any;
  @Input() isLoading = false;
  @Output() nextPage: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  onScroll() {
    if (this.replyList.nextPage) { this.nextPage.emit(this.replyList.nextPage); }
  }
}

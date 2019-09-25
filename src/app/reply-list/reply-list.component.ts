import { Component } from '@angular/core';
import { ListBase } from '../list-base';
import { ApiService, ReplyList } from '../api.service';
@Component({
  selector: 'app-reply-list',
  templateUrl: './reply-list.component.html',
  styleUrls: ['./reply-list.component.scss']
})
export class ReplyListComponent extends ListBase {

  constructor(protected apiService: ApiService) {
    super(apiService);
  }

  ngOnInit(): void {
    this.getData(1);
  }

  protected apiGetData(filter: any, page: number, topId: string): Promise<ReplyList> {
    return this.apiService.getReply(filter, page, topId);
  }

}

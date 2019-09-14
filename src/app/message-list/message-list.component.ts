import { Component } from '@angular/core';
import { ListBase } from '../list-base';
import { ApiService, ReplyList, HistoryList } from '../api.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent extends ListBase {

  constructor(protected apiService: ApiService) {
    super(apiService);
  }

  ngOnInit(): void {
    this.getData(1);
  }

  protected apiGetData(page: number): Promise<HistoryList> {
    return this.apiService.getHistory(page);
  }

}

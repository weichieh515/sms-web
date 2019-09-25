import { Component } from '@angular/core';
import { ListBase } from '../list-base';
import { ApiService, HistoryList } from '../api.service';

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

  protected apiGetData(filter: any, page: number, topId: string): Promise<HistoryList> {
    return this.apiService.getHistory(filter, page, topId);
  }

}

import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbWindowService, NbThemeService } from '@nebular/theme';

import { ApiService, ReplyList } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sms-web';
  today = new Date();
  historyMessage = [];
  // reply
  replyList: ReplyList;
  replyIsLoading = false;

  constructor(
    private sidebarService: NbSidebarService,
    private windowService: NbWindowService,
    private themeService: NbThemeService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getHistory().subscribe(
      data => this.historyMessage = data,
      err => console.error(err)
    );
    this.getReply(1);
  }

  toggleDarkMode() {
    this.themeService.changeTheme(
      this.themeService.currentTheme === 'default' ? 'dark' : 'default');
  }

  toggleFilter() {
    this.sidebarService.toggle(false, 'filter');
  }

  openWindow(contentTemplate) {
    this.windowService.open(
      contentTemplate,
      {
        title: 'Window content from template',
        context: {
          text: 'some text to pass into template',
        },
      },
    );
  }

  getReply(page: number) {
    this.replyIsLoading = true;
    this.apiService.getReply(page)
      .then((data: ReplyList) =>
        this.replyList = this.updateList(this.replyList, data))
      .catch(err => console.error(err))
      .finally(() => this.replyIsLoading = false);
  }

  private updateList(oldList, newList) {
    if (oldList) { newList.docs = oldList.docs.concat(newList.docs); }
    return newList;
  }
}

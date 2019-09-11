import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbWindowService, NbThemeService } from '@nebular/theme';

import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sms-web';
  today = new Date();
  historyMessage = [];
  replies: any;

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

  replyScrolled(event) {
    this.getReply(event);
  }

  private getReply(page) {
    this.apiService.getReply(page).subscribe(
      data => this.replies = data,
      err => console.error(err)
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbWindowService, NbThemeService } from '@nebular/theme';

import { ApiService, ReplyList, HistoryList, History } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  today = new Date();

  constructor(
    private sidebarService: NbSidebarService,
    private windowService: NbWindowService,
    private themeService: NbThemeService
  ) { }

  ngOnInit(): void {
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

}

import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbWindowService, NbThemeService } from '@nebular/theme';

import { HistoryService } from './history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sms-web';
  today = new Date();
  historyMessage = [];

  constructor(
    private sidebarService: NbSidebarService,
    private windowService: NbWindowService,
    private historyService: HistoryService,
    private themeService: NbThemeService
  ) { }

  ngOnInit(): void {
    this.historyService.getAll().subscribe(
      data => this.historyMessage = data,
      err => console.error(err)
    );
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

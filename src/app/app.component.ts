import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbWindowService, NbThemeService } from '@nebular/theme';
import { MessageSendComponent } from './message-send/message-send.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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

  openWindow() {
    this.windowService.open(MessageSendComponent, {title: '新增訊息'});
  }

}

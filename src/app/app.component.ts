import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbWindowService, NbThemeService } from '@nebular/theme';

import { HistoryService } from './history.service';
import { STATUS } from './status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sms-web';
  today = new Date();
  historyMessage = [];

  data = [
    {
      "name": "1",
      "value": 40632,
      "extra": {
        "code": "de"
      }
    },
    {
      "name": "2",
      "value": 50000,
      "extra": {
        "code": "us"
      }
    },
    {
      "name": "3",
      "value": 36745,
      "extra": {
        "code": "fr"
      }
    },
    {
      "name": "4",
      "value": 36240,
      "extra": {
        "code": "uk"
      }
    },
    {
      "name": "5",
      "value": 40632,
      "extra": {
        "code": "de"
      }
    },
    {
      "name": "6",
      "value": 50000,
      "extra": {
        "code": "us"
      }
    },
    {
      "name": "7",
      "value": 40632,
      "extra": {
        "code": "de"
      }
    },
    {
      "name": "8",
      "value": 50000,
      "extra": {
        "code": "us"
      }
    },
    {
      "name": "9",
      "value": 36745,
      "extra": {
        "code": "fr"
      }
    },
    {
      "name": "10",
      "value": 36240,
      "extra": {
        "code": "uk"
      }
    },
    {
      "name": "11",
      "value": 40632,
      "extra": {
        "code": "de"
      }
    },
    {
      "name": "12",
      "value": 50000,
      "extra": {
        "code": "us"
      }
    },
    {
      "name": "13",
      "value": 40632,
      "extra": {
        "code": "de"
      }
    },
    {
      "name": "14",
      "value": 50000,
      "extra": {
        "code": "us"
      }
    },
    {
      "name": "15",
      "value": 36745,
      "extra": {
        "code": "fr"
      }
    },
    {
      "name": "16",
      "value": 36240,
      "extra": {
        "code": "uk"
      }
    },
    {
      "name": "17",
      "value": 40632,
      "extra": {
        "code": "de"
      }
    },
    {
      "name": "18",
      "value": 50000,
      "extra": {
        "code": "us"
      }
    },
    {
      "name": "19",
      "value": 40632,
      "extra": {
        "code": "de"
      }
    },
    {
      "name": "20",
      "value": 50000,
      "extra": {
        "code": "us"
      }
    },
    {
      "name": "21",
      "value": 36745,
      "extra": {
        "code": "fr"
      }
    },
    {
      "name": "22",
      "value": 36240,
      "extra": {
        "code": "uk"
      }
    },
    {
      "name": "23",
      "value": 40632,
      "extra": {
        "code": "de"
      }
    },
    {
      "name": "24",
      "value": 50000,
      "extra": {
        "code": "us"
      }
    },
  ]
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

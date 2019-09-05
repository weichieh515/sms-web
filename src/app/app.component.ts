import { Component } from '@angular/core';
import { NbSidebarService, NbWindowService } from '@nebular/theme';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sms-web';

  today = new Date();

  constructor(private sidebarService: NbSidebarService, private windowService: NbWindowService) {}

  toggleFilter(){
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-send',
  templateUrl: './message-send.component.html',
  styleUrls: ['./message-send.component.scss']
})
export class MessageSendComponent implements OnInit {

  telecom = 'FET';
  command = false;
  resend = false;
  constructor() { }

  ngOnInit() {
  }

}

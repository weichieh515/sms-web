import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-message-send',
  templateUrl: './message-send.component.html',
  styleUrls: ['./message-send.component.scss']
})
export class MessageSendComponent implements OnInit {

  telecom = 'FET';
  command = false;
  destination: string[];
  content: string;

  isLoading: boolean;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  send() {
    this.isLoading = true;
    this.apiService.sendMessage(this.destination, this.content, this.telecom, this.command)
      .then(res => console.log(res))
      .catch(err => console.error(err))
      .finally(() => this.isLoading = false);
  }

}

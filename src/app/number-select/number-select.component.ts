import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-number-select',
  templateUrl: './number-select.component.html',
  styleUrls: ['./number-select.component.scss']
})
export class NumberSelectComponent implements OnInit {

  @Input() type = 'message';
  numbers: string[];
  isLoading: boolean;
  private timeStamp: number;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getNumber();
  }

  getNumber() {
    if (new Date().getTime() - this.timeStamp < 60000) { return; }
    this.isLoading = true;
    this.apiService.getNumber(this.type)
      .then(res => {
        this.numbers = res;
        this.timeStamp = new Date().getTime();
      })
      .catch(err => console.error(err))
      .finally(() => this.isLoading = false);
  }
}

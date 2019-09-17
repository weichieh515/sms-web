import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  range = {
    start: new Date(),
    end: new Date()
  };

  numbers: string[];

  private numbersTimestamp: number;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getDestination();
  }

  getDestination() {
    if (new Date().getTime() - this.numbersTimestamp < 300000) { return; }
    this.apiService.getDestination()
      .then(res => {
        this.numbers = res;
        this.numbersTimestamp = new Date().getTime();
      })
      .catch(err => console.error(err)
      );
  }
}

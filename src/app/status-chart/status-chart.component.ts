import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { STATUS } from '../status';

@Component({
  selector: 'app-status-chart',
  templateUrl: './status-chart.component.html',
  styleUrls: ['./status-chart.component.scss'],
})
export class StatusChartComponent implements OnInit, OnChanges {

  @Input() msgDestination: any[] = [];
  @Input() size: number;
  results: any[] = [];
  customColors: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.customColors = Object.keys(STATUS).map(statusName => {
      return {
        name: STATUS[statusName].text,
        value: STATUS[statusName].color
      };
    });
  }

  ngOnChanges(): void {
    this.results = Object.keys(STATUS).map(statusName => {
      return {
        name: STATUS[statusName].text,
        value: this.msgDestination.filter(d => d.status === statusName).length
      };
    });
  }

}

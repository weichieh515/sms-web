import { Component, Input, OnChanges } from '@angular/core';
import { STATUS } from '../status';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnChanges {

  @Input() status: string;
  enum: any;

  constructor() { }

  ngOnChanges(): void {
    this.enum = STATUS[this.status];
  }

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-end',
  templateUrl: './list-end.component.html',
  styleUrls: ['./list-end.component.scss']
})
export class ListEndComponent {

  @Input() totalDocs: number;

}

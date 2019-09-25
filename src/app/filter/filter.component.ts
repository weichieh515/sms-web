import { Component, Output, EventEmitter, DoCheck, KeyValueDiffers, KeyValueDiffer } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements DoCheck {

  data = {
    destination: [],
    content: '',
    range: {
      start: new Date(),
      end: new Date()
    }
  };

  private dataChanged: Subject<any> = new Subject<any>();

  @Output() changed = new EventEmitter<any>();

  private differ: KeyValueDiffer<string, any>;
  constructor(private differs: KeyValueDiffers) {
    this.differ = this.differs.find({}).create();
    this.dataChanged.pipe(debounceTime(1000)).subscribe(data => this.changed.emit(data));
  }

  ngDoCheck() {
    if (this.differ.diff(this.data)) { this.dataChanged.next(this.data); }
  }

}

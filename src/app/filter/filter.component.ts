import { Component, Output, EventEmitter, DoCheck, KeyValueDiffers, KeyValueDiffer } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { STATUS } from '../status';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements DoCheck {

  data = {
    destination: [],
    content: '',
    dateTime: {
      start: undefined,
      end: undefined
    }
  };

  status: any;
  customColors: any[] = [];

  private dataChanged: Subject<any> = new Subject<any>();

  @Output() changed = new EventEmitter<any>();

  private differ: KeyValueDiffer<string, any>;
  constructor(private differs: KeyValueDiffers, private apiService: ApiService) {
    this.differ = this.differs.find({}).create();
    this.dataChanged.pipe(debounceTime(1000)).subscribe(data => this.emitChange(data));
    this.customColors = Object.keys(STATUS).map(statusName => {
      return {
        name: STATUS[statusName].text,
        value: STATUS[statusName].color
      };
    });
  }

  ngDoCheck() {
    if (this.differ.diff(this.data)) { this.dataChanged.next(this.data); }
  }

  clearDateTime(): void {
    this.data.dateTime.start = undefined;
    this.data.dateTime.end = undefined;
    this.emitChange(this.data);
  }

  emitChange(data): void {
    this.changed.emit(data);
    this.apiService.getStatusCount(this.data)
      .then(res => this.status = res.map(r => {
        return {
          name: STATUS[r.name].text,
          value: r.value
        };
      }))
      .catch(err => console.error(err));
  }

  selectStatus(statusName: string) {
    const status = Object.keys(STATUS).find(key => STATUS[key].text === statusName);
    let _data: any = { ...this.data };
    _data.status = status;
    this.changed.emit(_data);
  }
}

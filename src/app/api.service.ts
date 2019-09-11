import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

const apiUrl = environment.apiUrl + '/web/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getReply(page): Promise<ReplyList> {
    const body = {
      page,
      limit: 20
    };
    return this.http.post<any>(apiUrl + 'reply', body).toPromise();
  }

  getHistory(): Observable<any[]> {
    return this.http.get<any[]>(apiUrl + 'history');
  }

}

export interface List {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number;
  page: number;
  pagingCounter: number;
  prevPage: number;
  totalDocs: number;
  totalPages: number;
}
export interface Reply {
  _id: string;
  number: string;
  telecom: string;
  content: string;
  dateTime: Date;
}

export interface ReplyList extends List {
  docs: Reply[];
}

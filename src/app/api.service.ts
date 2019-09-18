import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

const apiUrl = environment.apiUrl + '/web/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getReply(page: number): Promise<ReplyList> {
    const body = {
      page,
      limit: 20
    };
    return this.http.post<any>(apiUrl + 'reply', body).toPromise();
  }

  getHistory(page: number): Promise<HistoryList> {
    const body = {
      page,
      limit: 10
    };
    return this.http.post<any>(apiUrl + 'history', body).toPromise();
  }

  getNumber(type: string): Promise<string[]> {
    const body = {
      type
    };
    return this.http.post<any>(apiUrl + 'number', body).toPromise();
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
  doc: any;
}
export interface Reply {
  _id: string;
  number: string;
  telecom: string;
  content: string;
  dateTime: Date;
}
export interface Destination {
  _id: string;
  messageId: string;
  number: string;
  responseText: string;
  status: string;
  updateDateTime: Date;
}
export interface History {
  _id: string;
  user: string;
  content: string;
  dateTime: Date;
  destination: Destination[];
  option: {
    telecom: string;
    command: boolean;
  };
}
export interface ReplyList extends List {
  docs: Reply[];
}
export interface HistoryList extends List {
  docs: History[];
}
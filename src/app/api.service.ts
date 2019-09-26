import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

const apiUrl = environment.apiUrl + '/';
const webUrl = apiUrl + '/web/';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoid2ViIiwiaWF0IjoxNTY4Nzk5OTg4fQ.1GW9Fd5CQ8PRijzrd6Hmoj9srROrrFWEa3PRNd0llx8';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  sendMessage(destination: string[], content: string, telecom = 'FET', command = false): Promise<any> {
    const body = {
      message: content,
      telecom,
      destination,
      command,
    };
    const headers = new HttpHeaders({
      Authorization: 'bearer ' + token
    });
    return this.http.post<any>(apiUrl + 'v2/submit', body, { headers }).toPromise();
  }

  getReply(filter: any, page: number, topId: string): Promise<ReplyList> {
    const body = {
      page,
      limit: 10,
      topId,
      filter
    };
    return this.http.post<any>(webUrl + 'reply', body).toPromise();
  }

  getHistory(filter: any, page: number, topId: string): Promise<HistoryList> {
    const body = {
      page,
      limit: 10,
      topId,
      filter
    };
    return this.http.post<any>(webUrl + 'history', body).toPromise();
  }

  getNumber(type: string): Promise<string[]> {
    const body = {
      type
    };
    return this.http.post<any>(webUrl + 'number', body).toPromise();
  }

  getStatusCount(filter: any): Promise<any> {
    const body = {
      filter
    };
    return this.http.post<any>(webUrl + 'historyStatus', body).toPromise();
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
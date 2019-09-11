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

  getReply(page): Observable<any[]> {
    const body = {
      page,
      limit: 20
    };
    return this.http.post<any[]>(apiUrl + 'reply', body);
  }

  getHistory(): Observable<any[]> {
    return this.http.get<any[]>(apiUrl + 'history');
  }

}

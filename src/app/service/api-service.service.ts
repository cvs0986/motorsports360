import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url: string = 'http://35.184.44.50/';
  access_token = localStorage.getItem('access_token');
  constructor(private http: HttpClient) { }

  login(loginData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',

    });

    return this.http.post<any>(this.url + 'api-token-auth/', loginData, {
      observe: 'response',
      responseType: 'json',
      headers: headers,
      withCredentials: true
    });
  }

  listNews() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${this.access_token}`
    });

    return this.http.get<any>(this.url + 'news/', {
      observe: 'response',
      responseType: 'json',
      headers: headers,
      withCredentials: true
    });
  }

  updateNews(newsId, newsData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${this.access_token}`
    });

    return this.http.patch<any>(`${this.url}news/${newsId}/`, newsData, {
      observe: 'response',
      responseType: 'json',
      headers: headers,
      withCredentials: true
    });
  }

  deleteNews(newsId) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${this.access_token}`
    });

    return this.http.delete<any>(`${this.url}news/${newsId}/`, {
      observe: 'response',
      responseType: 'json',
      headers: headers,
      withCredentials: true
    });
  }

  addNews(newsData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${this.access_token}`
    });
    return this.http.post<any>(this.url + 'news/', newsData, {
      observe: 'response',
      responseType: 'json',
      headers: headers,
      withCredentials: true
    });
  }
  
}

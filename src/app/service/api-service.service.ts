import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url: string = 'http://35.184.44.50/';

  constructor(private http: HttpClient) { }

  login(loginData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });

    return this.http.post<any>(this.url + 'api-token-auth', loginData, {
      observe: 'response',
      responseType: 'json',
      headers: headers
    });

  }

  listNews() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });

    return this.http.get<any>(this.url + 'news', {
      observe: 'response',
      responseType: 'json',
      headers: headers,
      withCredentials: true
    });
  }
}

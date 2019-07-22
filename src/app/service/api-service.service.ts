import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url = 'http://35.184.44.50/';
// tslint:disable-next-line: variable-name
  access_token = localStorage.getItem('access_token');

  constructor(private http: HttpClient) { }

  login(loginData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',

    });

    return this.http.post<any>(this.url + 'api-token-auth/', loginData, {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

  listNews() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${this.access_token}`
    });

    return this.http.get<any>(this.url + 'news_full/', {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

  updateNews(newsId, newsData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${this.access_token}`
    });

    return this.http.patch<any>(`${this.url}news/${newsId}/`, newsData, {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

  deleteNews(newsId) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${this.access_token}`
    });

    return this.http.delete<any>(`${this.url}news/${newsId}/`, {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

  addNews(newsData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${this.access_token}`
    });
    return this.http.post<any>(this.url + 'news/', newsData, {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

  listVidoes() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${this.access_token}`
    });

    return this.http.get<any>(this.url + 'videos_full', {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

  addVideo(data) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${this.access_token}`
    });
    return this.http.post<any>(this.url + 'videos/', data, {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

  updateVideo(id, data) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${this.access_token}`
    });

    return this.http.patch<any>(`${this.url}videos/${id}/`, data, {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

  deleteVideo(id) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${this.access_token}`
    });

    return this.http.delete<any>(`${this.url}videos/${id}/`, {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

  listAudios() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${this.access_token}`
    });

    return this.http.get<any>(this.url + 'audios_full', {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

  addAudio(data) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${this.access_token}`
    });
    return this.http.post<any>(this.url + 'audios/', data, {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

  deleteAudio(id) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${this.access_token}`
    });

    return this.http.delete<any>(`${this.url}audios/${id}/`, {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

  updateAudio(id, data) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${this.access_token}`
    });

    return this.http.patch<any>(`${this.url}audios/${id}/`, data, {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

  listSeries() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${this.access_token}`
    });

    return this.http.get<any>(this.url + 'series/', {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

  addSeries(data) {
    const headers = new HttpHeaders({
      Authorization: `Token ${this.access_token}`
    });
    return this.http.post<any>(this.url + 'series/', data, {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

  updateSeries(id, data) {
    const headers = new HttpHeaders({
      Authorization: `Token ${this.access_token}`
    });

    return this.http.patch<any>(`${this.url}series/${id}/`, data, {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

  deleteSeries(id) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${this.access_token}`
    });

    return this.http.delete<any>(`${this.url}series/${id}/`, {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

  listAuthor() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${this.access_token}`
    });

    return this.http.get<any>(this.url + 'author/', {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

  addAuthor(data) {
    const headers = new HttpHeaders({
      Authorization: `Token ${this.access_token}`
    });
    return this.http.post<any>(this.url + 'author/', data, {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

  updateAuthor(id, data) {
    const headers = new HttpHeaders({
      Authorization: `Token ${this.access_token}`
    });

    return this.http.patch<any>(`${this.url}author/${id}/`, data, {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

  deleteAuthor(id) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${this.access_token}`
    });

    return this.http.delete<any>(`${this.url}author/${id}/`, {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

  listDrivers() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${this.access_token}`
    });

    return this.http.get<any>(this.url + 'drivers/', {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

  updateDrivers(id, data) {
    const headers = new HttpHeaders({
      Authorization: `Token ${this.access_token}`
    });

    return this.http.patch<any>(`${this.url}drivers/${id}/`, data, {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

  getBannerImages() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${this.access_token}`
    });

    return this.http.get<any>(this.url + 'variables/', {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

  updateDriverBanner(id, data) {
    const headers = new HttpHeaders({
      Authorization: `Token ${this.access_token}`
    });

    return this.http.patch<any>(`${this.url}variables/${id}/`, data, {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

  updateTeamBanner(id, data) {
    const headers = new HttpHeaders({
      Authorization: `Token ${this.access_token}`
    });

    return this.http.patch<any>(`${this.url}variables/${id}/`, data, {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

  updateEventBanner(id, data) {
    const headers = new HttpHeaders({
      Authorization: `Token ${this.access_token}`
    });

    return this.http.patch<any>(`${this.url}variables/${id}/`, data, {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

  updateLeaderBanner(id, data) {
    const headers = new HttpHeaders({
      Authorization: `Token ${this.access_token}`
    });

    return this.http.patch<any>(`${this.url}variables/${id}/`, data, {
      observe: 'response',
      responseType: 'json',
      headers,
      withCredentials: true
    });
  }

}

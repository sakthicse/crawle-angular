import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClientCustomService } from '../http-client-custom/http-client-custom.service';
@Injectable({
  providedIn: 'root'
})
export class CrawleService {

  private baseUrl = environment.apiBase;
  itemPerPage: number = 10;
  constructor(private http:HttpClientCustomService) {}

  get(url) {
      return this.http.get(url);
  }

  post(formData, url) {
      return this.http.post(url, formData);
  }

  put(formData, url) {
      return this.http.put(url, formData);
  }

  getById(url) {
      return this.http.get(url);
  }
  checkError(error){
      return this.http.checkError(error);
  }
  delete(url){
      return this.http.delete(url);
  }
}
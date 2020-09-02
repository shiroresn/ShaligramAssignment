import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonApiService {

  constructor(private httpService: HttpClient) { }

  url = "https://localhost:44335/api/";

  getAllDepartments(): Observable<any> {
    let url = this.url + "department";
    return this.httpService.get(url);
  }

  getAllInterests(): Observable<any> {
    let url = this.url + "interest";
    return this.httpService.get(url);
  }
}

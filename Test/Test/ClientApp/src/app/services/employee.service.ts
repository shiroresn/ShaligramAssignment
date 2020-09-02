import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpService:HttpClient) { }

  url = "https://localhost:44335/api/" + "employee/";

    create(employee:Employee): Observable<any> {
      let url = this.url;
      return this.httpService.post(url,employee);
    }

    getAll(): Observable<any> {
      let url = this.url;
      return this.httpService.get(url);
    }
}

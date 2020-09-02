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

    getById(id): Observable<any> {
      let url = this.url+id;
      return this.httpService.get(url);
    }

    update(employee:Employee): Observable<any> {
      let url = this.url+employee.id;
      return this.httpService.put(url,employee);
    }

    delete(id): Observable<any> {
      let url = this.url+id;
      return this.httpService.delete(url);
    }
}

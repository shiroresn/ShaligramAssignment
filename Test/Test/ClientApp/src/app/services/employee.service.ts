import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  url = "https://localhost:44335/api" + "employee/";

    // login(employee:Employee): Observable<any> {
    //   let url = this.url + "login";
    //   return this.httpService.post(url,loginModel);
    // }
}

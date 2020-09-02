import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';
import { Subscription } from 'rxjs';
import { CommonApiService } from '../services/common-api.service';
import { Department } from '../models/department';
import { Interest } from '../models/interest';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy {

  constructor(private sharedService: SharedService,
    private service: EmployeeService,
    private commonApiService: CommonApiService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  employee: Employee = new Employee();
  create = true;
  subscription: Subscription = new Subscription();

  departments:Department[]=new Array();
  interests:Interest[]=new Array();

  ngOnInit(): void {

    this.create = true;

    this.subscription.add(
      this.commonApiService.getAllDepartments().subscribe(
        res => {
          console.log(res);
          this.departments=res;
        }
      )
    );

    this.subscription.add(
      this.commonApiService.getAllInterests().subscribe(
        res => {
          console.log(res);
          this.interests=res;
        }
      )
    );

    if(this.create)
    {
      this.employee.isActive=true;
    }

  }

  onCreate(){
    var tempEmployee:Employee = Object.assign(Employee,this.employee);

    if(tempEmployee.isActive==true)
    {
      tempEmployee.isActive=1;
    }
    else{
      tempEmployee.isActive=0;
    }

    
  }

}

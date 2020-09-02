import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';
import { Subscription } from 'rxjs';
import { CommonApiService } from '../services/common-api.service';
import { Department } from '../models/department';
import { Interest } from '../models/interest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy {

  constructor(private sharedService: SharedService,
    private service: EmployeeService,
    private commonApiService: CommonApiService,
    private router:Router) { }

    @ViewChild('fileInput', {static:true}) fileInput: ElementRef;

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  employee: Employee = new Employee();
  create = true;
  subscription: Subscription = new Subscription();

  departments:Department[]=new Array();
  interests:Interest[]=new Array();

  ngOnInit(): void {
    this.employee = new Employee();
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
    var tempEmployee = Object.assign({},this.employee);

    tempEmployee.areaOfInterest = JSON.stringify(this.employee.areaOfInterest);

    if(tempEmployee.isActive==true)
    {
      tempEmployee.isActive=true;
    }
    else{
      tempEmployee.isActive=false;
    }
    
    this.subscription.add(
      this.service.create(tempEmployee).subscribe(
        res=>{
          console.log(res);
          this.sharedService.showSucessMessage("Employee Added");
          this.router.navigate(['/']);
        },
        err=>{
          console.log(err);
          this.sharedService.showErrorMessage("Something went wrong!");
        }
      )
    );

  }

  onUploadChange(evt: any) {

    const file = evt.target.files[0];
  
    if (file) {
      const reader = new FileReader();
      
          reader.onload = this.handleReaderLoaded.bind(this);
          reader.readAsBinaryString(file);
        }
    
  }
  
  handleReaderLoaded(e) {
  
    this.employee.uploadedPhoto='data:image/png;base64,' + btoa(e.target.result);
  }

}

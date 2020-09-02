import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private sharedService: SharedService,
    private service: EmployeeService,
    private router: Router) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription.add(
      
    )
  }

}

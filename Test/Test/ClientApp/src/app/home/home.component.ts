import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
  employees: Employee[] = new Array();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  displayedColumns = ['Photo', 'Name', 'Contact', 'Gender', 'Action'];
  dataSource = new MatTableDataSource();
  pageSize = 50;
  pageIndex = 0;

  ngOnInit(): void {
    this.subscription.add(
      this.service.getAll().subscribe(
        res => {
          console.log(res);
          this.employees = res;

          this.dataSource.sortingDataAccessor = (item: Employee, property) => {
            switch (property) {
              default: return item[property];
            }
          };
          this.dataSource.sort = this.sort;
          this.dataSource.data = this.employees;
          this.dataSource.paginator = this.paginator;

        }
      )
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onAddNew() {
    this.router.navigate(['/details'], { skipLocationChange: true });
  }

  viewEmployee(id) {
    this.sharedService.viewEmployeeId=id;
    this.router.navigate(['/details'], { skipLocationChange: true });
  }

}

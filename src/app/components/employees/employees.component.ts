import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit{
  empData: any[] | undefined;

  constructor(private employeeService: EmployeeService) { }



  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    // Fetch employee ID first
    //this.employeeService.getEmployeeID
    //this.employeeService.getEmployee(employeeID)
  }

}

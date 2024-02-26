import { Component } from "@angular/core";
import { Employee } from "src/app/models/employee.model";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  employeeList!: Employee[];

  ngOnInit(): void {
    // TODO: Load employee list
    // TODO: Filter active employees
    this.employeeList = this.getMockData();
  }

  showEmployeeDetails(): void {
    // TODO: Show employee details on modal (?)
  }

  private getMockData(): Employee[] {
    return [
      {
        id: "1",
        firstName: "mock 1",
        lastName: "lastName",
        isActive: true
      },
      {
        id: "2",
        firstName: "mock 2",
        lastName: "lastNameTwo",
        isActive: false
      }
    ];
  }
}
import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {

  public getEmployees(): Observable<Employee[]> {
    return of([

    ]);
  }

  public getEmployee(id: string): Observable<Employee> {
    return of();
  }
  
}
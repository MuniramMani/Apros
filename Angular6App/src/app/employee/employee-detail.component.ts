import { Component, OnInit } from '@angular/core';
@Component({
  selector: '.app-employee-detail',
  template: `
                <h2>EmployeeDetails</h2>
                <ul *ngFor = "let employee of employees">
                    <li>{{employee.id}} - {{employee.name}} - {{employee.age}}</li>
                </ul>
                `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public employees = [
    {"id": 1, "name": "karthi", "age": 20},
    {"id": 2, "name": "chandru", "age": 22},
    {"id": 3, "name": "hari", "age": 24},
    {"id": 4, "name": "siva", "age": 26}
  ];
  constructor() { }  ngOnInit() {  }
}

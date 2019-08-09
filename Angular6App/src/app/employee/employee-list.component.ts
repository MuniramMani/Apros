import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-employee-list]',
  // templateUrl: './employee-list.component.html',
  template: `
            <h2>EmployeeList</h2>
            <ul *ngFor = "let employee of employees; index as i">
                <li>{{i}} {{employee.name}}</li>
            </ul>
            `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees = [
    {"id": 1, "name": "karthi", "age": 20},
    {"id": 2, "name": "chandru", "age": 22},
    {"id": 3, "name": "hari", "age": 24},
    {"id": 4, "name": "siva", "age": 26}
  ];
  constructor() { }
  ngOnInit() {
  }
}

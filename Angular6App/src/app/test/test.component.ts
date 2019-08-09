import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  template: `
          <h2>{{name}}</h2>
          <h2>{{name | lowercase}}</h2>
          <h2>{{name | uppercase}}</h2>
          <h2>{{testPipe | titlecase}}</h2>      
          <h2>{{name | slice:3:5}}</h2>           
          <h3>{{person | json}}</h3>
          
          <h3>{{5.678 | number:'1.2-3'}}</h3>   
          <h3>{{5.678 | number:'3.4-5'}}</h3>
          <h3>{{5.678 | number:'3.1-2'}}</h3>

          <h3>{{0.25 | percent}}</h3>
          <h3>{{0.25 | currency}}</h3>
          <h3>{{0.25 | currency: 'GBP'}}</h3>   
          <h3>{{0.25 | currency: 'GBP' : 'code'}}</h3>  
          <h3>{{0.25 | currency: 'EUR' : 'code'}}</h3>

          <h3>{{date}}</h3>
          <h3>{{date | date:'short'}}</h3>
          <h3>{{date | date:'shortDate'}}</h3>
          <h3>{{date | date:'shortTime'}}</h3>      
          <h3>{{date | date:'longTime'}}</h3>          
            `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name ="Huawei";  
  public testPipe ="Welcome to codevolution";
  public person = {
      "firstName" : "ram",
      "lastName" : "karthi"
  }
  public date = new Date();

  constructor() { }
  ngOnInit() {
  }
}

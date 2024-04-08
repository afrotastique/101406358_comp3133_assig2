import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employee = history.state.data;
  handleEdit(employee: any) {
    console.log(employee);
  }
}

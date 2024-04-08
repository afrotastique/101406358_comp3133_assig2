import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { EmployeesComponent } from 'src/app/employees/employees.component';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
first_name: string = "";
  last_name: string = "";
  gender: string = "";
  salary: number = 0;
  email: string = "";

    @Output() employeeAdded = new EventEmitter();


  constructor(private router: Router, private api: ApiService) {}

  handleSave() {
    const employee = {
      first_name: this.first_name,
      last_name: this.last_name,
      gender: this.gender,
      salary: this.salary,
      id: Date.now() // generate a unique id
    };
    this.employeeAdded.emit(employee);
  }
}

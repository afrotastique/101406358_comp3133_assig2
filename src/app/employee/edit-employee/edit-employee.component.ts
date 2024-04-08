import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  employee = history.state.data;
  _id: string = this.employee._id;
  first_name: string = this.employee.first_name;
  last_name: string = this.employee.last_name;
  gender: string = this.employee.gender;
  salary: number = this.employee.salary;
  email: string = this.employee.email;


  handleSave() {
    console.log(this._id)
}
}
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
    employees = [{
      first_name: "Pritesh",
      last_name: "Patel",
      gender: "Male",
      salary: 45000,
      id: 1,
    },
    {
      first_name: "Julien",
      last_name: "Byrnes",
      gender: "Male",
      salary: 42200,
      id: 2,
    },
    ];
    constructor(private router: Router) {}
    handleDelete(employee: any) {
      console.log(employee);
      this.employees = this.employees.filter((e) => e.id !== employee.id);
   }
  
  handleEdit(employee: any) {
    console.log(employee);
    this.router.navigate(['/employee/edit'], { state: { data: employee } });
  }
  handleView(employee: any) {
    console.log(employee);
    this.router.navigate(['/employee'], { state: { data: employee } });
  }
  handleEmployeeAdded(employee: any) {
    this.employees.push(employee);
  }
}

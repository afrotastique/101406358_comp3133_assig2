import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'Login';
  password: string = '';
  email: string = '';
  errorMessage: any = '';

  constructor(private router: Router) {}

  handleLogin() {    
  
    console.log('Email: ' + this.email + ' Password: ' + this.password);
    this.router.navigateByUrl('/employees');
  }
}
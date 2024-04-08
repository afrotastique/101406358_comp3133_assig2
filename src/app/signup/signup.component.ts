import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  title = 'Sign Up';
  username: string = "";
  password: string = "";
  email: string = "";
  errorMessage: any = '';

  constructor(private router: Router) {}

  handleSignup() {
    console.log(this.username, this.email, this.password)
    this.router.navigateByUrl('/employees');
  }
}

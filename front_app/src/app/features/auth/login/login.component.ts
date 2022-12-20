import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  username: String | undefined;
  password: String | undefined;
  hide = true;

  // onLogin() {
  //   this.auth.login();
  //   this.router.navigate(['/home']);
  // }

  login() {
    this.authService.login();
  }
}

import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

   isLogin: boolean = true;

  loginData = {
    email: '',
    password: ''
  };

  toggleForm(event: Event) {
    event.preventDefault();
    this.isLogin = !this.isLogin;
  }

}

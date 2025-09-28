import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
   school = {
    schoolName: '',
    email: '',
    password: ''
  };

  register() {
    console.log("School Registered: ", this.school);
    alert("Registration Successful (Frontend Only)");
  }

}

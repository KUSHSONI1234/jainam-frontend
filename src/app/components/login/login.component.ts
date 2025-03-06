import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formData = {
    email: '',
    password: ''
  };

  showPassword = false;

  passwordValidations = {
    minLength: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecialChar: false
  };

  onPasswordInput() {
    const password = this.formData.password;
    this.passwordValidations.minLength = password.length >= 8;
    this.passwordValidations.hasUppercase = /[A-Z]/.test(password);
    this.passwordValidations.hasLowercase = /[a-z]/.test(password);
    this.passwordValidations.hasNumber = /\d/.test(password);
    this.passwordValidations.hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  }

  onSubmit(form: any) {
    if (form.invalid) {
      alert("Please fill in all required fields correctly.");
      return;
    }

    console.log("Login Successful", this.formData);
    alert("Login successful!");

    // Reset the form
    this.formData = {
      email: '',
      password: ''
    };
    form.resetForm();
  }
}

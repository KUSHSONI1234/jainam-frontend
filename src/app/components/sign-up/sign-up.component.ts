import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'app-sign-up',
  imports: [FormsModule, CommonModule, FooterComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  showPassword = false;
  showConfirmPassword = false;

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
    if (this.formData.password !== this.formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Form Submitted", this.formData);
    alert("Sign-up successful!");

    // Reset the form
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
    form.resetForm();
  }


}

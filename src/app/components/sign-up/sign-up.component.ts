import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  signupData = {
    name: '',
    email: '',
    phone: '',
    password: ''
  };

  onSignup() {
    console.log('Signup Data:', this.signupData);
    alert('Signup Successful!');
  }
}

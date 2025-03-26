import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "../footer/footer.component";
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment';   // Single environment file

import AOS from 'aos';
import 'aos/dist/aos.css'; 

@Component({
  selector: 'app-contact',
  standalone: true,  // If you're using Angular 17+ with standalone components
  imports: [FormsModule, CommonModule, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, AfterViewInit {

  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  loading = false;   // Loader while submitting form
  successMessage = '';
  errorMessage = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    AOS.init({
      duration: 1200,  // Animation duration in ms
      once: true,      // Animations only run once
      easing: 'ease-in-out'
    });
  }

  ngAfterViewInit() {
    AOS.refreshHard();  // Use refreshHard() for a better effect
  }

  onSubmit(form: any) {
    this.loading = true;  
    this.successMessage = '';
    this.errorMessage = '';

    const apiUrl = `${environment.apiUrl}/contact`;


    this.http.post(apiUrl, this.formData).subscribe(
      (response: any) => {
        this.loading = false; 
        this.successMessage = 'Form submitted successfully!';
        alert('Form submitted successfully!');
        form.resetForm();   
      },
      (error) => {
        this.loading = false; 
        this.errorMessage = 'Error submitting form. Please try again.';
        console.error('Error:', error);
      }
    );
  }
}

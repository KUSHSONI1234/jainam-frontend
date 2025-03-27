import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "../footer/footer.component";
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavbarComponent } from "../navbar/navbar.component"; 

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, FooterComponent, NavbarComponent],
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

  loading = false;
  successMessage = '';
  errorMessage = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out'
    });
  }

  ngAfterViewInit() {
    AOS.refreshHard();
  }

  onSubmit(form: any) {
    if (form.invalid) {
      return;
    }

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

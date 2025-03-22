import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "../footer/footer.component";
import { HttpClient } from '@angular/common/http';
// import AOS from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

@Component({
  selector: 'app-contact',
  standalone: true, // If you're using Angular 17+ with standalone components
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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    AOS.init({
      duration: 1200,  // Animation duration in ms
      once: true,  // Animations only run once
      easing: 'ease-in-out'
    });
  }
  
  ngAfterViewInit() {
    AOS.refreshHard();  // Use refreshHard() instead of refresh() for a better effect
  }
  

  onSubmit(form: any) {
    this.http.post('http://localhost:5000/api/contact', this.formData).subscribe(
      (response: any) => {
        alert(response.message);
        form.resetForm();  // Reset form after submission
      },
      (error) => {
        alert('Error submitting form. Try again.');
        console.error(error);
      }
    );
  }
}


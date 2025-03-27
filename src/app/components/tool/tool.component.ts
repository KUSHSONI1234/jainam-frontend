import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css'],
  imports:[FormsModule,CommonModule]
})
export class ToolComponent {
  isConnected = false;
  images: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  async connectDevice() {
    this.http.get<any>('http://localhost:3000/connect').subscribe(response => {
      this.isConnected = response.success;
      alert(response.message);
    });
  }

  async fetchImages() {
    if (this.isConnected) {
      this.http.get<string[]>('http://localhost:3000/images').subscribe(media => {
        this.images = media;  // Display images
      });
    } else {
      alert('Connect the device first!');
    }
  }
}

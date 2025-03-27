import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class PhoneService {
  baseUrl = 'http://localhost:3000';

  async connectDevice(): Promise<any> {
    const res = await axios.get(`${this.baseUrl}/connect`);
    return res.data;
  }

  async fetchImages(): Promise<string[]> {
    const res = await axios.get(`${this.baseUrl}/images`);
    return res.data;
  }
}

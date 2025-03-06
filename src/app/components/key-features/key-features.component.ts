import { AfterViewInit, Component, OnInit } from '@angular/core';
import AOS from 'aos'
import 'aos/dist/aos.css'; 

@Component({
  selector: 'app-key-features',
  imports: [],
  templateUrl: './key-features.component.html',
  styleUrl: './key-features.component.css'
})
export class KeyFeaturesComponent implements OnInit,AfterViewInit {
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
}

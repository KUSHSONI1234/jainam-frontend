import { AfterViewInit, Component, OnInit } from '@angular/core';
import { KeyFeaturesComponent } from "../key-features/key-features.component";
import { DataExtractionComponent } from "../data-extraction/data-extraction.component";
import { FooterComponent } from "../footer/footer.component";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavbarComponent } from "../navbar/navbar.component"; 

@Component({
  selector: 'app-about',
  imports: [KeyFeaturesComponent, DataExtractionComponent, FooterComponent, NavbarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit,AfterViewInit {
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

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100; // Adjust this value for top spacing
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
  
}

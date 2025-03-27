import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TypingEffectComponent } from "../typing-effect/typing-effect.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavbarComponent } from "../navbar/navbar.component"; 

@Component({
  selector: 'app-home',
  imports: [TypingEffectComponent, FooterComponent, RouterLink, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,AfterViewInit {
  // image1:string="public\images\security.png"
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

  imageUrl:string="images/security.png"

  
}

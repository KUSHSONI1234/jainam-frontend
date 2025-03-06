import { Routes } from '@angular/router';
// import { AboutComponent } from './components/about/about.component';
// import { KeyFeaturesComponent } from './components/key-features/key-features.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent }, // Add this if needed
  { path: '**', redirectTo: 'home' }, // Wildcard route for 404 handling
];

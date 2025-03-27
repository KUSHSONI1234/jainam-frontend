import { Routes } from '@angular/router';
// import { AboutComponent } from './components/about/about.component';
// import { KeyFeaturesComponent } from './components/key-features/key-features.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ToolComponent } from './components/tool/tool.component';


// import { SignupComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component:HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {path:'tool',component:ToolComponent}
  
 ,
  // Add this if needed
  { path: '**', redirectTo: 'home' }, // Wildcard route for 404 handling
];

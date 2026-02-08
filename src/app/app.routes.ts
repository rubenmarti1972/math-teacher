import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ContentComponent } from './features/content/content.component';
import { TutoringComponent } from './features/tutoring/tutoring.component';
import { AuthComponent } from './features/auth/auth.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contenido', component: ContentComponent },
  { path: 'tutorias', component: TutoringComponent },
  { path: 'acceso', component: AuthComponent },
  { path: '**', redirectTo: '' }
];

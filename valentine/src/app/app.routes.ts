import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StoleMyHeartComponent } from './pages/stole-my-heart/stole-my-heart.component';
import { ValentineComponent } from './pages/valentine/valentine.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'heart', component: StoleMyHeartComponent },
  { path: 'valentine', component: ValentineComponent },
];

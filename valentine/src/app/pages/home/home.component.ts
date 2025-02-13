import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  router = inject(Router);
  navigate() {
    this.router.navigateByUrl('heart');
  }
}

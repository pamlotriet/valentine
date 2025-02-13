import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stole-my-heart',
  standalone: true,
  imports: [],
  templateUrl: './stole-my-heart.component.html',
})
export class StoleMyHeartComponent {
  router = inject(Router);
  navigate() {
    this.router.navigateByUrl('valentine');
  }
}

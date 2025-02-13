import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stole-my-heart',
  standalone: true,
  imports: [],
  templateUrl: './stole-my-heart.component.html',
})
export class StoleMyHeartComponent implements OnInit {
  router = inject(Router);

  navigate() {
    this.router.navigateByUrl('valentine');
  }

  ngOnInit() {
    window.scrollTo(0, 0); 
  }
}

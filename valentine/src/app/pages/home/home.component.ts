import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  router = inject(Router);

  navigate() {
    this.router.navigateByUrl('heart');
  }

  ngOnInit() {
    window.scrollTo(0, 0); 
  }
}

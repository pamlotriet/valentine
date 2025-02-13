import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valentine',
  standalone: true,
  imports: [],
  templateUrl: './valentine.component.html',
})
export class ValentineComponent implements OnInit {
  sendWhatsApp() {
    const phoneNumber = '+27684233681';
    const message = encodeURIComponent('Yes of course! I love you');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}

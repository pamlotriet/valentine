import { Component } from '@angular/core';

@Component({
  selector: 'app-valentine',
  standalone: true,
  imports: [],
  templateUrl: './valentine.component.html',
})
export class ValentineComponent {
  sendWhatsApp() {
    const phoneNumber = '+27684233681'; // Replace with the recipient's phone number
    const message = encodeURIComponent('Yes of course! I love you'); // Custom message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');
  }
}

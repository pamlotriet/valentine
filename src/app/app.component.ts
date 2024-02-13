import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'valentine';
  loveMessageVisible: boolean = false;
  responseMessage: string = '';
  email: string = '';

  constructor() {}

  onButtonClick(message:string) {

    // Send email using emailJS
    const templateParams = {
      message: message
    };

    emailjs.send('service_ff3ffiu', 'template_kg1bua6', templateParams, 'user_kig9hwNSt8MhkuitTcb50')
      .then((response) => {
        console.log('Email sent:', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });

      this.loveMessageVisible = true;
  }
  
}

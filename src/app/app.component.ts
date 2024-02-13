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
  loveMessageVisibleYes: boolean = false;
  loveMessageVisibleNo: boolean = false;
  loveChoiceVisibleYes: boolean = false;
  loveMessage = ""
  responseMessage: string = '';
  email: string = '';
  message:string = '';

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


    switch (message) {
      case 'Yes, this is cuter than a baby bunny riding a tiny bicycle. Count me in!':
        // Do something when the first button is clicked
        this.loveMessage = "I Love you Idiot!!"
        this.loveMessageVisibleYes = true;
        break;
      case 'No, but I still want the flowers':
        // Do something when the second button is clicked
       this.loveMessage = "No worries! I'll make sure to send the flowers with a note that says, 'Sorry, couldn't find a Valentine, but these flowers were determined to make someone smile. Congratulations, you're the lucky recipient of their botanical charm!"
       this.loveMessageVisibleNo = true;
       break;
      case 'Yes, but I hope you\'re not expecting me to share my chocolate stash':
        // Do something when the third button is clicked
        this.loveMessage = "Absolutely, your chocolate stash is safe with me! I'll just be over here, pretending not to know it exists. Like a chocolate ninja in the shadows – you won't even notice I'm gone... until your chocolate mysteriously disappears. "
        this.loveMessageVisibleYes = true;
        break;
      case 'Hard pass. I\'m already in a complicated relationship with my snooze button.':
        // Do something when the fourth button is clicked
        this.loveMessage = "Oh, no worries! My cat was next in line for the position anyway. She's been practicing her paw-written love notes and everything. I'll just upgrade her to the official Valentine status. Watch out for the cutest meowentine ever!"
        this.loveMessageVisibleNo = true;
        break;
      default:
        // Handle any other cases or provide a default action
        console.log('Unknown button clicked');
        break;
    }
  }

  sendEmail(message:string){

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

    switch (message) {
      case 'I want to go for a movie!':
        this.loveChoiceVisibleYes = true;
        this.loveMessageVisibleYes = false;
        this.loveMessageVisibleNo = false;
        this.message = "Great choice! I'll be your personal chauffeur for the evening. Get ready for a night of blockbuster laughs and award-winning company! 🍿🎬 I'll pick you up at 7 sharp – be prepared for the ride of your life!";
        break;

      case 'I want to have dinner!':
        this.loveChoiceVisibleYes = true;
        this.loveMessageVisibleYes = false;
        this.loveMessageVisibleNo = false;
        this.message = "Dinner it is! I'll bring my appetite and an impressive collection of food puns. Get ready for a meal so good, it'll have us saying, 'Fork yeah!' 🍽️😄 And don't worry, I'll pick you up at 7 – fashionably on time!";
        break;

      case 'I want both!':
        this.loveChoiceVisibleYes = true;
        this.loveMessageVisibleYes = false;
        this.loveMessageVisibleNo = false;
        this.message = "Ambitious choice! We'll start with a movie that has more plot twists than a rollercoaster and then dive into a dinner so delicious it'll make your taste buds do a happy dance. 🎥🍔 Get ready for a night filled with entertainment and flavor! Oh, and don't forget, I'll pick you up at 7 for this epic adventure!";
        break;

      case 'I want a home-cooked meal!':
        this.loveChoiceVisibleYes = true;
        this.loveMessageVisibleYes = false;
        this.loveMessageVisibleNo = false;
        this.message = "Ah, the classic home-cooked meal request! Get ready for a culinary masterpiece prepared by yours truly. I'll whip up a dish so good, it'll have you reconsidering your life choices. See you at 7, where the magic happens in the kitchen!";
        break;

      default:
        // Handle any other cases or provide a default action
        console.log('Unknown request');
        break;
    }

  }
  
}

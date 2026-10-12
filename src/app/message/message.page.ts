import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonContent } from '@ionic/angular';

import { Router } from '@angular/router';


interface Message {
  name: string;
  time: string;
  preview: string;
  unread: boolean;
}


@Component({

  selector: 'app-message',

  templateUrl: './message.page.html',

  styleUrls: ['./message.page.scss'],

  imports: [
    IonContent,
    CommonModule
  ]

})

export class MessagePage {

  // ==============================
  // SEARCH
  // ==============================

  searchTerm = '';


  // ==============================
  // MESSAGES
  // ==============================

  messages: Message[] = [
    {
      name: 'John',
      time: '10:30 AM',
      preview: 'Is the product still available?',
      unread: true
    },
    {
      name: 'Mark',
      time: '9:15 AM',
      preview: 'Thank you for the information.',
      unread: false
    },
    {
      name: 'Anna',
      time: 'Yesterday',
      preview: 'I found a cheaper price for it.',
      unread: false
    },
    {
      name: 'Ryan',
      time: 'Yesterday',
      preview: 'Can you send me the product link?',
      unread: false
    }
  ];


  constructor(
    private router: Router
  ) {}


  // ==============================
  // SEARCH MESSAGES
  // ==============================

  onSearch(event: any) {

    this.searchTerm = event.target.value;

  }


  get filteredMessages(): Message[] {

    const search = this.searchTerm
      .trim()
      .toLowerCase();

    if (!search) {

      return this.messages;

    }

    return this.messages.filter(message =>
      message.name.toLowerCase().includes(search) ||
      message.preview.toLowerCase().includes(search)
    );

  }


  get unreadCount(): number {

    return this.messages.filter(message => message.unread).length;

  }


  // ==============================
  // OPEN MESSAGE
  // ==============================

  openMessage(message: Message) {

    console.log('Message clicked:', message.name);

    // TODO: replace with your chat route, for example:
    // this.router.navigate(['/chat', message.name.toLowerCase()]);

  }


  // ==============================
  // GO TO HOME
  // ==============================

  goToHome() {

    this.router.navigate(['/home']);

  }


  // ==============================
  // GO TO CATEGORIES
  // ==============================

  goToCategories() {

    this.router.navigate(['/categories']);

  }


  // ==============================
  // GO TO SCAN
  // ==============================

  goToScan() {

    this.router.navigate(['/scan']);

  }


  // ==============================
  // GO TO PROFILE
  // ==============================

  goToProfile() {

    console.log('Profile button clicked');

    this.router.navigate(['/profile']);

  }

}
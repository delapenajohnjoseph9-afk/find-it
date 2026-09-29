import { Component } from '@angular/core';

import { IonContent } from '@ionic/angular';

import { Router } from '@angular/router';


@Component({

  selector: 'app-message',

  templateUrl: './message.page.html',

  styleUrls: ['./message.page.scss'],

  imports: [
    IonContent
  ]

})

export class MessagePage {

  constructor(
    private router: Router
  ) {}


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
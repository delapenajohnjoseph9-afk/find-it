import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/angular';

import { Router } from '@angular/router';


@Component({

  selector: 'app-home',

  templateUrl: 'home.page.html',

  styleUrls: ['home.page.scss'],

  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent
  ]

})

export class HomePage {

  constructor(
    private router: Router
  ) {}


  // ==============================
  // GO TO CATEGORIES
  // ==============================

  goToCategories() {

    console.log('Categories button clicked');

    this.router.navigate(['/categories']);

  }


  // ==============================
  // GO TO SCAN
  // ==============================

  goToScan() {

    console.log('Scan button clicked');

    this.router.navigate(['/scan']);

  }


  // ==============================
  // GO TO MESSAGE
  // ==============================

  goToMessage() {

    console.log('Message button clicked');

    this.router.navigate(['/message']);

  }


  // ==============================
  // GO TO PROFILE
  // ==============================

  goToProfile() {

    console.log('Profile button clicked');

    this.router.navigate(['/profile']);

  }

}
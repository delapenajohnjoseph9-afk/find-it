import { Component } from '@angular/core';

import { IonContent } from '@ionic/angular';

import { Router } from '@angular/router';


@Component({

  selector: 'app-profile',

  templateUrl: './profile.page.html',

  styleUrls: ['./profile.page.scss'],

  imports: [
    IonContent
  ]

})

export class ProfilePage {

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
  // GO TO MESSAGE
  // ==============================

  goToMessage() {

    this.router.navigate(['/message']);

  }

}
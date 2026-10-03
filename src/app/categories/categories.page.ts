import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular';

import { Router } from '@angular/router';


@Component({

  selector: 'app-categories',

  templateUrl: './categories.page.html',

  styleUrls: ['./categories.page.scss'],

  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule
  ]

})

export class CategoriesPage implements OnInit {

  constructor(
    private router: Router
  ) {}


  ngOnInit() {

  }


  // ==============================
  // GO TO HOME
  // ==============================

  goToHome() {

    console.log('Home button clicked');

    this.router.navigate(['/home']);

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
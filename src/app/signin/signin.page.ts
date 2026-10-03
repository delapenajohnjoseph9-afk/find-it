import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { IonContent } from '@ionic/angular';

import { Router } from '@angular/router';


@Component({

  selector: 'app-signin',

  templateUrl: './signin.page.html',

  styleUrls: ['./signin.page.scss'],

  imports: [
    IonContent,
    CommonModule,
    FormsModule
  ]

})

export class SigninPage {

  isLoading = false;

  loadingType = '';

  showError = false;

  showPassword = false;

  showGooglePermission = false;

  showFacebookPermission = false;


  // ==============================
  // SIGN UP INFORMATION
  // ==============================

  fullName = '';

  email = '';

  username = '';

  password = '';


  constructor(
    private router: Router
  ) {}


  // ==============================
  // TOGGLE PASSWORD VISIBILITY
  // ==============================

  togglePassword() {

    this.showPassword =
      !this.showPassword;

  }


  // ==============================
  // SIGN UP
  // ==============================

  goToHome() {

    // Check if all fields are filled

    if (
      this.fullName.trim() === '' ||
      this.email.trim() === '' ||
      this.username.trim() === '' ||
      this.password.trim() === ''
    ) {

      this.showError = true;

      return;

    }


    // Hide error

    this.showError = false;


    // Start loading

    this.loadingType = 'signup';

    this.isLoading = true;


    // Go to Login

    setTimeout(() => {

      this.router.navigate(['/login']);

    }, 1500);

  }


  // ==============================
  // GOOGLE
  // ==============================

  goToGoogle() {

    // Show Google permission first

    this.showGooglePermission = true;

  }


  // ==============================
  // CONTINUE WITH GOOGLE
  // ==============================

  continueWithGoogle() {

    // Close permission screen

    this.showGooglePermission = false;


    // Start Google loading

    this.loadingType = 'google';

    this.isLoading = true;


    // Go to Home

    setTimeout(() => {

      this.router.navigate(['/home']);

    }, 1500);

  }


  // ==============================
  // CANCEL GOOGLE
  // ==============================

  cancelGooglePermission() {

    this.showGooglePermission = false;

  }


  // ==============================
  // FACEBOOK
  // ==============================

  goToFacebook() {

    // Show Facebook permission first

    this.showFacebookPermission = true;

  }


  // ==============================
  // CONTINUE WITH FACEBOOK
  // ==============================

  continueWithFacebook() {

    // Close permission screen

    this.showFacebookPermission = false;


    // Start Facebook loading

    this.loadingType = 'facebook';

    this.isLoading = true;


    // Go to Home

    setTimeout(() => {

      this.router.navigate(['/home']);

    }, 1500);

  }


  // ==============================
  // CANCEL FACEBOOK
  // ==============================

  cancelFacebookPermission() {

    this.showFacebookPermission = false;

  }


  // ==============================
  // LOGIN PAGE
  // ==============================

  goToLogin() {

    this.router.navigate(['/login']);

  }

}
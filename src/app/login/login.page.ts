import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { IonContent } from '@ionic/angular';

import { Router } from '@angular/router';


@Component({

  selector: 'app-login',

  templateUrl: './login.page.html',

  styleUrls: ['./login.page.scss'],

  imports: [
    IonContent,
    CommonModule,
    FormsModule
  ]

})

export class LoginPage implements OnInit {

  isLoading = false;

  showError = false;

  showPassword = false;


  // ==============================
  // LOGIN INFORMATION
  // ==============================

  username = '';

  password = '';


  constructor(
    private router: Router
  ) {}


  ngOnInit() {
  }


  // ==============================
  // TOGGLE PASSWORD
  // ==============================

  togglePassword() {

    this.showPassword =
      !this.showPassword;

  }


  // ==============================
  // LOGIN
  // ==============================

  goToHome() {

    // Check if username and password
    // are filled in

    if (
      this.username.trim() === '' ||
      this.password.trim() === ''
    ) {

      this.showError = true;

      return;

    }


    // Hide error

    this.showError = false;


    // Start loading

    this.isLoading = true;


    // Go to Home

    setTimeout(() => {

      this.router.navigate(['/home']);

    }, 1500);

  }

}
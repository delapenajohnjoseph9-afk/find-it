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

  constructor(private router: Router) { }

  goToHome() {
  this.loadingType = 'signup';
  this.isLoading = true;

  setTimeout(() => {
    this.router.navigate(['/home']);
  }, 1500);
}

  goToGoogle() {

    this.loadingType = 'google';
    this.isLoading = true;

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1500);

  }
  goToFacebook() {

  this.loadingType = 'facebook';
  this.isLoading = true;

  setTimeout(() => {
    this.router.navigate(['/home']);
  }, 1500);

}

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
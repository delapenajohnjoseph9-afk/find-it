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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome() {
    this.isLoading = true;

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1500);
  }

}
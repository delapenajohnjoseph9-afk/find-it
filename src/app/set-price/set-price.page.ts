import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-price',
  templateUrl: './set-price.page.html',
  styleUrls: ['./set-price.page.scss'],
  imports: [
    IonContent,
    CommonModule,
    FormsModule
  ]
})
export class SetPricePage {

  selectedProduct = 'iPhone 15';

  currentPrice = 45999;

  targetPrice: number | null = 43000;

  alertEnabled = true;

  products = [
    {
      name: 'iPhone 15',
      image: 'assets/iphone15.jpg',
      price: 45999
    },
    {
      name: 'ASUS ROG Laptop',
      image: 'assets/rog.jpg',
      price: 65999
    },
    {
      name: 'Sony Headphones',
      image: 'assets/sony.jpg',
      price: 8999
    }
  ];

  selectedProductData = this.products[0];

  constructor(
    private router: Router
  ) {}

  selectProduct(product: any) {

    this.selectedProduct = product.name;

    this.currentPrice = product.price;

    this.selectedProductData = product;

  }

  toggleAlert() {

    this.alertEnabled = !this.alertEnabled;

  }

  setPriceAlert() {

    if (!this.targetPrice || this.targetPrice <= 0) {

      alert('Please enter a valid target price.');

      return;
    }

    if (this.targetPrice >= this.currentPrice) {

      alert(
        'Target price should be lower than the current price.'
      );

      return;
    }

    this.alertEnabled = true;

    alert(
      `Price alert set for ${this.selectedProduct} at ₱${this.targetPrice.toLocaleString()}`
    );

  }

  goBack() {

    this.router.navigate(['/home']);

  }

}
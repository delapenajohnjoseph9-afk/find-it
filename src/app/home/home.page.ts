import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    IonContent,
    CommonModule
  ]

})

export class HomePage {

  // ==============================
  // SEARCH
  // ==============================

  searchTerm = '';


  // ==============================
  // CATEGORY CHIPS
  // ==============================

  selectedCategory = 'All';


  // ==============================
  // PRODUCTS
  // ==============================

  products = [
    {
      name: 'iPhone 15',
      image: 'assets/iphone15.jpg',
      lowestPrice: '₱45,999',
      categories: ['Phones'],
      stores: [
        { name: 'Store A', price: '₱45,999' },
        { name: 'Store B', price: '₱46,499' },
        { name: 'Store C', price: '₱47,999' }
      ]
    },

    {
      name: 'ASUS ROG Laptop',
      image: 'assets/rog.jpg',
      lowestPrice: '₱65,999',
      categories: ['Laptops', 'Gaming'],
      stores: [
        { name: 'Store A', price: '₱65,999' },
        { name: 'Store B', price: '₱67,499' },
        { name: 'Store C', price: '₱69,999' }
      ]
    },

    {
      name: 'Sony Headphones',
      image: 'assets/sony.jpg',
      lowestPrice: '₱8,999',
      categories: ['Audio'],
      stores: [
        { name: 'Store A', price: '₱8,999' },
        { name: 'Store B', price: '₱9,499' },
        { name: 'Store C', price: '₱9,999' }
      ]
    }
  ];


  constructor(
    private router: Router
  ) {}


  // ==============================
  // SEARCH PRODUCT
  // ==============================

  onSearch(event: any) {

    this.searchTerm = event.target.value;

  }


  get filteredProducts() {

    const search = this.searchTerm
      .trim()
      .toLowerCase();

    if (!search) {

      return this.products;

    }

    return this.products.filter(product =>
      product.name
        .toLowerCase()
        .includes(search)
    );

  }


  // ==============================
  // CATEGORY FILTER
  // ==============================

  setCategory(category: string) {

    this.selectedCategory = category;

  }


  // Products shown in the grid:
  // search results, narrowed by the selected chip
  get visibleProducts() {

    if (this.selectedCategory === 'All') {

      return this.filteredProducts;

    }

    return this.filteredProducts.filter(product =>
      product.categories.includes(this.selectedCategory)
    );

  }


  // ==============================
  // SAVING BADGE
  // (most expensive store - cheapest store)
  // ==============================

  private toNumber(price: string): number {

    return Number(
      (price || '').replace(/[^0-9.]/g, '')
    ) || 0;

  }


  getSaving(product: { stores: { price: string }[] }): string {

    const prices = product.stores
      .map(store => this.toNumber(store.price))
      .filter(value => value > 0);

    if (prices.length < 2) {

      return '';

    }

    const difference =
      Math.max(...prices) - Math.min(...prices);

    return difference > 0
      ? '−₱' + difference.toLocaleString('en-PH')
      : '';

  }


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


  // ==============================
  // GO TO NOTIFICATIONS
  // ==============================

  goToNotifications() {

    this.router.navigate(['/notifications']);

  }


  // ==============================
  // GO TO SET PRICE
  // ==============================

  goToSetPrice() {

    this.router.navigate(['/set-price']);

  }

}
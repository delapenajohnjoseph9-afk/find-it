import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

import { PRODUCTS, Product } from '../data/products';

@Component({
  selector: 'app-product-details',
  templateUrl: 'product-details.page.html',
  styleUrls: ['product-details.page.scss'],
  imports: [IonContent, CommonModule]
})
export class ProductDetailsPage {

  product?: Product;
  selectedStore = 0; // cheapest store is selected first

  constructor(private route: ActivatedRoute, private router: Router) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = PRODUCTS.find(p => p.id === id);
  }

  get store() {
    return this.product?.stores[this.selectedStore];
  }

  selectStore(index: number) {
    this.selectedStore = index;
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  // Our app does not sell anything. Send the buyer to the store to check out.
  goToStore() {
    if (!this.store) return;
    window.open(this.store.url, '_blank');
    // On a real device, install @capacitor/browser and use:
    // Browser.open({ url: this.store.url });
  }
}
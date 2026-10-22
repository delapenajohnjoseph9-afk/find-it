import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

import { PRODUCTS, Product } from '../data/products';

@Component({
  selector: 'app-product-details',
  templateUrl: 'product-details.page.html',
  styleUrls: ['product-details.page.scss'],
  imports: [IonContent, CommonModule]
})
export class ProductDetailsPage implements OnInit {

  product?: Product;
  selectedStore = 0; // cheapest store is selected first
  imageFailed = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      const id = Number(idParam);

      this.product = PRODUCTS.find(p => p.id === id) ||
                     PRODUCTS.find(p => p.name.toLowerCase() === idParam?.toLowerCase());

      this.selectedStore = 0;
      this.imageFailed = false;
    });
  }

  get store() {
    return this.product?.stores?.[this.selectedStore];
  }

  selectStore(index: number) {
    this.selectedStore = index;
  }

  onImageError() {
    this.imageFailed = true;
  }

  goBack() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/categories']);
    }
  }

  // Our app does not sell anything. Send the buyer to the store to check out.
  goToStore() {
    if (!this.store) return;
    window.open(this.store.url, '_blank');
  }
}

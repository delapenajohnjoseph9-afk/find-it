import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';
import { Router } from '@angular/router';

import { PRODUCTS, Product } from '../data/products';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule]
})
export class HomePage {

  searchTerm = '';
  selectedCategory = 'All';
  showAll = false;

  products: Product[] = PRODUCTS;

  constructor(private router: Router) {}

  onSearch(event: any) {
    this.searchTerm = event.target.value;
  }

  get filteredProducts() {
    const search = this.searchTerm.trim().toLowerCase();
    if (!search) return this.products;
    return this.products.filter(p => p.name.toLowerCase().includes(search));
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }

 get visibleProducts() {
  if (this.selectedCategory === 'All') return this.filteredProducts;
  return this.filteredProducts.filter(p => p.categories.includes(this.selectedCategory));
}

  // Tap a product -> product page with the store list
  openProduct(product: Product) {
    this.router.navigate(['/product', product.id]);
  }

  private toNumber(price: string): number {
    return Number((price || '').replace(/[^0-9.]/g, '')) || 0;
  }

  getSaving(product: { stores: { price: string }[] }): string {
    const prices = product.stores.map(s => this.toNumber(s.price)).filter(v => v > 0);
    if (prices.length < 2) return '';
    const difference = Math.max(...prices) - Math.min(...prices);
    return difference > 0 ? '−₱' + difference.toLocaleString('en-PH') : '';
  }

  goToCategories()    { this.router.navigate(['/categories']); }
  goToScan()          { this.router.navigate(['/scan']); }
  goToMessage()       { this.router.navigate(['/message']); }
  goToProfile()       { this.router.navigate(['/profile']); }
  goToNotifications() { this.router.navigate(['/notifications']); }
  goToSetPrice()      { this.router.navigate(['/set-price']); }
}
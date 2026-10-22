import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { PRODUCTS, Product } from '../data/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  imports: [
    IonContent,
    CommonModule
  ]
})
export class ProductsPage implements OnInit {

  category: string = '';
  products: Product[] = [];
  searchTerm: string = '';
  private failedImages = new Set<string>();

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || 'smartphones';
      this.loadProducts();
    });
  }

  // ==============================
  // LOAD PRODUCTS FROM MASTER DATA
  // ==============================

  loadProducts() {
    const catKey = this.category.toLowerCase().trim();

    this.products = PRODUCTS.filter(p =>
      p.categories.some(c => {
        const cLower = c.toLowerCase().trim();
        if (cLower === catKey) return true;
        if (catKey === 'smartphones' && (cLower === 'phones' || cLower === 'smartphones')) return true;
        if (catKey === 'headphones' && (cLower === 'audio' || cLower === 'headphones')) return true;
        return false;
      })
    );
  }

  // ==============================
  // BACK TO CATEGORIES
  // ==============================

  goBack() {
    this.router.navigate(['/categories']);
  }

  // ==============================
  // PRODUCT CLICK -> SELECT A SHOP
  // ==============================

  selectProduct(product: Product) {
    if (product?.id) {
      this.router.navigate(['/product', product.id]);
    }
  }

  // ==============================
  // SEARCH
  // ==============================

  onSearch(event: any) {
    this.searchTerm = event.target.value;
  }

  // Products matching the search, cheapest first
  get filteredProducts(): Product[] {
    const search = this.searchTerm.trim().toLowerCase();

    return this.products
      .filter(product =>
        !search || product.name.toLowerCase().includes(search)
      )
      .sort((a, b) =>
        this.toNumber(a.lowestPrice) - this.toNumber(b.lowestPrice)
      );
  }

  private toNumber(price: string): number {
    return Number((price || '').replace(/[^0-9.]/g, '')) || 0;
  }

  // ==============================
  // BROKEN PHOTO FALLBACK
  // ==============================

  onImageError(name: string) {
    this.failedImages.add(name);
  }

  imageFailed(name: string): boolean {
    return this.failedImages.has(name);
  }

  // ==============================
  // NAVIGATION
  // ==============================

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToCategories() {
    this.router.navigate(['/categories']);
  }

  goToMessage() {
    this.router.navigate(['/message']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}

import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router';

import { PRODUCTS, Product } from '../data/products';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, CommonModule]
})
export class HomePage implements OnInit, OnDestroy {

  @ViewChild('featuredViewport') featuredViewport?: ElementRef<HTMLDivElement>;

  searchTerm = '';
  selectedCategory = 'All';
  showAll = false;

  products: Product[] = PRODUCTS;

  // Featured Deals Carousel
  activeDealIndex = 0;
  private autoSlideTimer: any;

  featuredDeals = [
    {
      id: 1,
      name: 'iPhone 15',
      image: 'assets/iphone15.jpg',
      price: 'From ₱45,999',
      label: 'FEATURED DEAL'
    },
    {
      id: 2,
      name: 'ASUS ROG Laptop',
      image: 'assets/rog.jpg',
      price: 'From ₱65,999',
      label: 'FEATURED DEAL'
    },
    {
      id: 3,
      name: 'Sony WH-1000XM5',
      image: 'assets/sony.jpg',
      price: 'From ₱8,999',
      label: 'FEATURED DEAL'
    }
  ];

  private failedImages = new Set<string>();

  constructor(private router: Router) {}

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  // ==============================
  // FEATURED DEALS CAROUSEL
  // ==============================

  onFeaturedScroll(event: Event) {
    const el = event.target as HTMLElement;
    if (!el || !el.clientWidth) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    if (index >= 0 && index < this.featuredDeals.length && index !== this.activeDealIndex) {
      this.activeDealIndex = index;
    }
  }

  scrollToDeal(index: number) {
    this.activeDealIndex = index;
    if (!this.featuredViewport) return;
    const el = this.featuredViewport.nativeElement;
    el.scrollTo({
      left: el.clientWidth * index,
      behavior: 'smooth'
    });
  }

  openFeaturedDeal(deal: any) {
    this.router.navigate(['/product', deal.id]);
  }

  startAutoSlide() {
    this.stopAutoSlide();
    this.autoSlideTimer = setInterval(() => {
      const nextIndex = (this.activeDealIndex + 1) % this.featuredDeals.length;
      this.scrollToDeal(nextIndex);
    }, 4500);
  }

  stopAutoSlide() {
    if (this.autoSlideTimer) {
      clearInterval(this.autoSlideTimer);
      this.autoSlideTimer = null;
    }
  }

  pauseAutoSlide() {
    this.stopAutoSlide();
  }

  resumeAutoSlide() {
    this.startAutoSlide();
  }

  // ==============================
  // SEARCH & FILTER
  // ==============================

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

  // ==============================
  // IMAGE ERROR FALLBACK
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

  goToCategories()    { this.router.navigate(['/categories']); }
  goToScan()          { this.router.navigate(['/scan']); }
  goToMessage()       { this.router.navigate(['/message']); }
  goToProfile()       { this.router.navigate(['/profile']); }
  goToNotifications() { this.router.navigate(['/notifications']); }
  goToSetPrice()      { this.router.navigate(['/set-price']); }
}

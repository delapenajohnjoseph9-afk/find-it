import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type NotificationType = 'price' | 'system';
type NotificationFilter = 'all' | NotificationType;

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  imports: [
    IonContent,
    CommonModule,
    FormsModule
  ]
})
export class NotificationsPage {

  constructor(private router: Router) {}

  // Filter chips shown at the top of the page
  filters: { id: NotificationFilter; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'price', label: 'Price Alerts' },
    { id: 'system', label: 'System' }
  ];

  selectedFilter: NotificationFilter = 'all';

  notifications: {
    icon: string;
    title: string;
    message: string;
    time: string;
    unread: boolean;
    type: NotificationType;
  }[] = [
    {
      icon: 'fi fi-rs-shopping-cart',
      title: 'Price Drop Alert',
      message: 'iPhone 15 price has dropped to ₱45,999.',
      time: '2 min ago',
      unread: true,
      type: 'price'
    },
    {
      icon: 'fi fi-rs-box',
      title: 'Price Updated',
      message: 'Samsung Galaxy S25 price was updated.',
      time: '14 min ago',
      unread: true,
      type: 'price'
    },
    {
      icon: 'fi fi-rs-truck-side',
      title: 'Product Update',
      message: 'A tracked product is now available.',
      time: '1 hour ago',
      unread: true,
      type: 'price'
    },
    {
      icon: 'fi fi-rs-bell',
      title: 'Special Offer',
      message: 'A product on your watchlist is on sale.',
      time: '3 hours ago',
      unread: false,
      type: 'price'
    },
    {
      icon: 'fi fi-rs-comment',
      title: 'New Message',
      message: 'You have a new message from support.',
      time: '5 hours ago',
      unread: false,
      type: 'system'
    }
  ];

  // ==============================
  // SET PRICE ALERT
  // ==============================

  showSetPrice = false;

  products = [
    { name: 'iPhone 15', image: 'assets/iphone15.jpg', price: 45999 },
    { name: 'ASUS ROG Laptop', image: 'assets/rog.jpg', price: 65999 },
    { name: 'Sony Headphones', image: 'assets/sony.jpg', price: 8999 }
  ];

  selectedProduct = this.products[0];

  targetPrice: number | null = null;

  alertEnabled = true;

  priceError = '';

  openSetPrice() {
    this.showSetPrice = true;
    this.priceError = '';
  }

  closeSetPrice() {
    this.showSetPrice = false;
  }

  selectProduct(product: { name: string; image: string; price: number }) {
    this.selectedProduct = product;
    this.priceError = '';
  }

  toggleAlert() {
    this.alertEnabled = !this.alertEnabled;
  }

  setPriceAlert() {

    if (!this.targetPrice || this.targetPrice <= 0) {
      this.priceError = 'Please enter a valid target price.';
      return;
    }

    if (this.targetPrice >= this.selectedProduct.price) {
      this.priceError = 'Target price should be lower than the current price.';
      return;
    }

    // Show the new alert at the top of the list
    this.notifications.unshift({
      icon: 'fi fi-rs-bell',
      title: 'Price Alert Set',
      message: `We'll notify you when ${this.selectedProduct.name} reaches ₱${this.targetPrice.toLocaleString()}.`,
      time: 'Just now',
      unread: true,
      type: 'price'
    });

    this.targetPrice = null;
    this.priceError = '';
    this.showSetPrice = false;
    this.selectedFilter = 'all';

  }

  // ==============================
  // FILTER
  // ==============================

  setFilter(filter: NotificationFilter) {
    this.selectedFilter = filter;
  }

  get filteredNotifications() {

    if (this.selectedFilter === 'all') {
      return this.notifications;
    }

    return this.notifications.filter(
      notification => notification.type === this.selectedFilter
    );

  }

  get unreadCount(): number {
    return this.notifications.filter(notification => notification.unread).length;
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

  goToScan() {
    this.router.navigate(['/scan']);
  }

  goToMessage() {
    this.router.navigate(['/message']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
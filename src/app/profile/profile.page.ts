import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router';

import { Currency, ProfileService } from './profile.service';

type View = 'profile' | 'edit' | 'saved' | 'alerts' | 'settings';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  imports: [IonContent, FormsModule],
})
export class ProfilePage {
  private router = inject(Router);
  store = inject(ProfileService);

  view = signal<View>('profile');
  confirmLogout = signal(false);
  toastText = signal('');

  currencies: Currency[] = ['PHP', 'USD', 'EUR', 'GBP'];

  options: { view: View; label: string; icon: string }[] = [
    { view: 'edit', label: 'Edit Profile', icon: 'fi-rs-user-pen' },
    { view: 'saved', label: 'Saved Products', icon: 'fi-rs-heart' },
    { view: 'alerts', label: 'Price Alerts', icon: 'fi-rs-bell' },
    { view: 'settings', label: 'Settings', icon: 'fi-rs-settings' },
  ];

  // Edit profile form
  form = { name: '', username: '', email: '' };
  errors: { name?: string; username?: string; email?: string } = {};

  // New price alert form
  alertForm: { product: string; target: number | null } = { product: '', target: null };
  alertError = '';

  private toastTimer?: ReturnType<typeof setTimeout>;

  initial = computed(() => (this.store.user().name.trim()[0] || '?').toUpperCase());
  activeAlerts = computed(() => this.store.alerts().filter(a => a.active).length);

  titles: Record<View, { title: string; subtitle: () => string }> = {
    profile: { title: 'Profile', subtitle: () => 'Manage your account' },
    edit: { title: 'Edit Profile', subtitle: () => 'Update your details' },
    saved: { title: 'Saved Products', subtitle: () => `${this.store.saved().length} saved` },
    alerts: { title: 'Price Alerts', subtitle: () => `${this.activeAlerts()} active` },
    settings: { title: 'Settings', subtitle: () => 'Notifications and preferences' },
  };

  // ==============================
  // VIEW NAVIGATION
  // ==============================

  open(view: View) {
    if (view === 'edit') {
      this.form = { ...this.store.user() };
      this.errors = {};
    }
    if (view === 'alerts') {
      this.alertForm = { product: '', target: null };
      this.alertError = '';
    }
    this.view.set(view);
  }

  // Back goes up one level; from the main profile view it goes home.
  back() {
    if (this.view() === 'profile') this.goToHome();
    else this.view.set('profile');
  }

  // ==============================
  // EDIT PROFILE
  // ==============================

  saveProfile() {
    const name = this.form.name.trim();
    const username = this.form.username.trim().replace(/^@/, '');
    const email = this.form.email.trim();

    this.errors = {};
    if (!name) this.errors.name = 'Name can’t be empty.';
    if (!/^[a-z0-9_.]{3,20}$/i.test(username)) {
      this.errors.username = 'Use 3–20 letters, numbers, dots or underscores.';
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) this.errors.email = 'Enter a valid email address.';
    if (Object.keys(this.errors).length) return;

    this.store.updateUser({ name, username, email });
    this.view.set('profile');
    this.toast('Profile saved');
  }

  // ==============================
  // SAVED PRODUCTS
  // ==============================

  removeSaved(id: number) {
    this.store.removeSaved(id);
    this.toast('Removed from saved');
  }

  clearSaved() {
    this.store.clearSaved();
    this.toast('Saved list cleared');
  }

  // ==============================
  // PRICE ALERTS
  // ==============================

  addAlert() {
    const product = this.alertForm.product.trim();
    const target = Number(this.alertForm.target);
    if (!product || !(target > 0)) {
      this.alertError = 'Enter a product name and a target price above 0.';
      return;
    }
    this.store.addAlert(product, target);
    this.alertForm = { product: '', target: null };
    this.alertError = '';
    this.toast('Alert added');
  }

  toggleAlert(id: number) {
    this.store.toggleAlert(id);
  }

  removeAlert(id: number) {
    this.store.removeAlert(id);
    this.toast('Alert deleted');
  }

  // ==============================
  // SETTINGS
  // ==============================

  toggleSetting(key: 'push' | 'emailDigest') {
    this.store.setSetting(key, !this.store.settings()[key]);
  }

  setCurrency(currency: Currency) {
    this.store.setSetting('currency', currency);
    this.toast(`Currency set to ${currency}`);
  }

  resetAll() {
    this.store.resetAll();
    this.toast('Data reset');
  }

  money(value: number): string {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: this.store.settings().currency,
    }).format(value);
  }

  // ==============================
  // LOG OUT
  // ==============================

  logout() {
    this.confirmLogout.set(false);
    // TODO: clear your auth token / call your auth service here.
    this.router.navigate(['/login'], { replaceUrl: true }); // change to your login route
  }

  // ==============================
  // BOTTOM NAV
  // ==============================

  goToHome() { this.router.navigate(['/home']); }
  goToCategories() { this.router.navigate(['/categories']); }
  goToScan() { this.router.navigate(['/scan']); }
  goToMessage() { this.router.navigate(['/message']); }

  // ==============================
  // TOAST
  // ==============================

  private toast(text: string) {
    this.toastText.set(text);
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.toastText.set(''), 1800);
  }
}
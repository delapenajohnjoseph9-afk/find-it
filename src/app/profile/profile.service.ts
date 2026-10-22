import { Injectable, effect, signal } from '@angular/core';

export type Currency = 'PHP' | 'USD' | 'EUR' | 'GBP';

export interface User { name: string; username: string; email: string; }
export interface SavedProduct { id: number; name: string; price: number; }
export interface PriceAlert { id: number; product: string; target: number; active: boolean; }
export interface AppSettings { push: boolean; emailDigest: boolean; currency: Currency; }

interface State {
  user: User;
  saved: SavedProduct[];
  alerts: PriceAlert[];
  settings: AppSettings;
}

const KEY = 'profile-state';

// Sample data so the screens are not empty while you build. Replace with API calls later.
const DEFAULTS: State = {
  user: { name: 'John', username: 'john', email: 'john@example.com' },
  saved: [
    { id: 1, name: 'Sony WH-1000XM5', price: 18990 },
    { id: 2, name: 'Logitech MX Master 3S', price: 5495 },
    { id: 3, name: 'Kindle Paperwhite', price: 8990 },
  ],
  alerts: [
    { id: 1, product: 'Sony WH-1000XM5', target: 16000, active: true },
    { id: 2, product: 'iPad Air', target: 29000, active: false },
  ],
  settings: { push: true, emailDigest: false, currency: 'PHP' },
};

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private initial = this.load();

  user = signal<User>(this.initial.user);
  saved = signal<SavedProduct[]>(this.initial.saved);
  alerts = signal<PriceAlert[]>(this.initial.alerts);
  settings = signal<AppSettings>(this.initial.settings);

  constructor() {
    // Save to the device whenever anything changes.
    effect(() => {
      const state: State = {
        user: this.user(),
        saved: this.saved(),
        alerts: this.alerts(),
        settings: this.settings(),
      };
      try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* storage unavailable */ }
    });
  }

  updateUser(user: User) { this.user.set(user); }

  // Call these from your product pages too.
  addSaved(p: SavedProduct) {
    if (!this.saved().some(s => s.id === p.id)) this.saved.update(l => [p, ...l]);
  }
  removeSaved(id: number) { this.saved.update(l => l.filter(p => p.id !== id)); }
  clearSaved() { this.saved.set([]); }

  addAlert(product: string, target: number) {
    this.alerts.update(l => [{ id: Date.now(), product, target, active: true }, ...l]);
  }
  toggleAlert(id: number) {
    this.alerts.update(l => l.map(a => (a.id === id ? { ...a, active: !a.active } : a)));
  }
  removeAlert(id: number) { this.alerts.update(l => l.filter(a => a.id !== id)); }

  setSetting<K extends keyof AppSettings>(key: K, value: AppSettings[K]) {
    this.settings.update(s => ({ ...s, [key]: value }));
  }

  resetAll() {
    const d = structuredClone(DEFAULTS);
    this.user.set(d.user);
    this.saved.set(d.saved);
    this.alerts.set(d.alerts);
    this.settings.set(d.settings);
  }

  private load(): State {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) return { ...structuredClone(DEFAULTS), ...JSON.parse(raw) };
    } catch { /* ignore corrupt or missing data */ }
    return structuredClone(DEFAULTS);
  }
}
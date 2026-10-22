import { Component, ElementRef, ViewChild, computed, effect, inject, signal } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router';

interface Chat {
  id: number;
  from: 'me' | 'them';
  text: string;
  at: number; // timestamp
}

interface Conversation {
  id: number;
  name: string;
  unread: boolean;
  chats: Chat[];
}

const KEY = 'messages-state';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
  imports: [IonContent],
})
export class MessagePage {
  private router = inject(Router);

  @ViewChild('thread') thread?: ElementRef<HTMLElement>;

  // ==============================
  // STATE
  // ==============================

  view = signal<'list' | 'chat'>('list');
  activeId = signal<number | null>(null);
  searchTerm = signal('');
  draft = '';
  confirmDelete = signal(false);
  toastText = signal('');
  private toastTimer?: ReturnType<typeof setTimeout>;

  conversations = signal<Conversation[]>(this.load());

  constructor() {
    // Save to the device whenever anything changes.
    effect(() => {
      try { localStorage.setItem(KEY, JSON.stringify(this.conversations())); } catch { /* storage unavailable */ }
    });
  }

  // ==============================
  // DERIVED VALUES
  // ==============================

  unreadCount = computed(() => this.conversations().filter(c => c.unread).length);

  active = computed(() => this.conversations().find(c => c.id === this.activeId()) ?? null);

  filteredMessages = computed(() => {
    const search = this.searchTerm().trim().toLowerCase();
    const sorted = [...this.conversations()].sort((a, b) => this.lastAt(b) - this.lastAt(a));
    if (!search) return sorted;
    return sorted.filter(c =>
      c.name.toLowerCase().includes(search) ||
      this.preview(c).toLowerCase().includes(search)
    );
  });

  // ==============================
  // SEARCH
  // ==============================

  onSearch(event: Event) {
    this.searchTerm.set((event.target as HTMLInputElement).value);
  }

  // ==============================
  // LIST HELPERS
  // ==============================

  preview(c: Conversation): string {
    const last = c.chats[c.chats.length - 1];
    if (!last) return 'No messages yet';
    return (last.from === 'me' ? 'You: ' : '') + last.text;
  }

  lastAt(c: Conversation): number {
    return c.chats[c.chats.length - 1]?.at ?? 0;
  }

  timeLabel(at: number): string {
    if (!at) return '';
    const d = new Date(at);
    const now = new Date();
    const startToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    if (at >= startToday) {
      return d.toLocaleTimeString('en-PH', { hour: 'numeric', minute: '2-digit' });
    }
    if (at >= startToday - 86400000) return 'Yesterday';
    return d.toLocaleDateString('en-PH', { month: 'short', day: 'numeric' });
  }

  // ==============================
  // OPEN / CLOSE A CONVERSATION
  // ==============================

  openMessage(c: Conversation) {
    this.activeId.set(c.id);
    this.draft = '';
    this.view.set('chat');
    this.conversations.update(l => l.map(x => (x.id === c.id ? { ...x, unread: false } : x)));
    this.scrollToEnd();
  }

  showList() {
    this.view.set('list');
    this.activeId.set(null);
    this.confirmDelete.set(false);
  }

  // Back goes up one level; from the list it goes home.
  back() {
    if (this.view() === 'chat') this.showList();
    else this.goToHome();
  }

  // ==============================
  // SEND A MESSAGE
  // ==============================

  onDraft(event: Event) {
    this.draft = (event.target as HTMLInputElement).value;
  }

  send() {
    const text = this.draft.trim();
    const id = this.activeId();
    if (!text || id === null) return;

    const chat: Chat = { id: Date.now(), from: 'me', text, at: Date.now() };
    this.conversations.update(l =>
      l.map(c => (c.id === id ? { ...c, chats: [...c.chats, chat] } : c))
    );
    this.draft = '';
    this.scrollToEnd();
  }

  // ==============================
  // MARK READ / DELETE
  // ==============================

  markAllRead() {
    this.conversations.update(l => l.map(c => ({ ...c, unread: false })));
    this.toast('All messages marked as read');
  }

  deleteConversation() {
    const id = this.activeId();
    this.conversations.update(l => l.filter(c => c.id !== id));
    this.showList();
    this.toast('Conversation deleted');
  }

  // ==============================
  // NAVIGATION
  // ==============================

  goToHome() { this.router.navigate(['/home']); }
  goToCategories() { this.router.navigate(['/categories']); }
  goToScan() { this.router.navigate(['/scan']); }
  goToProfile() { this.router.navigate(['/profile']); }

  // ==============================
  // INTERNALS
  // ==============================

  private scrollToEnd() {
    setTimeout(() => {
      const el = this.thread?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight;
    }, 0);
  }

  private toast(text: string) {
    this.toastText.set(text);
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.toastText.set(''), 1800);
  }

  // Sample conversations so the page is not empty. Replace with your API later.
  private seed(): Conversation[] {
    const now = Date.now();
    const m = (n: number) => now - n * 60000;
    const day = 86400000;
    return [
      { id: 1, name: 'John', unread: true, chats: [{ id: 11, from: 'them', text: 'Is the product still available?', at: m(30) }] },
      { id: 2, name: 'Mark', unread: false, chats: [
        { id: 21, from: 'me', text: 'It has a 1-year warranty and free delivery.', at: m(150) },
        { id: 22, from: 'them', text: 'Thank you for the information.', at: m(105) } ] },
      { id: 3, name: 'Anna', unread: false, chats: [{ id: 31, from: 'them', text: 'I found a cheaper price for it.', at: now - day }] },
      { id: 4, name: 'Ryan', unread: false, chats: [{ id: 41, from: 'them', text: 'Can you send me the product link?', at: now - day - 3600000 }] },
    ];
  }

  private load(): Conversation[] {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) return JSON.parse(raw);
    } catch { /* ignore corrupt or missing data */ }
    return this.seed();
  }
}
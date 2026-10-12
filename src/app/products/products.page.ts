import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

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

  products: any[] = [];

  // search + broken photo fallback
  searchTerm: string = '';

  private failedImages = new Set<string>();

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

    this.route.paramMap.subscribe(params => {

      this.category =
        params.get('category') || 'smartphones';

      this.loadProducts();

    });

  }


  // ==============================
  // LOAD PRODUCTS
  // ==============================

  loadProducts() {

    const productData: any = {

      smartphones: [
        {
          name: 'iPhone 15',
          image: 'assets/iphone15.jpg',
          price: '₱45,999'
        },
        {
          name: 'Samsung Galaxy S25',
          image: 'assets/galaxy-s25.jpg',
          price: '₱49,999'
        },
        {
          name: 'Google Pixel 9',
          image: 'assets/pixel-9.jpg',
          price: '₱39,999'
        }
      ],

      laptops: [
        {
          name: 'ASUS ROG Laptop',
          image: 'assets/rog.jpg',
          price: '₱65,999'
        },
        {
          name: 'MacBook Air M3',
          image: 'assets/macbook.jpg',
          price: '₱54,999'
        },
        {
          name: 'Acer Nitro V',
          image: 'assets/acer-nitro.jpg',
          price: '₱49,999'
        }
      ],

      headphones: [
        {
          name: 'Sony WH-1000XM5',
          image: 'assets/sony.jpg',
          price: '₱8,999'
        },
        {
          name: 'AirPods Pro',
          image: 'assets/airpods.jpg',
          price: '₱13,999'
        },
        {
          name: 'JBL Tune',
          image: 'assets/jbl.jpg',
          price: '₱3,999'
        }
      ],

      accessories: [
        {
          name: 'Logitech Keyboard',
          image: 'assets/keyboard.jpg',
          price: '₱2,499'
        },
        {
          name: 'Anker Charger',
          image: 'assets/charger.jpg',
          price: '₱1,999'
        },
        {
          name: 'USB-C Hub',
          image: 'assets/usb-hub.jpg',
          price: '₱1,499'
        }
      ],

      monitors: [
        {
          name: 'LG UltraGear',
          image: 'assets/lg-monitor.jpg',
          price: '₱15,999'
        },
        {
          name: 'Samsung Odyssey',
          image: 'assets/odyssey.jpg',
          price: '₱18,999'
        },
        {
          name: 'ASUS TUF Gaming',
          image: 'assets/asus-monitor.jpg',
          price: '₱16,999'
        }
      ],

      gaming: [
        {
          name: 'PlayStation 5',
          image: 'assets/ps5.jpg',
          price: '₱27,999'
        },
        {
          name: 'Xbox Series X',
          image: 'assets/xbox.jpg',
          price: '₱29,999'
        },
        {
          name: 'Nintendo Switch',
          image: 'assets/switch.jpg',
          price: '₱17,999'
        }
      ],

      cameras: [
        {
          name: 'Canon EOS R50',
          image: 'assets/canon-r50.jpg',
          price: '₱39,999'
        },
        {
          name: 'Sony A6400',
          image: 'assets/sony-a6400.jpg',
          price: '₱45,999'
        },
        {
          name: 'Nikon Z50',
          image: 'assets/nikon-z50.jpg',
          price: '₱42,999'
        }
      ],

      smartwatches: [
        {
          name: 'Apple Watch',
          image: 'assets/apple-watch.jpg',
          price: '₱19,999'
        },
        {
          name: 'Galaxy Watch',
          image: 'assets/galaxy-watch.jpg',
          price: '₱14,999'
        },
        {
          name: 'Huawei Watch',
          image: 'assets/huawei-watch.jpg',
          price: '₱9,999'
        }
      ]

    };

    this.products =
      productData[this.category] || [];

  }


  // ==============================
  // BACK TO CATEGORIES
  // ==============================

  goBack() {

    this.router.navigate(['/categories']);

  }


  // ==============================
  // PRODUCT CLICK
  // ==============================

  selectProduct(product: any) {

    console.log(
      'Selected product:',
      product.name
    );

  }

  // ==============================
  // SEARCH
  // ==============================

  onSearch(event: any) {

    this.searchTerm = event.target.value;

  }


  // Products matching the search, cheapest first
  get filteredProducts(): any[] {

    const search = this.searchTerm
      .trim()
      .toLowerCase();

    return this.products
      .filter(product =>
        !search || product.name.toLowerCase().includes(search)
      )
      .sort((a, b) =>
        this.toNumber(a.price) - this.toNumber(b.price)
      );

  }


  private toNumber(price: string): number {

    return Number(
      (price || '').replace(/[^0-9.]/g, '')
    ) || 0;

  }


  // ==============================
  // BROKEN PHOTO FALLBACK
  // ==============================

  onImageError(product: any) {

    this.failedImages.add(product.name);

  }


  imageFailed(product: any): boolean {

    return this.failedImages.has(product.name);

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
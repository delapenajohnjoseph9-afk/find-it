export interface Store {
  name: string;
  price: string;
  shipping: string;
  url: string; // where the buyer finishes the purchase
}

export interface Product {
  id: number;
  name: string;
  image: string;
  lowestPrice: string;
  categories: string[];
  stores: Store[]; // keep sorted cheapest first
}

// Search links for now. Replace with the exact listing URL of each product when you have them.
const shopee = (q: string) => 'https://shopee.ph/search?keyword=' + encodeURIComponent(q);
const lazada = (q: string) => 'https://www.lazada.com.ph/catalog/?q=' + encodeURIComponent(q);
const tiktok = (q: string) => 'https://www.tiktok.com/search?q=' + encodeURIComponent(q);

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'iPhone 15',
    image: 'assets/iphone15.jpg',
    lowestPrice: '₱45,999',
    categories: ['Phones'],
    stores: [
      { name: 'Shopee', price: '₱45,999', shipping: 'Free shipping', url: shopee('iPhone 15') },
      { name: 'Lazada', price: '₱46,499', shipping: '₱99 shipping', url: lazada('iPhone 15') },
      { name: 'TikTok Shop', price: '₱47,999', shipping: 'Free shipping', url: tiktok('iPhone 15') }
    ]
  },
  {
    id: 2,
    name: 'ASUS ROG Laptop',
    image: 'assets/rog.jpg',
    lowestPrice: '₱65,999',
    categories: ['Laptops', 'Gaming'],
    stores: [
      { name: 'Shopee', price: '₱65,999', shipping: 'Free shipping', url: shopee('ASUS ROG Laptop') },
      { name: 'Lazada', price: '₱67,499', shipping: 'Free shipping', url: lazada('ASUS ROG Laptop') },
      { name: 'TikTok Shop', price: '₱69,999', shipping: '₱199 shipping', url: tiktok('ASUS ROG Laptop') }
    ]
  },
  {
    id: 3,
    name: 'Sony Headphones',
    image: 'assets/sony.jpg',
    lowestPrice: '₱8,999',
    categories: ['Audio'],
    stores: [
      { name: 'Shopee', price: '₱8,999', shipping: '₱79 shipping', url: shopee('Sony Headphones') },
      { name: 'Lazada', price: '₱9,499', shipping: 'Free shipping', url: lazada('Sony Headphones') },
      { name: 'TikTok Shop', price: '₱9,999', shipping: 'Free shipping', url: tiktok('Sony Headphones') }
    ]
  },
  {
    id: 4,
    name: 'Galaxy S24',
    image: 'assets/galaxy-s24.jpg', // add this image to src/assets
    lowestPrice: '₱41,499',
    categories: ['Phones'],
    stores: [
      { name: 'Lazada', price: '₱41,499', shipping: '₱99 shipping', url: lazada('Galaxy S24') },
      { name: 'Shopee', price: '₱42,999', shipping: 'Free shipping', url: shopee('Galaxy S24') },
      { name: 'TikTok Shop', price: '₱44,999', shipping: 'Free shipping', url: tiktok('Galaxy S24') }
    ]
  }
];
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
  // --- SMARTPHONES ---
  {
    id: 1,
    name: 'iPhone 15',
    image: 'assets/iphone15.jpg',
    lowestPrice: '₱45,999',
    categories: ['Phones', 'smartphones'],
    stores: [
      { name: 'Shopee', price: '₱45,999', shipping: 'Free shipping', url: shopee('iPhone 15') },
      { name: 'Lazada', price: '₱46,499', shipping: '₱99 shipping', url: lazada('iPhone 15') },
      { name: 'TikTok Shop', price: '₱47,999', shipping: 'Free shipping', url: tiktok('iPhone 15') }
    ]
  },
  {
    id: 4,
    name: 'Samsung Galaxy S25',
    image: 'assets/s25.jpg',
    lowestPrice: '₱49,999',
    categories: ['Phones', 'smartphones'],
    stores: [
      { name: 'Shopee', price: '₱49,999', shipping: 'Free shipping', url: shopee('Samsung Galaxy S25') },
      { name: 'Lazada', price: '₱50,499', shipping: '₱99 shipping', url: lazada('Samsung Galaxy S25') },
      { name: 'TikTok Shop', price: '₱51,999', shipping: 'Free shipping', url: tiktok('Samsung Galaxy S25') }
    ]
  },
  {
    id: 5,
    name: 'Google Pixel 9',
    image: 'assets/pixel9.jpg',
    lowestPrice: '₱39,999',
    categories: ['Phones', 'smartphones'],
    stores: [
      { name: 'Shopee', price: '₱39,999', shipping: 'Free shipping', url: shopee('Google Pixel 9') },
      { name: 'Lazada', price: '₱40,499', shipping: '₱99 shipping', url: lazada('Google Pixel 9') },
      { name: 'TikTok Shop', price: '₱41,999', shipping: 'Free shipping', url: tiktok('Google Pixel 9') }
    ]
  },
  {
    id: 25,
    name: 'Samsung Galaxy S24',
    image: 'assets/s24.jpg',
    lowestPrice: '₱41,499',
    categories: ['Phones', 'smartphones'],
    stores: [
      { name: 'Lazada', price: '₱41,499', shipping: '₱99 shipping', url: lazada('Samsung Galaxy S24') },
      { name: 'Shopee', price: '₱42,999', shipping: 'Free shipping', url: shopee('Samsung Galaxy S24') },
      { name: 'TikTok Shop', price: '₱44,999', shipping: 'Free shipping', url: tiktok('Samsung Galaxy S24') }
    ]
  },
  {
    id: 26,
    name: 'iPhone 15 Pro',
    image: 'assets/ip15pro.jpg',
    lowestPrice: '₱69,999',
    categories: ['Phones', 'smartphones'],
    stores: [
      { name: 'Shopee', price: '₱69,999', shipping: 'Free shipping', url: shopee('iPhone 15 Pro') },
      { name: 'Lazada', price: '₱70,999', shipping: 'Free shipping', url: lazada('iPhone 15 Pro') },
      { name: 'TikTok Shop', price: '₱72,499', shipping: 'Free shipping', url: tiktok('iPhone 15 Pro') }
    ]
  },
  {
    id: 27,
    name: 'Xiaomi 14',
    image: 'assets/14.jpg',
    lowestPrice: '₱35,999',
    categories: ['Phones', 'smartphones'],
    stores: [
      { name: 'Shopee', price: '₱35,999', shipping: 'Free shipping', url: shopee('Xiaomi 14') },
      { name: 'Lazada', price: '₱36,499', shipping: '₱80 shipping', url: lazada('Xiaomi 14') },
      { name: 'TikTok Shop', price: '₱37,999', shipping: 'Free shipping', url: tiktok('Xiaomi 14') }
    ]
  },
  {
    id: 28,
    name: 'Google Pixel 8',
    image: 'assets/pixel8.jpg',
    lowestPrice: '₱31,999',
    categories: ['Phones', 'smartphones'],
    stores: [
      { name: 'Shopee', price: '₱31,999', shipping: 'Free shipping', url: shopee('Google Pixel 8') },
      { name: 'Lazada', price: '₱32,499', shipping: '₱99 shipping', url: lazada('Google Pixel 8') },
      { name: 'TikTok Shop', price: '₱33,999', shipping: 'Free shipping', url: tiktok('Google Pixel 8') }
    ]
  },
  {
    id: 29,
    name: 'OnePlus 12',
    image: 'assets/one12.jpg',
    lowestPrice: '₱48,999',
    categories: ['Phones', 'smartphones'],
    stores: [
      { name: 'Shopee', price: '₱48,999', shipping: 'Free shipping', url: shopee('OnePlus 12') },
      { name: 'Lazada', price: '₱49,999', shipping: '₱120 shipping', url: lazada('OnePlus 12') },
      { name: 'TikTok Shop', price: '₱51,000', shipping: 'Free shipping', url: tiktok('OnePlus 12') }
    ]
  },

  // --- LAPTOPS ---
  {
    id: 2,
    name: 'ASUS ROG Laptop',
    image: 'assets/rog.jpg',
    lowestPrice: '₱65,999',
    categories: ['Laptops', 'Gaming', 'laptops', 'gaming'],
    stores: [
      { name: 'Shopee', price: '₱65,999', shipping: 'Free shipping', url: shopee('ASUS ROG Laptop') },
      { name: 'Lazada', price: '₱67,499', shipping: 'Free shipping', url: lazada('ASUS ROG Laptop') },
      { name: 'TikTok Shop', price: '₱69,999', shipping: '₱199 shipping', url: tiktok('ASUS ROG Laptop') }
    ]
  },
  {
    id: 6,
    name: 'MacBook Air M3',
    image: 'assets/m3.jpg',
    lowestPrice: '₱54,999',
    categories: ['Laptops', 'laptops'],
    stores: [
      { name: 'Shopee', price: '₱54,999', shipping: 'Free shipping', url: shopee('MacBook Air M3') },
      { name: 'Lazada', price: '₱55,999', shipping: 'Free shipping', url: lazada('MacBook Air M3') },
      { name: 'TikTok Shop', price: '₱57,499', shipping: 'Free shipping', url: tiktok('MacBook Air M3') }
    ]
  },
  {
    id: 7,
    name: 'Acer Nitro V',
    image: 'assets/nitro.jpg',
    lowestPrice: '₱49,999',
    categories: ['Laptops', 'Gaming', 'laptops', 'gaming'],
    stores: [
      { name: 'Shopee', price: '₱49,999', shipping: 'Free shipping', url: shopee('Acer Nitro V') },
      { name: 'Lazada', price: '₱51,299', shipping: '₱150 shipping', url: lazada('Acer Nitro V') },
      { name: 'TikTok Shop', price: '₱52,000', shipping: 'Free shipping', url: tiktok('Acer Nitro V') }
    ]
  },
  {
    id: 30,
    name: 'Lenovo Legion 5',
    image: 'assets/lenovo.jpg',
    lowestPrice: '₱59,999',
    categories: ['Laptops', 'Gaming', 'laptops', 'gaming'],
    stores: [
      { name: 'Shopee', price: '₱59,999', shipping: 'Free shipping', url: shopee('Lenovo Legion 5') },
      { name: 'Lazada', price: '₱61,499', shipping: 'Free shipping', url: lazada('Lenovo Legion 5') },
      { name: 'TikTok Shop', price: '₱62,999', shipping: '₱150 shipping', url: tiktok('Lenovo Legion 5') }
    ]
  },

  // --- HEADPHONES / AUDIO ---
  {
    id: 3,
    name: 'Sony WH-1000XM5',
    image: 'assets/sony.jpg',
    lowestPrice: '₱8,999',
    categories: ['Audio', 'headphones'],
    stores: [
      { name: 'Shopee', price: '₱8,999', shipping: '₱79 shipping', url: shopee('Sony WH-1000XM5') },
      { name: 'Lazada', price: '₱9,499', shipping: 'Free shipping', url: lazada('Sony WH-1000XM5') },
      { name: 'TikTok Shop', price: '₱9,999', shipping: 'Free shipping', url: tiktok('Sony WH-1000XM5') }
    ]
  },
  {
    id: 8,
    name: 'AirPods Pro',
    image: 'assets/airpods.jpg',
    lowestPrice: '₱13,999',
    categories: ['Audio', 'headphones'],
    stores: [
      { name: 'Shopee', price: '₱13,999', shipping: 'Free shipping', url: shopee('AirPods Pro') },
      { name: 'Lazada', price: '₱14,499', shipping: '₱80 shipping', url: lazada('AirPods Pro') },
      { name: 'TikTok Shop', price: '₱14,999', shipping: 'Free shipping', url: tiktok('AirPods Pro') }
    ]
  },
  {
    id: 9,
    name: 'JBL Tune',
    image: 'assets/jbl.jpg',
    lowestPrice: '₱3,999',
    categories: ['Audio', 'headphones'],
    stores: [
      { name: 'Shopee', price: '₱3,999', shipping: 'Free shipping', url: shopee('JBL Tune') },
      { name: 'Lazada', price: '₱4,199', shipping: '₱50 shipping', url: lazada('JBL Tune') },
      { name: 'TikTok Shop', price: '₱4,399', shipping: 'Free shipping', url: tiktok('JBL Tune') }
    ]
  },
  {
    id: 31,
    name: 'Marshall Major IV',
    image: 'assets/marshall.jpg',
    lowestPrice: '₱6,490',
    categories: ['Audio', 'headphones'],
    stores: [
      { name: 'Shopee', price: '₱6,490', shipping: 'Free shipping', url: shopee('Marshall Major IV') },
      { name: 'Lazada', price: '₱6,890', shipping: '₱60 shipping', url: lazada('Marshall Major IV') },
      { name: 'TikTok Shop', price: '₱7,190', shipping: 'Free shipping', url: tiktok('Marshall Major IV') }
    ]
  },

  // --- ACCESSORIES ---
  {
    id: 10,
    name: 'Logitech Keyboard',
    image: 'assets/logi.jpg',
    lowestPrice: '₱2,499',
    categories: ['Accessories', 'accessories'],
    stores: [
      { name: 'Shopee', price: '₱2,499', shipping: 'Free shipping', url: shopee('Logitech Keyboard') },
      { name: 'Lazada', price: '₱2,650', shipping: '₱60 shipping', url: lazada('Logitech Keyboard') },
      { name: 'TikTok Shop', price: '₱2,799', shipping: 'Free shipping', url: tiktok('Logitech Keyboard') }
    ]
  },
  {
    id: 11,
    name: 'Anker Charger',
    image: 'assets/charger.jpg',
    lowestPrice: '₱1,999',
    categories: ['Accessories', 'accessories'],
    stores: [
      { name: 'Shopee', price: '₱1,999', shipping: 'Free shipping', url: shopee('Anker Charger') },
      { name: 'Lazada', price: '₱2,099', shipping: '₱45 shipping', url: lazada('Anker Charger') },
      { name: 'TikTok Shop', price: '₱2,199', shipping: 'Free shipping', url: tiktok('Anker Charger') }
    ]
  },
  {
    id: 12,
    name: 'USB-C Hub',
    image: 'assets/usb.jpg',
    lowestPrice: '₱1,499',
    categories: ['Accessories', 'accessories'],
    stores: [
      { name: 'Shopee', price: '₱1,499', shipping: 'Free shipping', url: shopee('USB-C Hub') },
      { name: 'Lazada', price: '₱1,599', shipping: '₱50 shipping', url: lazada('USB-C Hub') },
      { name: 'TikTok Shop', price: '₱1,650', shipping: 'Free shipping', url: tiktok('USB-C Hub') }
    ]
  },
  {
    id: 32,
    name: 'Razer DeathAdder Mouse',
    image: 'assets/mouse.jpg',
    lowestPrice: '₱1,899',
    categories: ['Accessories', 'accessories'],
    stores: [
      { name: 'Shopee', price: '₱1,899', shipping: 'Free shipping', url: shopee('Razer DeathAdder Mouse') },
      { name: 'Lazada', price: '₱1,999', shipping: '₱50 shipping', url: lazada('Razer DeathAdder Mouse') },
      { name: 'TikTok Shop', price: '₱2,099', shipping: 'Free shipping', url: tiktok('Razer DeathAdder Mouse') }
    ]
  },

  // --- MONITORS ---
  {
    id: 13,
    name: 'LG UltraGear',
    image: 'assets/lg.jpg',
    lowestPrice: '₱15,999',
    categories: ['Monitors', 'monitors'],
    stores: [
      { name: 'Shopee', price: '₱15,999', shipping: 'Free shipping', url: shopee('LG UltraGear') },
      { name: 'Lazada', price: '₱16,499', shipping: '₱120 shipping', url: lazada('LG UltraGear') },
      { name: 'TikTok Shop', price: '₱16,999', shipping: 'Free shipping', url: tiktok('LG UltraGear') }
    ]
  },
  {
    id: 14,
    name: 'Samsung Odyssey',
    image: 'assets/samsung.jpg',
    lowestPrice: '₱18,999',
    categories: ['Monitors', 'monitors'],
    stores: [
      { name: 'Shopee', price: '₱18,999', shipping: 'Free shipping', url: shopee('Samsung Odyssey') },
      { name: 'Lazada', price: '₱19,499', shipping: '₱150 shipping', url: lazada('Samsung Odyssey') },
      { name: 'TikTok Shop', price: '₱19,999', shipping: 'Free shipping', url: tiktok('Samsung Odyssey') }
    ]
  },
  {
    id: 15,
    name: 'ASUS TUF Gaming',
    image: 'assets/asus.jpg',
    lowestPrice: '₱16,999',
    categories: ['Monitors', 'monitors'],
    stores: [
      { name: 'Shopee', price: '₱16,999', shipping: 'Free shipping', url: shopee('ASUS TUF Gaming Monitor') },
      { name: 'Lazada', price: '₱17,299', shipping: '₱120 shipping', url: lazada('ASUS TUF Gaming Monitor') },
      { name: 'TikTok Shop', price: '₱17,899', shipping: 'Free shipping', url: tiktok('ASUS TUF Gaming Monitor') }
    ]
  },

  // --- GAMING ---
  {
    id: 16,
    name: 'PlayStation 5',
    image: 'assets/ps5.jpg',
    lowestPrice: '₱27,999',
    categories: ['Gaming', 'gaming'],
    stores: [
      { name: 'Shopee', price: '₱27,999', shipping: 'Free shipping', url: shopee('PlayStation 5') },
      { name: 'Lazada', price: '₱28,499', shipping: 'Free shipping', url: lazada('PlayStation 5') },
      { name: 'TikTok Shop', price: '₱29,299', shipping: 'Free shipping', url: tiktok('PlayStation 5') }
    ]
  },
  {
    id: 17,
    name: 'Xbox Series X',
    image: 'assets/xbox.jpg',
    lowestPrice: '₱29,999',
    categories: ['Gaming', 'gaming'],
    stores: [
      { name: 'Shopee', price: '₱29,999', shipping: 'Free shipping', url: shopee('Xbox Series X') },
      { name: 'Lazada', price: '₱30,499', shipping: 'Free shipping', url: lazada('Xbox Series X') },
      { name: 'TikTok Shop', price: '₱31,000', shipping: 'Free shipping', url: tiktok('Xbox Series X') }
    ]
  },
  {
    id: 18,
    name: 'Nintendo Switch',
    image: 'assets/switch.jpg',
    lowestPrice: '₱17,999',
    categories: ['Gaming', 'gaming'],
    stores: [
      { name: 'Shopee', price: '₱17,999', shipping: 'Free shipping', url: shopee('Nintendo Switch') },
      { name: 'Lazada', price: '₱18,299', shipping: '₱99 shipping', url: lazada('Nintendo Switch') },
      { name: 'TikTok Shop', price: '₱18,799', shipping: 'Free shipping', url: tiktok('Nintendo Switch') }
    ]
  },

  // --- CAMERAS ---
  {
    id: 19,
    name: 'Canon EOS R50',
    image: 'assets/cam.jpg',
    lowestPrice: '₱39,999',
    categories: ['Cameras', 'cameras'],
    stores: [
      { name: 'Shopee', price: '₱39,999', shipping: 'Free shipping', url: shopee('Canon EOS R50') },
      { name: 'Lazada', price: '₱40,999', shipping: 'Free shipping', url: lazada('Canon EOS R50') },
      { name: 'TikTok Shop', price: '₱41,500', shipping: 'Free shipping', url: tiktok('Canon EOS R50') }
    ]
  },
  {
    id: 20,
    name: 'Sony A6400',
    image: 'assets/sonyjpg.jpg',
    lowestPrice: '₱45,999',
    categories: ['Cameras', 'cameras'],
    stores: [
      { name: 'Shopee', price: '₱45,999', shipping: 'Free shipping', url: shopee('Sony A6400') },
      { name: 'Lazada', price: '₱46,800', shipping: 'Free shipping', url: lazada('Sony A6400') },
      { name: 'TikTok Shop', price: '₱47,500', shipping: 'Free shipping', url: tiktok('Sony A6400') }
    ]
  },
  {
    id: 21,
    name: 'Nikon Z50',
    image: 'assets/nikon.jpg',
    lowestPrice: '₱42,999',
    categories: ['Cameras', 'cameras'],
    stores: [
      { name: 'Shopee', price: '₱42,999', shipping: 'Free shipping', url: shopee('Nikon Z50') },
      { name: 'Lazada', price: '₱43,499', shipping: 'Free shipping', url: lazada('Nikon Z50') },
      { name: 'TikTok Shop', price: '₱44,200', shipping: 'Free shipping', url: tiktok('Nikon Z50') }
    ]
  },

  // --- SMARTWATCHES ---
  {
    id: 22,
    name: 'Apple Watch',
    image: 'assets/apple.jpg',
    lowestPrice: '₱19,999',
    categories: ['Smartwatches', 'smartwatches'],
    stores: [
      { name: 'Shopee', price: '₱19,999', shipping: 'Free shipping', url: shopee('Apple Watch') },
      { name: 'Lazada', price: '₱20,499', shipping: '₱80 shipping', url: lazada('Apple Watch') },
      { name: 'TikTok Shop', price: '₱20,999', shipping: 'Free shipping', url: tiktok('Apple Watch') }
    ]
  },
  {
    id: 23,
    name: 'Galaxy Watch',
    image: 'assets/galaxy.jpg',
    lowestPrice: '₱14,999',
    categories: ['Smartwatches', 'smartwatches'],
    stores: [
      { name: 'Shopee', price: '₱14,999', shipping: 'Free shipping', url: shopee('Samsung Galaxy Watch') },
      { name: 'Lazada', price: '₱15,299', shipping: '₱80 shipping', url: lazada('Samsung Galaxy Watch') },
      { name: 'TikTok Shop', price: '₱15,699', shipping: 'Free shipping', url: tiktok('Samsung Galaxy Watch') }
    ]
  },
  {
    id: 24,
    name: 'Huawei Watch',
    image: 'assets/huawei.jpg',
    lowestPrice: '₱9,999',
    categories: ['Smartwatches', 'smartwatches'],
    stores: [
      { name: 'Shopee', price: '₱9,999', shipping: 'Free shipping', url: shopee('Huawei Watch') },
      { name: 'Lazada', price: '₱10,299', shipping: '₱50 shipping', url: lazada('Huawei Watch') },
      { name: 'TikTok Shop', price: '₱10,599', shipping: 'Free shipping', url: tiktok('Huawei Watch') }
    ]
  }
];


import { Product } from './types';

export const PRODUCTS: Product[] = [
  { 
    id: 'jewel-01', 
    name: 'Diva Glittering Mangalsutras', 
    price: 89, 
    category: 'Jewellery', 
    description: 'Beautifully crafted traditional Mangalsutra with a glittering finish. Perfect for daily wear and special occasions.', 
    images: ['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800']
  },
  { 
    id: 'jewel-02', 
    name: '19TH JULY JEWELS Fashionable Watch Strap', 
    price: 439, 
    category: 'Jewellery', 
    description: 'Premium quality fashionable watch strap with diamond-like studding. Adds a touch of luxury to your wrist.', 
    images: ['https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800']
  },
  { 
    id: 'soap-01', 
    name: 'MAGIC SOAP 300 GM - Reduces Body Tan', 
    price: 261, 
    category: 'Beauty', 
    description: 'Enriched with saffron and sandalwood, this magic soap helps in reducing body tan and giving a natural glow.', 
    images: ['https://images.unsplash.com/photo-1600857062241-98e5dba7f214?q=80&w=800'] 
  },
  { 
    id: 'vitamins-01', 
    name: 'Best Choice Nutrition Vitamins & Supplements', 
    price: 84, 
    category: 'Beauty', 
    description: 'Essential multivitamin supplements for daily energy and immune support. Recommended by health experts.', 
    images: ['https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800'] 
  },
  { 
    id: 'mask-01', 
    name: 'GLOBUS NATURALS Professional Peel-off Mask - Gold', 
    price: 89, 
    category: 'Beauty', 
    description: 'Luxurious gold peel-off mask for instant radiance. Brightens skin and removes impurities.', 
    images: ['https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800'] 
  },
  { 
    id: 'pampers-01', 
    name: 'Pampers L 42pcs Pants - Happy Sleep', 
    price: 339, 
    category: 'Baby Care', 
    description: 'Soft and breathable diapers with extra absorption for a peaceful sleep for your baby.', 
    images: ['https://images.unsplash.com/photo-1617330781033-64a09a56c07a?q=80&w=800'] 
  },
  { 
    id: 'jewel-03', 
    name: 'Ella Attractive Women\'S Mangalsutra Set', 
    price: 139, 
    category: 'Jewellery', 
    description: 'Stunning matte finish premium quality necklace set with matching earrings.', 
    images: ['https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800']
  },
  { 
    id: 'jewel-04', 
    name: 'JYONA Allure Chunky Rings', 
    price: 208, 
    category: 'Jewellery', 
    description: 'Allure chunky gold-plated ring with intricate floral design and ruby-like stone.', 
    images: ['https://images.unsplash.com/photo-1616193552024-5d5138f3883a?q=80&w=800']
  }
];

export const SIZES = ['Free Size', 'S', 'M', 'L', 'XL', 'XXL'];

export const CATEGORY_ICONS = [
  { name: 'Deal Zone', img: 'https://cdn-icons-png.flaticon.com/128/3502/3502601.png', accent: 'bg-purple-100' },
  { name: 'Women\'s Fashion', img: 'https://images.unsplash.com/photo-1581333100576-b73bbe92c2cb?q=80&w=200', accent: 'bg-pink-100' },
  { name: 'Men\'s Fashion', img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=200', accent: 'bg-blue-100' },
  { name: 'Kids & Toys', img: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=200', accent: 'bg-orange-100' },
  { name: 'Footwear Store', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200', accent: 'bg-red-100' },
  { name: 'Accessories', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=200', accent: 'bg-yellow-100' },
  { name: 'Home & Kitchen', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200', accent: 'bg-green-100' },
  { name: 'Beauty & more', img: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=200', accent: 'bg-purple-100' },
  { name: 'Mobiles', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=200', accent: 'bg-indigo-100' },
  { name: 'Electronics', img: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=200', accent: 'bg-cyan-100' },
  { name: 'Appliances', img: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=200', accent: 'bg-teal-100' },
  { name: 'Jewellery Store', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=200', accent: 'bg-rose-100' }
];

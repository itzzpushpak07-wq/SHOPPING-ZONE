
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  images: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}

export type ViewState = 'login' | 'welcome' | 'home' | 'product' | 'checkout' | 'success' | 'categories' | 'mall' | 'video-finds' | 'orders' | 'account';

export interface AppState {
  view: ViewState;
  selectedProductId?: string;
  cart: CartItem[];
}

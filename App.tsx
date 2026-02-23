
import React, { useState, useEffect, useMemo } from 'react';
import { Product, CartItem, ViewState } from './types';
import { PRODUCTS } from './constants';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import SearchOverlay from './components/SearchOverlay';
import InstallOverlay from './components/InstallOverlay';
import BottomNav from './components/BottomNav';
import Login from './components/Login';
import Success from './components/Success';
import Account from './components/Account';
import Welcome from './components/Welcome';
import Mall from './components/Mall';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [view, setView] = useState<ViewState>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isInstallOpen, setIsInstallOpen] = useState(false);

  // Sync scroll position when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, selectedProductId]);

  const selectedProduct = useMemo(() => 
    PRODUCTS.find(p => p.id === selectedProductId), 
    [selectedProductId]
  );

  const addToCart = (product: Product, size?: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.selectedSize === size);
      if (existing) {
        return prev.map(item => 
          (item.id === product.id && item.selectedSize === size)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, selectedSize: size }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string, size?: string) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.selectedSize === size)));
  };

  const updateQuantity = (id: string, size: string | undefined, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id && item.selectedSize === size) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const toggleWishlist = (id: string) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(pId => pId !== id) : [...prev, id]
    );
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const navigateToProduct = (id: string) => {
    setSelectedProductId(id);
    setView('product');
    setIsWishlistOpen(false);
    setIsSearchOpen(false);
  };

  const navigateHome = () => {
    setView('home');
    setSelectedProductId(null);
  };

  const clearCart = () => setCart([]);

  const wishlistProducts = useMemo(() => 
    PRODUCTS.filter(p => wishlist.includes(p.id)),
    [wishlist]
  );

  if (!isAuthenticated) {
    return (
      <Login onLogin={() => {
        setIsAuthenticated(true);
        setView('welcome');
      }} />
    );
  }

  const renderContent = () => {
    switch (view) {
      case 'welcome':
        return <Welcome onComplete={() => setView('home')} />;
      case 'home':
        return (
          <Home 
            onProductClick={navigateToProduct} 
            wishlist={wishlist}
            onWishlistToggle={toggleWishlist}
          />
        );
      case 'product':
        return selectedProduct && (
          <ProductDetail 
            product={selectedProduct} 
            onAddToCart={addToCart}
            onProductClick={navigateToProduct}
            isWishlisted={wishlist.includes(selectedProduct.id)}
            onWishlistToggle={() => toggleWishlist(selectedProduct.id)}
            onBack={navigateHome}
          />
        );
      case 'checkout':
        return (
          <Checkout 
            cart={cart} 
            total={cartTotal} 
            onSuccess={() => {
              clearCart();
              setView('success');
            }} 
            onBack={() => setView('home')}
          />
        );
      case 'success':
        return <Success onContinue={navigateHome} />;
      case 'categories':
        return (
          <div className="px-6 py-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-light uppercase tracking-widest mb-12">Collections</h2>
            <div className="grid gap-4">
              {['New Arrivals', 'Saree', 'Kurtis & Dresses', 'Jewellery', 'Beauty', 'Footwear', 'Home Decor'].map(cat => (
                <button key={cat} className="flex justify-between items-center py-6 border-b border-gray-100 group">
                  <span className="text-lg font-light group-hover:pl-2 transition-all">{cat}</span>
                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" /></svg>
                </button>
              ))}
            </div>
          </div>
        );
      case 'mall':
        return <Mall onProductClick={navigateToProduct} />;
      case 'video-finds':
        return (
          <div className="fixed inset-0 pt-[108px] bg-black">
            <div className="h-full flex flex-col items-center justify-center text-white p-12 text-center">
              <div className="animate-pulse w-full max-w-sm aspect-[9/16] bg-neutral-900 flex flex-col items-center justify-center border border-neutral-800 rounded-3xl relative overflow-hidden">
                <div className="absolute top-4 left-4 flex items-center gap-2">
                   <div className="w-8 h-8 rounded-full bg-indigo-500"></div>
                   <div className="text-left">
                      <p className="text-[10px] font-bold">Pushpak Fashion</p>
                      <p className="text-[8px] text-neutral-400">Live Trending</p>
                   </div>
                </div>
                <svg className="w-12 h-12 text-neutral-700 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                <p className="text-[10px] uppercase tracking-widest text-neutral-500">Discover Latest Trends</p>
              </div>
            </div>
          </div>
        );
      case 'orders':
        return (
          <div className="px-6 py-12 max-w-2xl mx-auto">
             <h2 className="text-2xl font-bold uppercase tracking-widest mb-12 text-center text-indigo-950">Your Orders</h2>
             <div className="border border-gray-100 p-12 text-center opacity-40 rounded-xl bg-gray-50">
               <svg className="w-12 h-12 mx-auto mb-4 text-indigo-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
               <p className="text-[10px] uppercase tracking-widest font-bold">You have no active orders.</p>
             </div>
          </div>
        );
      case 'account':
        return (
          <Account 
            onBack={navigateHome}
            onWishlistClick={() => {
              setView('home');
              setIsWishlistOpen(true);
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-indigo-600 selection:text-white pb-16 lg:pb-0">
      {view !== 'product' && view !== 'account' && view !== 'welcome' && (
        <Navbar 
          cartCount={cartCount} 
          wishlistCount={wishlist.length}
          onCartClick={() => setIsCartOpen(true)} 
          onWishlistClick={() => setIsWishlistOpen(true)}
          onSearchClick={() => setIsSearchOpen(true)}
          onInstallClick={() => setIsInstallOpen(true)}
          onLogoClick={navigateHome}
          onProfileClick={() => setView('account')}
        />
      )}

      <main className={`${(view === 'product' || view === 'account' || view === 'welcome') ? 'pt-0' : 'pt-[108px]'} flex-grow`}>
        {renderContent()}
      </main>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        total={cartTotal}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onCheckout={() => {
          setIsCartOpen(false);
          setView('checkout');
        }}
      />

      <WishlistDrawer 
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        products={wishlistProducts}
        onRemove={toggleWishlist}
        onProductClick={navigateToProduct}
        onAddToCart={(p) => {
          navigateToProduct(p.id);
        }}
      />

      <SearchOverlay 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onProductClick={navigateToProduct}
      />

      <InstallOverlay 
        isOpen={isInstallOpen}
        onClose={() => setIsInstallOpen(false)}
      />

      {view !== 'welcome' && <BottomNav activeView={view} onViewChange={setView} />}

      {view !== 'welcome' && (
        <footer className="mt-20 py-12 border-t border-gray-100 text-center px-6 mb-16 lg:mb-0 bg-gray-50">
          <p className="text-[10px] uppercase tracking-[0.2em] text-indigo-900 font-bold mb-2">
            SHOPPING ZONE 🛍️
          </p>
          <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400">
            © 2024. Owned & Designed by <span className="text-indigo-600 font-bold">Pushpak Bhamre</span>.
          </p>
        </footer>
      )}
    </div>
  );
};

export default App;

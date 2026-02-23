
import React from 'react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onRemove: (id: string) => void;
  onProductClick: (id: string) => void;
  onAddToCart: (product: Product) => void;
}

const WishlistDrawer: React.FC<WishlistDrawerProps> = ({ 
  isOpen, 
  onClose, 
  products, 
  onRemove, 
  onProductClick,
  onAddToCart
}) => {
  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/30 backdrop-blur-[2px] z-[60] transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-[70] shadow-2xl transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="p-8 flex justify-between items-center border-b border-gray-100">
            <h2 className="text-sm uppercase tracking-[0.3em]">Wishlist ({products.length})</h2>
            <button onClick={onClose} className="p-2 hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-8 space-y-8 no-scrollbar">
            {products.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                <svg className="w-12 h-12 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <p className="text-[11px] uppercase tracking-widest">Your wishlist is empty</p>
                <button 
                  onClick={onClose}
                  className="mt-4 text-[10px] underline underline-offset-4 uppercase tracking-widest"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              products.map((item) => (
                <div key={item.id} className="flex gap-6 group">
                  <div 
                    className="w-24 aspect-[4/5] bg-gray-50 flex-shrink-0 cursor-pointer overflow-hidden"
                    onClick={() => onProductClick(item.id)}
                  >
                    <img src={item.images[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.name} />
                  </div>
                  <div className="flex-grow flex flex-col py-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 
                        className="text-[12px] uppercase tracking-wide font-medium cursor-pointer hover:underline"
                        onClick={() => onProductClick(item.id)}
                      >
                        {item.name}
                      </h3>
                      <button onClick={() => onRemove(item.id)} className="text-gray-400 hover:text-black">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12"></path></svg>
                      </button>
                    </div>
                    <p className="text-[11px] text-gray-400 mb-4">${item.price.toFixed(2)}</p>
                    <div className="mt-auto flex gap-4">
                      <button 
                        onClick={() => onAddToCart(item)}
                        className="text-[10px] uppercase tracking-widest border-b border-black pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-colors"
                      >
                        Quick View
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-8 bg-gray-50">
            <button 
              onClick={onClose}
              className="w-full bg-black text-white py-5 text-[11px] uppercase tracking-[0.3em] hover:bg-neutral-800 transition-colors"
            >
              Continue Browsing
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistDrawer;

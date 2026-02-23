
import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  total: number;
  onRemove: (id: string, size?: string) => void;
  onUpdateQuantity: (id: string, size: string | undefined, delta: number) => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  cart, 
  total, 
  onRemove, 
  onUpdateQuantity,
  onCheckout 
}) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/30 backdrop-blur-[2px] z-[60] transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-[70] shadow-2xl transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="p-8 flex justify-between items-center border-b border-gray-100">
            <h2 className="text-sm uppercase tracking-[0.3em]">Shopping Bag ({cart.length})</h2>
            <button onClick={onClose} className="p-2 hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-8 space-y-8 no-scrollbar">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                <p className="text-[11px] uppercase tracking-widest">Your bag is empty</p>
                <button 
                  onClick={onClose}
                  className="mt-4 text-[10px] underline underline-offset-4 uppercase tracking-widest"
                >
                  Continue Browsing
                </button>
              </div>
            ) : (
              cart.map((item, idx) => (
                <div key={`${item.id}-${item.selectedSize}`} className="flex gap-6">
                  <div className="w-24 aspect-[4/5] bg-gray-50 flex-shrink-0">
                    <img src={item.images[0]} className="w-full h-full object-cover" alt={item.name} />
                  </div>
                  <div className="flex-grow flex flex-col py-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-[12px] uppercase tracking-wide font-medium">{item.name}</h3>
                      <button onClick={() => onRemove(item.id, item.selectedSize)} className="text-gray-400 hover:text-black">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                      </button>
                    </div>
                    <p className="text-[11px] text-gray-400 mb-4">Size: {item.selectedSize}</p>
                    <div className="mt-auto flex justify-between items-end">
                      <div className="flex items-center border border-gray-200">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.selectedSize, -1)}
                          className="px-3 py-1 hover:bg-gray-50 border-r border-gray-200"
                        >-</button>
                        <span className="px-4 text-xs">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.selectedSize, 1)}
                          className="px-3 py-1 hover:bg-gray-50 border-l border-gray-200"
                        >+</button>
                      </div>
                      <span className="text-xs font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-8 bg-gray-50 space-y-6">
              <div className="flex justify-between items-center text-sm uppercase tracking-widest">
                <span className="font-light">Total</span>
                <span className="font-medium">${total.toFixed(2)}</span>
              </div>
              <button 
                onClick={onCheckout}
                className="w-full bg-black text-white py-5 text-[11px] uppercase tracking-[0.3em] hover:bg-neutral-800 transition-colors"
              >
                Checkout
              </button>
              <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest leading-loose">
                Shipping & taxes calculated at checkout.<br/>Free shipping on orders over $500.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;

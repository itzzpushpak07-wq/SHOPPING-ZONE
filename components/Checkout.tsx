
import React, { useState } from 'react';
import { CartItem } from '../types';

interface CheckoutProps {
  cart: CartItem[];
  total: number;
  onSuccess: () => void;
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ cart, total, onSuccess, onBack }) => {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsProcessing(true);
      // Simulate API call
      setTimeout(() => {
        setIsProcessing(false);
        onSuccess();
      }, 2000);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Main Section */}
        <div className="lg:col-span-7">
          <div className="flex gap-4 mb-12">
            {[1, 2, 3].map(s => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] border ${step >= s ? 'bg-black text-white border-black' : 'border-gray-200 text-gray-300'}`}>
                  {s}
                </div>
                <span className={`text-[11px] uppercase tracking-widest ${step === s ? 'text-black' : 'text-gray-300'}`}>
                  {s === 1 ? 'Shipping' : s === 2 ? 'Payment' : 'Review'}
                </span>
                {s < 3 && <div className="w-8 h-[1px] bg-gray-200 mx-2" />}
              </div>
            ))}
          </div>

          <form onSubmit={handleNext} className="space-y-12">
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-light uppercase tracking-widest border-b pb-4">Shipping Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input required placeholder="FIRST NAME" className="border-b border-gray-200 py-3 outline-none focus:border-black text-[11px] uppercase tracking-widest placeholder:text-gray-300" />
                  <input required placeholder="LAST NAME" className="border-b border-gray-200 py-3 outline-none focus:border-black text-[11px] uppercase tracking-widest placeholder:text-gray-300" />
                </div>
                <input required placeholder="ADDRESS" className="w-full border-b border-gray-200 py-3 outline-none focus:border-black text-[11px] uppercase tracking-widest placeholder:text-gray-300" />
                <div className="grid grid-cols-3 gap-4">
                  <input required placeholder="CITY" className="border-b border-gray-200 py-3 outline-none focus:border-black text-[11px] uppercase tracking-widest placeholder:text-gray-300" />
                  <input required placeholder="STATE" className="border-b border-gray-200 py-3 outline-none focus:border-black text-[11px] uppercase tracking-widest placeholder:text-gray-300" />
                  <input required placeholder="ZIP" className="border-b border-gray-200 py-3 outline-none focus:border-black text-[11px] uppercase tracking-widest placeholder:text-gray-300" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-light uppercase tracking-widest border-b pb-4">Payment Method</h3>
                <input required placeholder="CARD NUMBER" className="w-full border-b border-gray-200 py-3 outline-none focus:border-black text-[11px] uppercase tracking-widest placeholder:text-gray-300" />
                <div className="grid grid-cols-2 gap-4">
                  <input required placeholder="EXPIRY (MM/YY)" className="border-b border-gray-200 py-3 outline-none focus:border-black text-[11px] uppercase tracking-widest placeholder:text-gray-300" />
                  <input required placeholder="CVV" className="border-b border-gray-200 py-3 outline-none focus:border-black text-[11px] uppercase tracking-widest placeholder:text-gray-300" />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-light uppercase tracking-widest border-b pb-4">Order Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-[11px] uppercase tracking-widest">
                    <span className="text-gray-400">Items</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[11px] uppercase tracking-widest">
                    <span className="text-gray-400">Shipping</span>
                    <span>FREE</span>
                  </div>
                  <div className="flex justify-between text-[13px] uppercase tracking-[0.2em] font-medium pt-4 border-t border-gray-100">
                    <span>Total Amount</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-4 pt-8">
              {step > 1 && (
                <button 
                  type="button" 
                  onClick={() => setStep(step - 1)}
                  className="flex-1 border border-black py-4 text-[11px] uppercase tracking-widest hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
              )}
              <button 
                type="submit"
                disabled={isProcessing}
                className="flex-[2] bg-black text-white py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-neutral-800 transition-colors disabled:bg-gray-400"
              >
                {isProcessing ? 'Processing...' : step === 3 ? 'Complete Order' : 'Continue'}
              </button>
            </div>
          </form>
        </div>

        {/* Summary Column */}
        <div className="lg:col-span-5 border-l border-gray-100 pl-16 hidden lg:block">
          <h4 className="text-[11px] uppercase tracking-[0.3em] mb-8">Items in Bag</h4>
          <div className="space-y-6">
            {cart.map(item => (
              <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4">
                <div className="w-16 aspect-[4/5] bg-gray-50 flex-shrink-0">
                  <img src={item.images[0]} className="w-full h-full object-cover" alt={item.name} />
                </div>
                <div className="flex-grow">
                  <p className="text-[11px] uppercase tracking-wide font-medium">{item.name}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">Size: {item.selectedSize}</p>
                  <p className="text-[10px] mt-1">${item.price.toFixed(2)} x {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

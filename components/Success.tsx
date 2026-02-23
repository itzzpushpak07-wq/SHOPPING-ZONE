
import React from 'react';

interface SuccessProps {
  onContinue: () => void;
}

const Success: React.FC<SuccessProps> = ({ onContinue }) => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center mb-10 animate-bounce">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 13l4 4L19 7"></path></svg>
      </div>
      <h2 className="text-3xl font-light tracking-tight mb-4 uppercase tracking-[0.2em]">Thank You</h2>
      <p className="text-gray-400 text-[11px] uppercase tracking-[0.3em] mb-12 max-w-md leading-relaxed">
        Your order has been placed successfully. You will receive a confirmation email shortly with your tracking details.
      </p>
      <button 
        onClick={onContinue}
        className="px-12 py-5 bg-black text-white text-[11px] uppercase tracking-[0.3em] hover:bg-neutral-800 transition-colors"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default Success;

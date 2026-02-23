
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  isWishlisted?: boolean;
  onWishlistToggle?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onClick, 
  isWishlisted, 
  onWishlistToggle 
}) => {
  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onWishlistToggle?.();
  };

  // Logic to simulate dynamic data from screenshots
  const isMall = product.id.startsWith('soap') || product.id.startsWith('vitamins') || product.id.startsWith('mask') || product.id.startsWith('pampers');
  const discount = isMall ? Math.floor(Math.random() * 40 + 30) : Math.floor(Math.random() * 20 + 5);
  const mrp = Math.floor(product.price * (1 + discount / 100));
  const rating = (4.0 + Math.random() * 0.4).toFixed(1);
  const reviewsCount = isMall ? "1.5 lakh" : Math.floor(Math.random() * 900 + 50);
  const codPrice = product.price + (isMall ? 28 : 17);

  return (
    <div 
      className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col cursor-pointer active:scale-[0.98] transition-all"
      onClick={onClick}
    >
      <div className="aspect-square relative bg-gray-50 overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        
        {/* Wishlist Toggle */}
        <button 
          onClick={handleWishlistClick}
          className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-md rounded-full text-gray-400 shadow-sm border border-gray-100"
        >
          <svg className={`w-5 h-5 transition-transform ${isWishlisted ? 'scale-110 text-red-500 fill-current' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Mall & Timer Badges */}
        <div className="absolute bottom-2 left-2 flex flex-col gap-1">
          {isMall && (
            <div className="bg-[#512da8] text-white text-[8px] px-1.5 py-0.5 rounded flex items-center gap-1 font-bold w-fit shadow-sm">
              <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Mall
            </div>
          )}
          {isMall && (
            <div className="bg-white/90 backdrop-blur-sm text-black text-[8px] px-1.5 py-0.5 rounded border border-gray-100 flex items-center gap-1 font-bold w-fit shadow-sm">
              🕒 13h : 23m : 21s
            </div>
          )}
        </div>
      </div>
      
      <div className="p-3 flex flex-col flex-grow">
        {isMall && <div className="text-[9px] text-gray-400 font-bold mb-1 border border-gray-100 w-fit px-1.5 rounded">Ad</div>}
        <h3 className="text-[12px] font-normal text-gray-700 line-clamp-1 mb-1">{product.name}</h3>
        
        <div className="flex items-center gap-1.5 mb-1">
          <span className="text-base font-bold text-gray-900">₹{product.price}</span>
          <span className="text-[10px] text-gray-400 line-through">₹{mrp}</span>
          <span className="text-[10px] font-bold text-green-600">{discount}% off</span>
          <span className="ml-auto bg-[#e8f5e9] text-[#1b5e20] text-[8px] font-black px-1.5 py-0.5 rounded tracking-tighter">UPI</span>
        </div>

        <p className="text-[10px] text-gray-600 mb-1 font-bold">₹{codPrice} with COD</p>
        <p className="text-[10px] text-green-600 font-bold mb-2">Free Delivery</p>
        
        <div className="mt-auto flex items-center gap-2">
          <div className="flex items-center gap-1 bg-green-700 text-white px-2 py-0.5 rounded text-[10px] font-bold">
            {rating} <span className="text-[8px]">★</span>
          </div>
          <span className="text-[10px] text-gray-400">({reviewsCount})</span>
          
          {!isMall && (
             <div className="ml-auto flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-purple-700 flex items-center justify-center text-[7px] text-white font-black">m</div>
                <span className="text-[9px] font-bold text-purple-700">Trusted</span>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

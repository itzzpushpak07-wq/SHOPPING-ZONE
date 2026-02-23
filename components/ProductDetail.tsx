
import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product, size: string) => void;
  onProductClick: (id: string) => void;
  isWishlisted?: boolean;
  onWishlistToggle?: () => void;
  onBack?: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ 
  product, 
  onAddToCart, 
  onProductClick,
  isWishlisted,
  onWishlistToggle,
  onBack
}) => {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('Free Size');

  const discount = 87;
  const mrp = Math.floor(product.price * 7.6);
  
  const similarProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <div className="bg-white px-4 h-14 flex items-center justify-between sticky top-0 z-[100] border-b border-gray-100">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="text-gray-700">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7 7-7" /></svg>
          </button>
          <div className="relative">
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input 
              type="text" 
              placeholder="" 
              className="h-10 bg-gray-50 rounded-md border border-gray-200 pl-10 pr-4 focus:ring-0 w-48 text-sm"
              readOnly
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
           <button onClick={onWishlistToggle} className="text-gray-700">
             <svg className={`w-6 h-6 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
           </button>
           <button className="text-gray-700">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
           </button>
        </div>
      </div>

      {/* Trust Badges Scroll */}
      <div className="flex gap-2 p-3 bg-gray-50/50 overflow-x-auto no-scrollbar border-b border-gray-100">
         <div className="flex items-center gap-1.5 bg-yellow-50 border border-yellow-400 px-3 py-1.5 rounded-md flex-shrink-0">
            <div className="w-4 h-4 text-yellow-600"><svg fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg></div>
            <span className="text-[10px] font-bold text-indigo-900 uppercase">Top Rated Products</span>
         </div>
         <div className="flex items-center gap-1.5 bg-yellow-50 border border-yellow-400 px-3 py-1.5 rounded-md flex-shrink-0">
            <div className="w-4 h-4 text-indigo-800"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <span className="text-[10px] font-bold text-indigo-900 uppercase">7 Days Easy Returns</span>
         </div>
         <div className="flex items-center gap-1.5 bg-yellow-50 border border-yellow-400 px-3 py-1.5 rounded-md flex-shrink-0">
            <div className="w-4 h-4 text-indigo-800"><svg fill="currentColor" viewBox="0 0 20 20"><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10V8a1 1 0 011-1h5.132a1 1 0 01.954.7l1.047 3.488.016.052A1 1 0 0118.154 13h-1.104a2.5 2.5 0 01-4.9 0H10V15h2.05a2.5 2.5 0 014.9 0H21a1 1 0 001-1V9.5a1 1 0 00-1-1h-2.132l-1.047-3.488A3 3 0 0014.132 3H3z"/></svg></div>
            <span className="text-[10px] font-bold text-indigo-900 uppercase">Cash on Delivery</span>
         </div>
      </div>

      {/* Main Image Content */}
      <div className="relative aspect-square">
        <img src={product.images[activeImage]} alt={product.name} className="w-full h-full object-contain p-4" />
        
        {/* Floating Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-3">
           <button onClick={onWishlistToggle} className="w-11 h-11 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center">
              <svg className={`w-6 h-6 ${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
           </button>
           <button className="w-11 h-11 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
           </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
           {[...Array(4)].map((_, i) => (
             <div key={i} className={`w-2 h-2 rounded-full ${i === activeImage ? 'bg-gray-700' : 'bg-gray-300'}`} />
           ))}
        </div>
      </div>

      {/* Product Details Stack */}
      <div className="p-4 space-y-3">
        <h1 className="text-xl font-medium text-gray-800 leading-tight">{product.name}</h1>
        
        <div className="flex items-center gap-3">
           <span className="text-[#008a00] text-2xl font-bold">{discount}% off</span>
           <span className="text-xl text-gray-400 line-through">₹{mrp}</span>
           <span className="text-2xl font-bold text-gray-900">₹{product.price} per item</span>
        </div>

        <div className="flex items-center gap-2">
           <div className="bg-[#e7f5ed] px-2 py-1 rounded flex items-center gap-1">
              <svg className="w-4 h-4 text-[#008a00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span className="text-xs font-bold text-[#008a00]">Min 2 items</span>
           </div>
        </div>

        <div className="flex items-center gap-2 pt-1 pb-2">
           <div className="flex text-green-600">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-4 h-4 ${i < 4 ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
           </div>
           <span className="text-sm font-medium text-gray-500">29 ratings & 1 reviews</span>
        </div>
      </div>

      <div className="h-2 bg-gray-50 border-y border-gray-100" />

      {/* Offers Section */}
      <div className="p-4 flex items-center justify-between border-b border-gray-100">
         <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
            <span className="text-sm font-bold text-gray-800">Available offers</span>
         </div>
         <button className="text-indigo-700 text-sm font-bold">View more</button>
      </div>

      <div className="p-4">
        <button className="w-full border border-indigo-200 bg-indigo-50/30 rounded-lg py-3 flex items-center justify-center gap-2 text-indigo-700 font-bold">
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
           View Similar
        </button>
      </div>

      <div className="h-2 bg-gray-50 border-y border-gray-100" />

      {/* Size Selection */}
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center">
           <h3 className="text-[17px] font-bold text-gray-800">Size:</h3>
           <button className="text-indigo-700 text-sm font-bold">Find your size</button>
        </div>
        <div className="flex gap-4">
           {['Free Size'].map(size => (
             <button 
               key={size}
               onClick={() => setSelectedSize(size)}
               className={`px-6 py-2.5 rounded-md border-2 text-sm font-bold transition-all ${selectedSize === size ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-gray-200 text-gray-700'}`}
             >
               {size}
             </button>
           ))}
        </div>
      </div>

      <div className="h-2 bg-gray-50 border-y border-gray-100" />

      {/* Delivery Check */}
      <div className="p-4 space-y-6">
        <div className="flex justify-between items-center">
           <h3 className="text-[15px] font-bold text-gray-800">Find a seller that delivers to you</h3>
           <button className="text-indigo-700 text-sm font-bold uppercase tracking-tight">Enter pincode</button>
        </div>

        <div className="space-y-4">
           <div className="flex items-center justify-between group">
              <div className="flex items-center gap-4 text-gray-700">
                 <svg className="w-6 h-6 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                 <div className="text-sm leading-snug">
                    <p className="font-medium">Delivery by 18 Feb, Wednesday</p>
                    <p className="text-gray-400">If ordered within <span className="text-black font-bold">06m 59s</span></p>
                 </div>
              </div>
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
           </div>

           <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-gray-700">
                 <svg className="w-6 h-6 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                 <p className="text-sm font-medium">10 Days Return Policy</p>
              </div>
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
           </div>

           <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-gray-700">
                 <svg className="w-6 h-6 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                 <p className="text-sm font-medium">Cash on Delivery Available</p>
              </div>
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
           </div>

           <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-gray-700">
                 <svg className="w-6 h-6 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                 <p className="text-sm font-medium">Cancellation upto 48hrs</p>
              </div>
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
           </div>
        </div>

        {/* Ad Banner */}
        <div className="bg-white border border-gray-100 rounded-lg p-3 flex gap-4 items-center shadow-sm">
           <img src="https://m.media-amazon.com/images/G/31/prime/Logo/Prime_131x35.png" className="h-6 w-12 object-contain grayscale" alt="Ad" />
           <div className="flex-grow">
              <p className="text-[11px] leading-tight text-gray-500">Get ₹3,500 Vouchers* with shopping Credit Card</p>
              <button className="text-[10px] text-indigo-600 font-bold uppercase mt-1">Apply Now &gt;</button>
           </div>
           <span className="text-[8px] text-gray-300 self-end">*T&C Apply</span>
        </div>
      </div>

      <div className="h-2 bg-gray-50 border-y border-gray-100" />

      {/* Ratings Section */}
      <div className="p-4 space-y-6">
        <div className="flex justify-between items-center">
           <h3 className="text-[17px] font-bold text-gray-800">Ratings & Reviews</h3>
           <button className="border border-indigo-200 text-indigo-700 px-4 py-2 rounded-md text-xs font-bold">Rate Product</button>
        </div>

        <div className="grid grid-cols-2 gap-8 items-center">
           <div className="text-center space-y-1">
              <p className="text-sm font-medium text-gray-500">Very Good</p>
              <div className="flex justify-center text-green-600 text-2xl font-bold gap-1 items-center">
                 4.2 <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              </div>
              <p className="text-[11px] text-gray-400">29 ratings and 1 reviews</p>
           </div>
           <div className="space-y-1">
              {[5, 4, 3, 2, 1].map((star, i) => (
                <div key={star} className="flex items-center gap-2">
                   <span className="text-[10px] w-3">{star}★</span>
                   <div className="flex-grow h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-600" 
                        style={{ width: `${[70, 40, 20, 30, 10][i]}%` }} 
                      />
                   </div>
                   <span className="text-[10px] text-gray-400 w-4">{[20, 3, 1, 3, 2][i]}</span>
                </div>
              ))}
           </div>
        </div>

        <div className="pt-4 border-t border-gray-100 space-y-4">
           <div className="space-y-2">
              <div className="flex items-center gap-2">
                 <div className="flex text-green-600">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    ))}
                 </div>
                 <span className="text-sm font-bold">Fabulous!</span>
              </div>
              <p className="text-sm text-gray-600">Very nice product and looks like a gold</p>
              <div className="flex justify-between items-center pt-1 text-[11px] text-gray-400">
                 <span>Ar..., Chennai</span>
                 <div className="flex gap-4">
                    <button className="flex items-center gap-1 hover:text-green-600 transition-colors">
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.705l1.38-9a2 2 0 00-2-2.295H14z" strokeWidth="1.5"/></svg>
                       3
                    </button>
                    <button className="flex items-center gap-1 hover:text-red-600 transition-colors">
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.705l-1.38 9a2 2 0 002 2.295H10z" strokeWidth="1.5"/></svg>
                       0
                    </button>
                 </div>
              </div>
           </div>
        </div>

        <div className="pt-6 space-y-4">
           <h4 className="text-sm font-bold">Have doubts regarding this product?</h4>
           <button className="w-full border border-gray-200 py-3 rounded-lg text-sm font-bold uppercase tracking-widest text-gray-800">
              Post your question
           </button>
        </div>
      </div>

      <div className="h-2 bg-gray-50 border-y border-gray-100" />

      {/* Sold By */}
      <div className="p-4 space-y-4">
        <h3 className="text-[17px] font-bold text-gray-800">Sold By</h3>
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center">
                 <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.09-.36.14-.57.14s-.41-.05-.57-.14l-7.9-4.44c-.31-.17-.53-.5-.53-.88V7.5c0-.38.21-.71.53-.88l7.9-4.44c.16-.09.36-.14.57-.14s.41.05.57.14l7.9 4.44c.31.17.53.5.53.88v9z" /></svg>
              </div>
              <div>
                 <p className="text-sm font-bold text-gray-800">Shopo1802</p>
                 <div className="flex items-center gap-2 mt-0.5">
                    <div className="bg-indigo-600 text-white px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-0.5">
                       3.3 <span className="text-[8px]">★</span>
                    </div>
                 </div>
              </div>
           </div>
           <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </div>
        <button className="text-indigo-700 text-sm font-bold">See other sellers &gt;</button>
      </div>

      {/* Similar Products Carousel */}
      <div className="p-4 pt-8">
        <div className="flex justify-between items-center mb-6">
           <h3 className="text-[17px] font-bold text-gray-800 flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-orange-100 flex items-center justify-center">
                 <img src={product.images[0]} className="w-6 h-6 object-contain" />
              </div>
              Similar Products
           </h3>
           <button className="border border-gray-200 text-indigo-700 px-4 py-2 rounded-md text-xs font-bold">View all</button>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
           {similarProducts.map(p => (
             <div 
               key={p.id} 
               onClick={() => onProductClick(p.id)}
               className="min-w-[150px] border border-gray-100 rounded-xl overflow-hidden shadow-sm"
             >
                <div className="aspect-[3/4] relative">
                   <img src={p.images[0]} className="w-full h-full object-cover" />
                   <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] font-bold flex items-center gap-0.5 border border-gray-100">
                      3.8 <span className="text-green-600">★</span>
                   </div>
                </div>
                <div className="p-3 space-y-1">
                   <p className="text-[11px] text-gray-500 line-clamp-1">{p.name}</p>
                   <div className="flex items-baseline gap-2">
                      <span className="text-sm font-bold">₹{p.price}</span>
                      <span className="text-[10px] text-gray-400 line-through">₹{Math.floor(p.price*2.5)}</span>
                   </div>
                   <p className="text-[10px] text-[#008a00] font-bold">90% off</p>
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-3 grid grid-cols-2 gap-3 z-[150] shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
         <button 
           onClick={() => onAddToCart(product, selectedSize)}
           className="w-full py-3.5 border border-indigo-600 rounded-lg text-indigo-700 text-sm font-bold uppercase tracking-widest active:scale-95 transition-all"
         >
           Add to cart
         </button>
         <button className="w-full py-3.5 bg-indigo-700 hover:bg-indigo-800 rounded-lg text-white text-sm font-bold uppercase tracking-widest active:scale-95 transition-all">
           Buy Now
         </button>
      </div>
    </div>
  );
};

export default ProductDetail;


import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORY_ICONS } from '../constants';
import ProductCard from './ProductCard';

interface HomeProps {
  onProductClick: (id: string) => void;
  wishlist: string[];
  onWishlistToggle: (id: string) => void;
}

const Home: React.FC<HomeProps> = ({ onProductClick, wishlist, onWishlistToggle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const processedProducts = useMemo(() => {
    return selectedCategory === 'ALL' 
      ? [...PRODUCTS] 
      : PRODUCTS.filter(p => p.category.includes(selectedCategory) || selectedCategory === 'ALL');
  }, [selectedCategory]);

  const handleCategorySelect = (catName: string) => {
    if (catName === 'Deal Zone') {
      setSelectedCategory('ALL');
    } else {
      setSelectedCategory(catName);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      {/* Dynamic Category Header */}
      {selectedCategory !== 'ALL' && (
        <div className="bg-white px-4 h-14 flex items-center border-b border-gray-100 sticky top-[108px] z-50">
          <button 
            onClick={() => setSelectedCategory('ALL')}
            className="p-2 mr-4 text-gray-600 hover:text-black"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-800">{selectedCategory}</h2>
          <div className="ml-auto flex items-center gap-6">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </div>
        </div>
      )}

      {/* Location Bar */}
      {selectedCategory === 'ALL' && (
        <div className="bg-[#EBF3FF] px-4 py-2.5 flex items-center gap-2 text-indigo-700">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-[12px] font-bold flex-grow">Delivering to Nashik - 422010</span>
          <svg className="w-4 h-4 text-indigo-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      )}

      {/* Modern Grid-style Category Section */}
      {selectedCategory === 'ALL' && (
        <section className="bg-white py-6 px-3 border-b border-gray-100 overflow-hidden">
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-y-6 gap-x-2">
            {CATEGORY_ICONS.map((cat, idx) => (
              <button 
                key={idx}
                onClick={() => handleCategorySelect(cat.name)}
                className="flex flex-col items-center gap-2 group"
              >
                <div className={`relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center p-0.5 transition-transform active:scale-95`}>
                  {/* Decorative wavy/pixelated border container from screenshot */}
                  <div className="absolute inset-0 rounded-[22px] border-[3px] border-purple-200 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className={`w-full h-full rounded-[20px] overflow-hidden ${cat.accent || 'bg-purple-50'} border-2 border-white shadow-inner flex items-center justify-center`}>
                    <img 
                      src={cat.img} 
                      alt={cat.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                </div>
                <span className="text-[10px] sm:text-[11px] text-center font-bold text-gray-700 leading-tight tracking-tight px-1">
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Filters Bar */}
      <div className={`sticky ${selectedCategory === 'ALL' ? 'top-[108px]' : 'top-[108px]'} z-40 bg-white border-b border-gray-100 flex h-14 shadow-sm`}>
        {['Sort', 'Category', 'Gender', 'Filters'].map((f, i) => (
          <button key={i} className="flex-1 flex items-center justify-center gap-1.5 text-gray-700 border-r border-gray-50 last:border-0 hover:bg-gray-50 active:bg-gray-100 transition-colors">
            {f === 'Sort' && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>}
            <span className="text-[13px] font-bold">{f}</span>
            {(f === 'Category' || f === 'Gender') && <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>}
            {f === 'Filters' && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" strokeWidth="2"/></svg>}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="p-2 pt-3">
        <div className="grid grid-cols-2 gap-2">
          {processedProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={() => onProductClick(product.id)}
              isWishlisted={wishlist.includes(product.id)}
              onWishlistToggle={() => onWishlistToggle(product.id)}
            />
          ))}
        </div>
      </div>
      
      {processedProducts.length === 0 && (
        <div className="py-24 text-center">
          <p className="text-[11px] uppercase tracking-widest text-gray-400">No products found.</p>
        </div>
      )}

      {/* Promotions Section */}
      {selectedCategory === 'ALL' && (
        <section className="mx-2 my-4">
           <div className="bg-indigo-900 p-6 rounded-2xl text-white shadow-lg overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-800 rounded-full -mr-16 -mt-16 opacity-50" />
              <div className="relative z-10 flex justify-between items-center">
                <div>
                   <h3 className="text-xl font-black mb-1">FREE DELIVERY</h3>
                   <p className="text-xs text-indigo-200 font-bold uppercase tracking-widest">On your first order</p>
                </div>
                <button className="bg-white text-indigo-900 px-5 py-2.5 rounded-xl text-sm font-black shadow-md hover:bg-gray-100 transition-colors">CLAIM NOW</button>
              </div>
           </div>
        </section>
      )}
    </div>
  );
};

export default Home;

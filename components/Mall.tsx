
import React from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface MallProps {
  onProductClick: (id: string) => void;
}

const Mall: React.FC<MallProps> = ({ onProductClick }) => {
  const topCategories = [
    { name: 'Fragrance', img: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=200' },
    { name: 'Personal Care', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=200' },
    { name: 'Baby Care', img: 'https://images.unsplash.com/photo-1522338194708-5465a493ef63?q=80&w=200' },
    { name: 'Footwear', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200' },
    { name: 'Budget', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=200' }
  ];

  const brands = [
    { name: 'Rupa', logo: 'https://rupa.co.in/wp-content/uploads/2021/08/logo.png' },
    { name: 'Vaseline', logo: 'https://m.media-amazon.com/images/S/stores-with-messaging/9e99a80e-3620-4a81-807d-075f82245b9a/6a804791-766b-4e63-89b1-7a6064f21422._CR100,0,1400,1400_PT0_SX150_.png' },
    { name: 'Dove', logo: 'https://logowik.com/content/uploads/images/307_dove.jpg' },
    { name: 'Maybelline', logo: 'https://logovtor.com/wp-content/uploads/2020/12/maybelline-new-york-logo-vector.png' },
    { name: 'Lakme', logo: 'https://logonoid.com/images/lakme-logo.png' }
  ];

  const budgetBuys = PRODUCTS.filter(p => p.price < 300).slice(0, 4);
  const mallProducts = [...PRODUCTS].sort(() => 0.5 - Math.random());

  return (
    <div className="bg-[#F9F9F9] min-h-screen">
      {/* Header with Title & Icons */}
      <div className="bg-white px-4 h-14 flex items-center justify-between border-b border-gray-100">
        <h1 className="text-sm font-bold tracking-widest text-gray-800">SHOPPING ZONE MALL</h1>
        <div className="flex items-center gap-6">
          <button className="text-gray-600"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button>
          <button className="text-gray-600"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></button>
          <button className="text-gray-600"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg></button>
        </div>
      </div>

      {/* Location Bar */}
      <div className="bg-white px-4 py-2.5 flex items-center gap-2 border-b border-gray-100 mb-4">
        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
        <span className="text-sm font-medium text-gray-700">Delivering to Nashik - 422010</span>
        <svg className="w-4 h-4 text-gray-400 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
      </div>

      {/* Top Categories */}
      <section className="bg-white p-4 mb-4">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Top Categories</h2>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {topCategories.map((cat, i) => (
            <div key={i} className="flex flex-col items-center gap-2 min-w-[80px]">
              <div className="w-20 h-24 rounded-lg bg-gray-50 overflow-hidden relative border border-gray-100 shadow-sm">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-blue-700/90 text-white text-[10px] py-1 text-center font-bold">{cat.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Budget Buys */}
      <section className="bg-white p-4 mb-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-gray-800">Budget Buys</h2>
          <button className="flex items-center gap-1 text-pink-600 text-sm font-bold">
            View All <div className="w-5 h-5 bg-pink-600 text-white rounded-full flex items-center justify-center"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg></div>
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
          {budgetBuys.map((p, i) => (
            <div key={p.id} onClick={() => onProductClick(p.id)} className="min-w-[180px] border border-gray-100 rounded-xl overflow-hidden shadow-sm bg-white">
              <div className="aspect-[4/5] relative">
                <img src={p.images[0]} className="w-full h-full object-cover" />
                <div className="absolute bottom-2 left-2 flex flex-col gap-1">
                  <div className="bg-indigo-700 text-white text-[9px] px-1.5 py-0.5 rounded flex items-center gap-1 font-bold">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Mall
                  </div>
                  <div className="bg-amber-50/90 backdrop-blur-sm text-black text-[9px] px-1.5 py-0.5 rounded border border-amber-200 flex items-center gap-1 font-bold">
                    🕒 13h:23m:31s
                  </div>
                </div>
              </div>
              <div className="p-3 space-y-1">
                <p className="text-[12px] text-gray-600 font-medium line-clamp-1">{p.name}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-bold">₹{p.price}</span>
                  <span className="text-[10px] text-gray-400 line-through">₹{p.price*2}</span>
                  <span className="text-[10px] text-green-600 font-bold">50% off</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-green-700 text-white text-[10px] px-1.5 py-0.5 rounded flex items-center gap-1 font-bold">
                    4.2 <span className="text-[8px]">★</span>
                  </div>
                  <span className="text-[10px] text-gray-400">(156958)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Brands */}
      <section className="bg-white p-4 mb-4">
        <h2 className="text-lg font-bold text-gray-800 mb-6">Top Brands</h2>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
          {brands.map((brand, i) => (
            <div key={i} className="min-w-[80px] flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border border-gray-100 shadow-sm flex items-center justify-center p-3 bg-gradient-to-br from-white to-gray-50">
                <img src={brand.logo} className="w-full object-contain" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Promo Banner */}
      <div className="px-4 mb-8">
        <div className="rounded-2xl overflow-hidden relative shadow-lg h-44">
           <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent flex flex-col justify-center px-8 text-white">
              <div className="bg-white/90 text-blue-900 text-[10px] font-black px-2 py-0.5 rounded w-fit mb-2">MALL</div>
              <h3 className="text-2xl font-black tracking-tight leading-none mb-1">BEST DEALS</h3>
              <p className="text-xs font-bold text-white/90 tracking-widest uppercase">Premium Fashion Finds</p>
           </div>
        </div>
      </div>

      {/* Filters & Sorting */}
      <div className="bg-white sticky top-0 z-40 flex border-b border-gray-100 h-14 shadow-sm mb-4">
        {['Sort', 'Category', 'Gender', 'Filters'].map((f, i) => (
          <button key={i} className="flex-1 flex items-center justify-center gap-2 text-sm font-bold text-gray-700 border-r border-gray-50 last:border-0">
            {f === 'Sort' && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" strokeWidth="2"/></svg>}
            {f}
            {(f === 'Category' || f === 'Gender') && <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>}
            {f === 'Filters' && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" strokeWidth="2"/></svg>}
          </button>
        ))}
      </div>

      {/* Main Grid */}
      <div className="p-2">
        <div className="grid grid-cols-2 gap-2">
          {mallProducts.map(p => (
            <div key={p.id} onClick={() => onProductClick(p.id)} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group active:scale-[0.98] transition-transform">
              <div className="aspect-square relative bg-gray-50">
                <img src={p.images[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center border border-gray-100"><svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></button>
                <div className="absolute bottom-2 left-2 flex flex-col gap-1">
                   <div className="bg-indigo-700 text-white text-[8px] px-1.5 py-0.5 rounded flex items-center gap-1 font-bold w-fit">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Mall
                  </div>
                  <div className="bg-amber-50/90 backdrop-blur-sm text-black text-[8px] px-1.5 py-0.5 rounded border border-amber-200 flex items-center gap-1 font-bold w-fit">
                    🕒 13h:23m:31s
                  </div>
                </div>
              </div>
              <div className="p-3 space-y-1 bg-white">
                <div className="bg-gray-50 text-[9px] px-1.5 py-0.5 rounded w-fit text-gray-400 font-bold mb-1 uppercase tracking-tighter">Ad</div>
                <p className="text-[12px] text-gray-600 font-medium line-clamp-1">{p.name}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-bold">₹{p.price}</span>
                  <span className="text-[10px] text-gray-400 line-through">₹{p.price*3}</span>
                  <span className="text-[10px] text-green-600 font-bold">70% off</span>
                  <span className="ml-auto text-[9px] font-bold text-gray-300">UPI</span>
                </div>
                <p className="text-[10px] text-gray-800 font-bold">₹{p.price + 23} with COD</p>
                <p className="text-[10px] text-green-600 font-bold">Free Delivery</p>
                <div className="flex items-center gap-2 pt-1">
                  <div className="bg-green-700 text-white text-[10px] px-1.5 py-0.5 rounded flex items-center gap-1 font-bold">
                    4.2 <span className="text-[8px]">★</span>
                  </div>
                  <span className="text-[10px] text-gray-400">(1.5 lakh)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mall;

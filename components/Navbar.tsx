
import React from 'react';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onCartClick: () => void;
  onWishlistClick: () => void;
  onSearchClick: () => void;
  onInstallClick: () => void;
  onLogoClick: () => void;
  onProfileClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  cartCount, 
  wishlistCount, 
  onCartClick, 
  onWishlistClick, 
  onSearchClick,
  onLogoClick,
  onProfileClick
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="px-4 py-3 flex flex-col gap-3">
        {/* Top Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={onProfileClick}
              className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden border border-gray-100 active:scale-95 transition-transform"
            >
               <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Pushpak" alt="Profile" className="w-full h-full object-cover" />
            </button>
            <div className="hidden sm:flex items-center bg-pink-50 px-3 py-1 rounded-full border border-pink-100">
               <span className="text-pink-500 mr-1 text-lg">🎁</span>
               <span className="text-[11px] font-semibold text-pink-600 uppercase tracking-tight">Refer and Earn</span>
            </div>
          </div>

          <div onClick={onLogoClick} className="flex-grow text-center cursor-pointer">
             <h1 className="text-lg font-bold tracking-tight text-gray-800">SHOPPING ZONE 🛍️</h1>
          </div>

          <div className="flex items-center gap-5">
            <button onClick={onWishlistClick} className="relative text-gray-600 hover:text-black transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>
            <button onClick={onCartClick} className="relative text-gray-600 hover:text-black transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search Row */}
        <div className="relative group cursor-pointer" onClick={onSearchClick}>
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <svg className="h-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input 
            type="text" 
            readOnly
            placeholder="Search by Keyword or Product ID" 
            className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 pl-12 pr-24 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 placeholder:text-gray-400"
          />
          <div className="absolute inset-y-0 right-4 flex items-center gap-4 border-l border-gray-200 pl-4">
            <button className="text-gray-400 hover:text-indigo-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </button>
            <button className="text-gray-400 hover:text-indigo-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

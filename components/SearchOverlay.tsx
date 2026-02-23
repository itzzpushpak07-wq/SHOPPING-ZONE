
import React, { useState, useEffect, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onProductClick: (id: string) => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose, onProductClick }) => {
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    return PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase()) || 
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  // Handle escape key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery(''); // Reset query on close
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white animate-in fade-in duration-300 flex flex-col">
      <div className="px-6 md:px-12 py-8 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <div className="text-[10px] uppercase tracking-[0.4em] text-gray-400">Search Catalogue</div>
          <button 
            onClick={onClose}
            className="p-2 hover:scale-110 transition-transform group"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Input Field */}
        <div className="relative mb-12">
          <input 
            autoFocus
            type="text"
            placeholder="TYPE TO SEARCH..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-4xl md:text-7xl font-light uppercase tracking-tighter border-none outline-none placeholder:text-gray-100"
          />
          <div className="h-[1px] w-full bg-gray-100 mt-4" />
        </div>

        {/* Results / Suggestions */}
        <div className="flex-grow overflow-y-auto no-scrollbar pb-20">
          {query.trim() === '' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6">Popular Categories</h4>
                <div className="flex flex-col gap-4">
                  {['Outerwear', 'Knitwear', 'Accessories', 'Shoes'].map(cat => (
                    <button 
                      key={cat}
                      onClick={() => setQuery(cat)}
                      className="text-xl font-light text-left hover:pl-2 transition-all"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6">Suggestions</h4>
                <div className="flex flex-wrap gap-3">
                  {['Wool Coat', 'Silk Dress', 'Leather', 'Minimal'].map(tag => (
                    <button 
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-4 py-2 border border-gray-100 text-[11px] uppercase tracking-widest hover:border-black transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-end mb-8">
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
                  {filteredProducts.length} Results for "{query}"
                </h4>
              </div>
              
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {filteredProducts.map(product => (
                    <div 
                      key={product.id}
                      onClick={() => onProductClick(product.id)}
                      className="cursor-pointer group"
                    >
                      <div className="aspect-[4/5] overflow-hidden bg-gray-50 mb-4">
                        <img 
                          src={product.images[0]} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          alt={product.name}
                        />
                      </div>
                      <h5 className="text-[11px] uppercase tracking-widest font-medium truncate">{product.name}</h5>
                      <p className="text-[11px] font-light text-gray-400">${product.price.toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-24 text-center opacity-40 italic font-light">
                  No matches found for "{query}". Try searching for categories or basic terms.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;


import React from 'react';
import { ViewState } from '../types';

interface BottomNavProps {
  activeView: ViewState;
  onViewChange: (view: ViewState) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeView, onViewChange }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: (active: boolean) => (
      <div className={`p-1.5 rounded-lg transition-all duration-300 ${active ? 'scale-110' : ''}`}>
        <div className={`relative w-7 h-7 flex items-center justify-center rounded-lg ${active ? 'bg-purple-700' : 'bg-transparent'}`}>
           <svg className={`w-5 h-5 ${active ? 'text-white' : 'text-gray-400'}`} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3L4 9v12h5v-7h6v7h5V9l-8-6z" />
           </svg>
           {active && (
             <span className="absolute text-[8px] font-black text-amber-400 bottom-1.5">m</span>
           )}
        </div>
      </div>
    )},
    { id: 'categories', label: 'Categories', icon: (active: boolean) => (
      <div className="w-7 h-7 flex items-center justify-center">
        <svg className={`w-7 h-7 ${active ? 'text-[#303F9F]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="6" y="6" width="12" height="12" rx="1" strokeWidth="1.5" />
          <path d="M10 8v4a2 2 0 004 0V8" strokeWidth="1.5" />
        </svg>
      </div>
    )},
    { id: 'mall', label: 'Mall', icon: (active: boolean) => (
      <div className="w-7 h-7 flex items-center justify-center">
        <svg className={`w-7 h-7 ${active ? 'text-[#303F9F]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
    )},
    { id: 'video-finds', label: 'Video Finds', icon: (active: boolean) => (
      <div className="w-7 h-7 flex items-center justify-center">
        <svg className={`w-7 h-7 ${active ? 'text-[#303F9F]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="1.5" />
          <path d="M10 9l5 3-5 3V9z" strokeWidth="1.5" fill={active ? "currentColor" : "none"} />
          <path d="M4 8h16M4 16h16" strokeWidth="1.5" />
        </svg>
      </div>
    )},
    { id: 'orders', label: 'My Orders', icon: (active: boolean) => (
      <div className="w-7 h-7 flex items-center justify-center">
        <svg className={`w-7 h-7 ${active ? 'text-[#303F9F]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      </div>
    )},
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[110] bg-white border-t border-gray-100 pb-safe shadow-[0_-5px_20px_rgba(0,0,0,0.05)] lg:hidden">
      <div className="flex justify-around items-end h-16 px-2">
        {tabs.map((tab) => {
          const isActive = activeView === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onViewChange(tab.id as ViewState)}
              className="flex flex-col items-center justify-center gap-0.5 w-full h-full transition-all active:scale-95"
            >
              {tab.icon(isActive)}
              <span className={`text-[11px] font-bold tracking-tight ${isActive ? 'text-[#283593]' : 'text-gray-500'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;

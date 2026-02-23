
import React from 'react';

interface AccountProps {
  onBack: () => void;
  onWishlistClick: () => void;
}

const Account: React.FC<AccountProps> = ({ onBack, onWishlistClick }) => {
  const sections = [
    {
      title: 'My Payments',
      items: [
        { label: 'Bank & UPI Details', icon: 'https://cdn-icons-png.flaticon.com/128/9651/9651717.png' },
        { label: 'Payment & Refund', icon: 'https://cdn-icons-png.flaticon.com/128/633/633611.png' }
      ]
    },
    {
      title: 'My Activity',
      items: [
        { label: 'Change Language', icon: 'https://cdn-icons-png.flaticon.com/128/484/484581.png' },
        { label: 'Wishlisted Products', icon: 'https://cdn-icons-png.flaticon.com/128/833/833472.png', onClick: onWishlistClick },
        { label: 'Shared Products', icon: 'https://cdn-icons-png.flaticon.com/128/1358/1358023.png' },
        { label: 'Followed Shops', icon: 'https://cdn-icons-png.flaticon.com/128/3081/3081648.png', badge: 'New' }
      ]
    },
    {
      title: 'Others',
      items: []
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Custom Header matching screenshot */}
      <div className="bg-white px-4 h-16 flex items-center justify-between border-b border-gray-100 sticky top-0 z-50">
        <div className="flex items-center gap-6">
          <button onClick={onBack} className="text-gray-800 p-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-lg font-bold tracking-tight text-gray-800 uppercase">ACCOUNT</h1>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="p-4">
        {/* Profile Card */}
        <div className="flex items-center justify-between mb-8 py-2">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-orange-100 overflow-hidden border border-gray-100">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Pushpak" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center p-1.5">
                <svg className="w-full h-full text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-800 tracking-tight">+919322829621</p>
            </div>
          </div>
          <button className="text-gray-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Top Action Buttons Grid */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <button className="flex flex-col items-center justify-center gap-3 p-6 border border-gray-100 rounded-2xl bg-white shadow-sm hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 text-blue-600">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <span className="text-sm font-bold text-gray-700">Help Centre</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-3 p-6 border border-gray-100 rounded-2xl bg-white shadow-sm hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 text-blue-400">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.65-.5-.65C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83l1.41 1.41L12 8.66l3.59 3.58L17 10.83 14.92 8H20v6z" />
              </svg>
            </div>
            <span className="text-sm font-bold text-gray-700">Refer & Earn ₹100</span>
          </button>
        </div>

        {/* List Sections */}
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-lg font-bold text-gray-800 px-1">{section.title}</h2>
              <div className="space-y-1">
                {section.items.map((item, itemIdx) => (
                  <button
                    key={itemIdx}
                    onClick={item.onClick}
                    className="w-full flex items-center justify-between py-4 border-b border-gray-50 active:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-6 h-6 opacity-80">
                        <img src={item.icon} alt="" className="w-full h-full object-contain" />
                      </div>
                      <span className="text-[16px] font-medium text-gray-700">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Account;

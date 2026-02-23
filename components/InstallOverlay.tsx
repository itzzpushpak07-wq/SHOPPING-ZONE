
import React, { useEffect } from 'react';

interface InstallOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const InstallOverlay: React.FC<InstallOverlayProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-6 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-white w-full max-w-md p-10 text-center shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-8">
          <div className="w-16 h-16 bg-black text-white mx-auto flex items-center justify-center text-xl font-light tracking-tighter mb-6">
            SZ
          </div>
          <h2 className="text-xl font-light uppercase tracking-[0.2em] mb-4">Download to Device</h2>
          <p className="text-[11px] text-gray-500 uppercase tracking-widest leading-relaxed">
            Experience SHOPPING ZONE 🛍️ by <br/><span className="text-black font-semibold">Pushpak Bhamre</span> as a native app.
          </p>
        </div>

        <div className="space-y-8 text-left border-t border-gray-100 pt-8">
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-3">On iOS</h3>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              1. Tap the <span className="text-black font-medium inline-flex items-center gap-1">share icon <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg></span> at the bottom.<br/>
              2. Scroll down and select <span className="text-black font-medium">'Add to Home Screen'</span>.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-3">On Android</h3>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              1. Tap the <span className="text-black font-medium">three dots</span> in the browser menu.<br/>
              2. Select <span className="text-black font-medium">'Install App'</span> or <span className="text-black font-medium">'Add to Home Screen'</span>.
            </p>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="w-full bg-black text-white py-4 mt-10 text-[11px] uppercase tracking-[0.3em] hover:bg-neutral-800 transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default InstallOverlay;

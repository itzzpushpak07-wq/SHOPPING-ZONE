
import React, { useEffect, useState } from 'react';

interface WelcomeProps {
  onComplete: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Entrance animation trigger
    const entranceTimer = setTimeout(() => setIsVisible(true), 100);
    
    // 4-second delay as requested by the user
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 4000);

    return () => {
      clearTimeout(entranceTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-[300] flex flex-col items-center justify-center overflow-hidden">
      {/* High Fidelity Background based on the user's image */}
      <div className="absolute inset-0 bg-[#0A0B3E]">
        {/* Layered deep blue/navy gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0B3E] via-[#04051B] to-[#0A0B3E]" />
        
        {/* Abstract layered curves from the screenshot */}
        <div className="absolute inset-0 opacity-40">
           <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
             <path d="M0 200C300 100 600 400 1440 200V800H0V200Z" fill="#04051B" opacity="0.5"/>
             <path d="M1440 100C1100 0 800 300 0 100V800H1440V100Z" fill="#06072A" opacity="0.3"/>
           </svg>
        </div>

        {/* Floating gold lines as seen in the image */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-60" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="xMidYMid slice">
            <path 
              d="M-100 300C200 150 600 550 900 350C1200 150 1500 450 1700 250" 
              stroke="url(#goldGrad)" 
              strokeWidth="1.5" 
              className="animate-pulse"
              style={{ animationDuration: '4s' }}
            />
            <path 
              d="M-50 500C350 350 750 750 1050 550C1350 350 1600 650 1800 450" 
              stroke="url(#goldGrad)" 
              strokeWidth="0.8" 
              opacity="0.5"
            />
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8A6D3B" stopOpacity="0" />
                <stop offset="50%" stopColor="#FFD700" stopOpacity="1" />
                <stop offset="100%" stopColor="#B8860B" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Fine gold dust particles */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          {[...Array(60)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-0.5 h-0.5 bg-yellow-200 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random(),
                transform: `scale(${Math.random()})`,
                animation: `twinkle ${2 + Math.random() * 3}s infinite alternate`
              }}
            />
          ))}
        </div>
      </div>

      {/* "WELCOME" Typography */}
      <div className={`relative z-10 transition-all duration-1000 ease-out transform ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
        <h1 className="text-[64px] md:text-[110px] font-bold tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-b from-[#F3E2A9] via-[#D4AF37] to-[#8A6D3B] drop-shadow-[0_8px_15px_rgba(0,0,0,0.6)] select-none">
          WELCOME
        </h1>
      </div>

      {/* Signature Branded White Card */}
      <div className={`absolute bottom-0 w-full flex justify-center transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="bg-white w-[90%] max-w-sm rounded-t-[40px] px-8 pt-12 pb-16 text-center shadow-[0_-15px_40px_rgba(0,0,0,0.4)]">
          <div className="flex flex-col items-center gap-1.5 mb-10">
            <h2 className="text-[28px] font-light tracking-[0.4em] text-gray-900 leading-none mr-[-0.4em]">
              SHOPPING
            </h2>
            <div className="flex items-center gap-4">
              <h2 className="text-[28px] font-light tracking-[0.4em] text-gray-900 leading-none ml-8 mr-[-0.4em]">
                ZONE
              </h2>
              <div className="flex items-center translate-y-[-2px]">
                <img 
                  src="https://cdn-icons-png.flaticon.com/128/3502/3502601.png" 
                  className="w-9 h-9 object-contain drop-shadow-sm" 
                  alt="shopping bags" 
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <p className="text-[10px] uppercase tracking-[0.5em] text-gray-400 font-bold mr-[-0.5em]">
              OWNED BY <span className="text-black">PUSHPAK BHAMRE</span>
            </p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes twinkle {
          0% { opacity: 0.2; transform: translateY(0) scale(0.5); }
          100% { opacity: 0.8; transform: translateY(-5px) scale(1.2); }
        }
      `}} />
    </div>
  );
};

export default Welcome;

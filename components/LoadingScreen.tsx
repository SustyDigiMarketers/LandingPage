import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? '' : prev + '.'));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-google-blue opacity-[0.03] rounded-full blur-[120px] animate-pulse"></div>
      
      <div className="relative flex flex-col items-center">
        {/* Animated Logo Container */}
        <div className="relative w-24 h-24 mb-12 group">
          {/* Circular Orbiting Rings */}
          <div className="absolute inset-0 border-2 border-slate-100 rounded-[32px] scale-150 animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute inset-0 border border-slate-50 rounded-[40px] scale-125 animate-[spin_15s_linear_infinite_reverse]"></div>
          
          {/* Flash Logo Reveal */}
          <div className="relative w-full h-full bg-white rounded-[28px] shadow-2xl flex items-center justify-center overflow-hidden border border-slate-50">
            <div className="grid grid-cols-2 gap-1 p-4 animate-[pulse_2s_infinite]">
              <div className="w-6 h-6 bg-google-red rounded-sm animate-[bounce_2s_infinite_0s]"></div>
              <div className="w-6 h-6 bg-google-green rounded-sm animate-[bounce_2s_infinite_0.2s]"></div>
              <div className="w-6 h-6 bg-google-blue rounded-sm animate-[bounce_2s_infinite_0.4s]"></div>
              <div className="w-6 h-6 bg-google-yellow rounded-sm animate-[bounce_2s_infinite_0.6s]"></div>
            </div>
            
            {/* Flash Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 -translate-x-full animate-[shimmer_2s_infinite_linear]"></div>
          </div>
        </div>

        {/* Branding Typography */}
        <div className="text-center animate-fade-in">
          <div className="flex items-center justify-center gap-1.5 mb-2">
            <span className="text-2xl font-medium text-[#5f6368] tracking-tight">SustyDigi</span>
            <span className="text-2xl font-bold text-[#202124] tracking-tight">Marketers</span>
          </div>
          
          <div className="h-1 w-48 bg-slate-100 rounded-full mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-google-blue via-google-red to-google-yellow animate-[loading-bar_2s_infinite_ease-in-out]"></div>
          </div>
          
          <p className="mt-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] font-ui animate-pulse">
            Orchestrating Intelligence{dots}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(200%) rotate(45deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
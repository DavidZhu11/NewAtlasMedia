import React from 'react';

const AuthorityBar: React.FC = () => {
  return (
    <div className="w-full bg-brand-panel border-y border-white/5 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-8 sm:mb-10 leading-relaxed px-2">
          A Strategic Subsidiary of Joint Growth Partners & Titan Asset Management
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Logos */}

          <div className="flex items-center gap-3">
            <div className="h-8 w-8 sm:h-10 sm:w-10 bg-slate-200/20 rounded-full flex items-center justify-center font-serif font-bold text-lg sm:text-xl text-slate-200">J</div>
            <div className="text-left">
              <div className="text-white font-bold text-base sm:text-lg leading-none">JOINT GROWTH</div>
              <div className="text-slate-400 text-[10px] sm:text-xs tracking-widest">PARTNERS</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img src="https://i.postimg.cc/QxT9Yrft/Untitled-design-(3).png" alt="Titan Asset Management" className="h-8 w-auto sm:h-10" />
            <div className="text-left">
              <div className="text-white font-bold text-base sm:text-lg leading-none">TITAN</div>
              <div className="text-slate-400 text-[10px] sm:text-xs tracking-widest">ASSET MANAGEMENT</div>
            </div>
          </div>

          {/* Media Mentions */}
          <div className="hidden md:block w-px h-10 bg-white/10 mx-4"></div>

          <div className="flex items-center gap-6 sm:gap-8 mt-2 sm:mt-0">
            <span className="text-base sm:text-lg font-serif italic text-white font-bold">Forbes</span>
            <span className="text-base sm:text-lg font-sans font-black text-white tracking-tighter">yahoo<span className="font-medium text-brand-purple">!</span>finance</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorityBar;
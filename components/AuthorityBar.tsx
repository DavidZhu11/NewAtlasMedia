import React from 'react';

const AuthorityBar: React.FC = () => {
  return (
    <div className="w-full bg-brand-panel border-y border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-medium text-slate-500 uppercase tracking-[0.2em] mb-10">
          A Strategic Subsidiary of Joint Growth Partners & Titan Asset Management
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Logos */}

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-slate-200/20 rounded-full flex items-center justify-center font-serif font-bold text-xl text-slate-200">J</div>
            <div className="text-left">
              <div className="text-white font-bold text-lg leading-none">JOINT GROWTH</div>
              <div className="text-slate-400 text-xs tracking-widest">PARTNERS</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img src="https://i.postimg.cc/sXs4sg08/Untitled-design-(2).png" alt="Titan Asset Management" className="h-10 w-auto" />
            <div className="text-left">
              <div className="text-white font-bold text-lg leading-none">TITAN</div>
              <div className="text-slate-400 text-xs tracking-widest">ASSET MANAGEMENT</div>
            </div>
          </div>

          {/* Media Mentions */}
          <div className="hidden md:block w-px h-10 bg-white/10 mx-4"></div>

          <div className="flex items-center gap-8">
            <span className="text-lg font-serif italic text-white font-bold">Forbes</span>
            <span className="text-lg font-sans font-black text-white tracking-tighter">yahoo<span className="font-medium text-brand-purple">!</span>finance</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorityBar;
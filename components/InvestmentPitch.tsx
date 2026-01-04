import React from 'react';
import { Landmark, TrendingUp, Handshake } from 'lucide-react';

const InvestmentPitch: React.FC = () => {
  return (
    <section id="investment" className="py-12 sm:py-20 bg-gradient-to-b from-brand-dark to-[#0f0518]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="inline-block mb-6">
          <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase tracking-wide">
            <Landmark size={14} />
            The VC Advantage
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
          Beyond Growth—<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600">To Investment.</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-400 mb-8 sm:mb-12 leading-relaxed">
          New Atlas Media serves as an operational filter for our parent holding company, <strong>Joint Growth Partners</strong>. We aren't just looking for clients; we are looking for our next acquisition.
        </p>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 text-left">
          <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-xl hover:bg-white/10 transition-colors">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center text-yellow-500 mb-4 sm:mb-6">
              <TrendingUp size={20} className="sm:hidden" />
              <TrendingUp size={24} className="hidden sm:block" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Direct Capital Injection</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              High-performing graduates of the 3-Step Accelerator are eligible for direct equity injections ranging from <strong>$500k to $1M</strong> to fuel rapid expansion or territory buyouts.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-xl hover:bg-white/10 transition-colors">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center text-yellow-500 mb-4 sm:mb-6">
              <Handshake size={20} className="sm:hidden" />
              <Handshake size={24} className="hidden sm:block" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Exit Engineering</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              We structure your operations not just for cash flow, but for valuation. We build you to be bought, potentially by Titan Asset Management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPitch;
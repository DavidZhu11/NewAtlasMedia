import React from 'react';
import { Landmark, TrendingUp, Handshake } from 'lucide-react';

const InvestmentPitch: React.FC = () => {
  return (
    <section id="investment" className="py-24 bg-gradient-to-b from-brand-dark to-[#0f0518]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="inline-block mb-6">
          <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase tracking-wide">
            <Landmark size={14} />
            The VC Advantage
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
          You Didn't Build This <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600">To Stay Stuck.</span>
        </h2>

        <p className="text-lg text-slate-400 mb-4 leading-relaxed">
          Beyond growth—we're building you toward the exit you've been dreaming of, or the freedom to never need one.
        </p>
        <p className="text-base text-slate-500 mb-12 leading-relaxed">
          New Atlas Media is the operational filter for our parent holding company, <strong className="text-slate-400">Joint Growth Partners</strong>. We aren't just looking for clients; we're looking for our next acquisition.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center text-yellow-500 mb-6">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Direct Capital Injection</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              High-performing graduates of the 3-Step Accelerator are eligible for direct equity injections ranging from <strong>$500k to $1M</strong> to fuel rapid expansion or territory buyouts.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center text-yellow-500 mb-6">
              <Handshake size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Exit Engineering</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We structure your operations not just for cash flow, but for valuation. We build you to be bought, potentially by Titan Asset Management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPitch;
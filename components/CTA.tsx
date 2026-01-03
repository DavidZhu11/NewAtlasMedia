import React from 'react';
import { Clock, CheckCircle, Shield } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-brand-purpleDark/20"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
          Find Your Hidden Revenue.
        </h2>
        <p className="text-xl text-slate-300 mb-4 max-w-2xl mx-auto leading-relaxed">
          Most founders at your stage are dealing with the same 3 bottlenecks—and leaving 6 figures on the table as a result.
        </p>
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
          In a free 20-minute call, we'll show you exactly where you're stuck and the fastest path to break through.
        </p>

        <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 inline-flex flex-col items-center w-full max-w-2xl shadow-2xl">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-purple/20 text-brand-purple mb-6">
            <Clock size={24} />
          </div>

          <h3 className="text-3xl font-bold text-white mb-3">What You'll Discover:</h3>

          {/* Value Bullets */}
          <ul className="text-left space-y-3 mb-8 w-full max-w-md">
            <li className="flex items-start gap-3 text-slate-300">
              <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
              <span>The #1 bottleneck preventing your growth (most founders get this wrong)</span>
            </li>
            <li className="flex items-start gap-3 text-slate-300">
              <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
              <span>Your current revenue "leaks" and exactly how to plug them</span>
            </li>
            <li className="flex items-start gap-3 text-slate-300">
              <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
              <span>A custom 90-day roadmap to hit your next revenue milestone</span>
            </li>
          </ul>

          {/* Risk Reversal */}
          <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-4 mb-8 w-full max-w-md">
            <div className="flex items-start gap-3">
              <Shield size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-slate-200">
                <span className="text-green-400 font-semibold">Our Guarantee:</span> If we can't identify at least $50k in hidden revenue potential in 20 minutes, we'll tell you to keep looking elsewhere.
              </p>
            </div>
          </div>

          <p className="text-slate-400 mb-8 text-sm">
            <span className="text-white font-medium">100% free, zero obligation.</span> Limited to 5 businesses per month.
          </p>

          <a href="https://calendly.com/brendan-jointgrowthpartners/30min" target="_blank" rel="noopener noreferrer" aria-label="Book a growth gap audit call" className="group h-16 pl-10 pr-3 rounded-full bg-white text-black text-lg font-bold transition-all hover:bg-slate-200 hover:scale-[1.02] flex items-center justify-between min-w-[280px] shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)]">
            Claim Your Free Audit
            <span className="h-12 w-12 bg-black rounded-full flex items-center justify-center ml-6 group-hover:rotate-45 transition-transform duration-300">
              <span className="material-symbols-outlined text-white text-xl">arrow_forward</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
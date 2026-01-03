import React from 'react';
import { Check } from 'lucide-react';

const Partnership: React.FC = () => {
  return (
    <section id="partnership" className="py-32 bg-brand-panel border-y border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            We Only Win When <br />
            <span className="text-brand-purple">You Win. Period.</span>
          </h2>
          <p className="text-lg text-slate-400 mb-6">
            If you've been burned by agencies that cash retainer checks and deliver "strategy decks" with zero ROI, we get it. That's exactly why we don't work that way.
          </p>
          <p className="text-base text-slate-300">
            Our parent company is a private equity firm. We think like investors, not marketers. We only make money when your profit goes up—not when we send you a report.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">

          {/* Phase 1 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/[0.07] transition-colors relative group">
            <div className="absolute top-8 right-8 text-white/5 group-hover:text-white/10 transition-colors font-black text-7xl select-none">01</div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Phase 1: Setup & Systems</h3>
            <p className="text-slate-400 mb-8 leading-relaxed relative z-10">
              A one-time setup investment to build your growth infrastructure. We build the engine before we turn the key.
            </p>
            <ul className="space-y-4 relative z-10">
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <div className="bg-brand-purple/20 p-1.5 rounded text-brand-purple"><Check size={16} /></div>
                Complete Revenue Audit & Growth Roadmap
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <div className="bg-brand-purple/20 p-1.5 rounded text-brand-purple"><Check size={16} /></div>
                Custom Systems & Infrastructure Build
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <div className="bg-brand-purple/20 p-1.5 rounded text-brand-purple"><Check size={16} /></div>
                Process Optimization & Team Training
              </li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="bg-gradient-to-br from-brand-purple/10 to-transparent border border-brand-purple/30 rounded-3xl p-10 relative group">
            <div className="absolute top-8 right-8 text-brand-purple/10 group-hover:text-brand-purple/20 transition-colors font-black text-7xl select-none">02</div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Phase 2: Revenue Share</h3>
            <p className="text-slate-400 mb-8 leading-relaxed relative z-10">
              We take a percentage of <strong className="text-white">NEW</strong> profit only. If we don't add measurable profit to your bottom line, we don't get paid. Simple as that.
            </p>
            <ul className="space-y-4 relative z-10">
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <div className="bg-brand-purple/20 p-1.5 rounded text-brand-purple"><Check size={16} /></div>
                Zero Monthly Retainers
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <div className="bg-brand-purple/20 p-1.5 rounded text-brand-purple"><Check size={16} /></div>
                Performance-Based on New Revenue Only
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <div className="bg-brand-purple/20 p-1.5 rounded text-brand-purple"><Check size={16} /></div>
                Ongoing Strategy & Optimization
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partnership;
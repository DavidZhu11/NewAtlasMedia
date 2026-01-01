import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-brand-purpleDark/20"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
          Identify Your Hidden Revenue.
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          We’ve spent years perfecting the systems that take companies from <span className="text-white font-bold">$200k to $1M+</span>. During this 20-minute audit, we’ll show you exactly why you’re stuck and the 3 steps we would take to double your throughput.
        </p>

        <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 inline-flex flex-col items-center w-full max-w-2xl shadow-2xl">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-purple/20 text-brand-purple mb-6">
            <Clock size={24} />
          </div>

          <h3 className="text-3xl font-bold text-white mb-3">Ready to scale?</h3>
          <p className="text-slate-400 mb-8 text-base">Strictly limited to 5 qualified businesses per month.</p>

          <a href="https://calendly.com/brendan-jointgrowthpartners/30min" target="_blank" rel="noopener noreferrer" aria-label="Book a growth gap audit call" className="group h-16 pl-10 pr-3 rounded-full bg-white text-black text-lg font-bold transition-all hover:bg-slate-200 hover:scale-[1.02] flex items-center justify-between min-w-[240px] shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)]">
            Book a Growth Gap Audit Call
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
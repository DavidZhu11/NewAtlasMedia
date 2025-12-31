import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-black min-h-screen flex items-center justify-center pt-20 pb-32">

            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[100%] h-[1000px] pointer-events-none opacity-60">
                <div className="absolute top-[10%] inset-x-0 h-full arc-glow blur-sm border-t-2 border-brand-purple/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/10 via-transparent to-transparent"></div>
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-purple/15 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute inset-0 subtle-grid pointer-events-none"></div>

            {/* Content */}
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col items-center">

                {/* Status Pill - Themed Purple */}
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2 text-sm font-medium text-white border border-white/10 mb-12 backdrop-blur-sm shadow-[0_0_25px_rgba(139,92,246,0.2)] animate-fade-in">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-purple"></span>
                    </span>
                    Accepting partners for Q1
                </div>

                {/* Headline - Massive Size */}
                <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-8 hero-text-glow leading-[0.9] text-center">
                    Double Your<br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-300">Revenue.</span>
                </h1>

                {/* Sub-headline */}
                <p className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-3xl mb-14 leading-relaxed font-light text-center">
                    For founder-led businesses generating <span className="text-white font-medium">$100k-$500k/year</span>. Implement our <span className="text-white font-medium border-b border-brand-purple/50 pb-0.5">3-Step-Accelerator</span> to scale operations without the chaos.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto mb-20">
                    <button aria-label="Contact us to discuss partnership" className="group h-16 pl-10 pr-3 rounded-full bg-white text-black text-lg font-bold transition-all hover:bg-slate-200 hover:scale-[1.02] flex items-center justify-between min-w-[240px] shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)]">
                        Let's Talk
                        <span className="h-12 w-12 bg-black rounded-full flex items-center justify-center ml-6 group-hover:rotate-45 transition-transform duration-300">
                            <span className="material-symbols-outlined text-white text-xl">arrow_forward</span>
                        </span>
                    </button>
                    <button aria-label="View our case studies" className="h-16 px-10 rounded-full border border-white/10 bg-white/5 text-lg font-medium text-white hover:bg-white/10 transition-all hover:border-white/20 backdrop-blur-sm min-w-[240px]">
                        View Case Studies
                    </button>
                </div>

                {/* Trust Indicators - Clean & Subtle */}
                <div className="pt-10 border-t border-white/5 w-full max-w-4xl flex flex-wrap justify-center gap-x-12 gap-y-6">
                    <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                        <span className="material-symbols-outlined text-brand-purple text-[20px]">verified</span>
                        <span>No results? You don't pay.</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                        <span className="material-symbols-outlined text-brand-purple text-[20px]">verified</span>
                        <span>Guaranteed Growth</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                        <span className="material-symbols-outlined text-brand-purple text-[20px]">verified</span>
                        <span>Founder-led Focus</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
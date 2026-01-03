import React from 'react';
import { Microscope, Zap, BarChart3, ArrowRight } from 'lucide-react';
import { FeatureCardProps } from '../types';

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, step }) => (
  <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-purple/50 transition-all hover:bg-white/10 overflow-hidden h-full">
    <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-white group-hover:opacity-20 transition-opacity">
      0{step}
    </div>
    <div className="relative z-10 flex flex-col h-full">
      <div className="w-14 h-14 rounded-xl bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-6 group-hover:scale-110 transition-transform duration-300 border border-brand-purple/20">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm flex-grow">{description}</p>
    </div>
  </div>
);

const Mechanism: React.FC = () => {
  return (
    <section id="mechanism" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            We Don't Consult. <br />
            <span className="text-brand-purple">We Engineer Growth.</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Standard consultants give advice. We install infrastructure. We use the exact playbook leveraged by our parent holding company to scale portfolio assets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent -translate-y-1/2 z-0"></div>

          <FeatureCard
            step={1}
            icon={<Microscope size={28} />}
            title="Forensic Audit"
            description="We perform a ground-up analysis of your unit economics, acquisition bottlenecks, and 'revenue leaks'. We don't guess; we identify the exact variables preventing your scale."
          />
          <FeatureCard
            step={2}
            icon={<Zap size={28} />}
            title="Hands-on Implementation"
            description="Our specialists step into your operations and CRM to install high-leverage systems. From automating lead flow to optimizing sales conversion, we do the heavy lifting of implementation for you."
          />
          <FeatureCard
            step={3}
            icon={<BarChart3 size={28} />}
            title="Performance Calibration"
            description="Once the foundation is set, we initiate continuous A/B testing and refinement cycles to ensure your growth is sustainable, profitable, and ready for institutional capital."
          />
        </div>
      </div>
    </section>
  );
};

export default Mechanism;
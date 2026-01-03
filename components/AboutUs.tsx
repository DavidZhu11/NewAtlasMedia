import React from 'react';
import { Target, TrendingUp, Users, Zap } from 'lucide-react';

const values = [
    {
        icon: Target,
        title: "Performance Driven",
        description: "Every strategy is measured against real revenue outcomes, not vanity metrics."
    },
    {
        icon: TrendingUp,
        title: "Long-Term Vision",
        description: "We build marketing systems designed for sustainable growth, not quick wins."
    },
    {
        icon: Users,
        title: "Partnership Focused",
        description: "We work closely with founders and leadership teams as true growth partners."
    },
    {
        icon: Zap,
        title: "Clarity & Consistency",
        description: "Clear messaging and consistent execution that turns attention into revenue."
    }
];

const AboutUs: React.FC = () => {
    return (
        <section id="about" className="py-32 bg-brand-panel border-y border-white/5 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="inline-block text-brand-purple text-sm font-semibold tracking-widest uppercase mb-4">
                        About Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                        We've Been <br />
                        <span className="text-brand-purple">In Your Shoes.</span>
                    </h2>
                    <p className="text-xl text-slate-300 leading-relaxed">
                        Our founding team built and scaled a 7-figure brand before joining Joint Growth Partners. We know the founder grind—the 3am nights, the failed campaigns, the feeling that everyone else has it figured out. That's exactly why we built something different.
                    </p>
                </div>

                {/* Mission Statement Card */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="bg-gradient-to-br from-brand-purple/10 to-transparent border border-brand-purple/30 rounded-3xl p-10 md:p-14 text-center">
                        <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
                            We're not career marketers pretending to understand your business. We're <span className="text-white font-semibold">operators who became growth specialists</span> because we got tired of the same problems you're facing right now.
                        </p>
                    </div>
                </div>

                {/* Values Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] hover:border-brand-purple/30 transition-all duration-300 text-center"
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-purple/20 text-brand-purple mb-6 group-hover:scale-110 transition-transform">
                                    <Icon size={28} />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;

import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
    quote: string;
    author: string;
    company?: string;
    role?: string;
}

const testimonials: Testimonial[] = [
    {
        quote: "Before working with New Atlas Media, we had strong content but no consistent growth engine. Their team rebuilt our digital strategy from the ground up, refining our positioning, improving audience retention, and driving measurable increases in engagement across all platforms. Within months, we saw clearer brand authority, stronger inbound demand, and a scalable system we could confidently build on. New Atlas Media didn't just market our brand — they professionalized it.",
        author: "Jeff Phillips"
    },
    {
        quote: "Before working with New Atlas Media, we had a solid product but no real identity in the market. Their team helped us clarify our message, refine our positioning, and turn what we were selling into an actual brand people could recognize and trust. They rebuilt our visual presence, tightened our storytelling, and aligned everything with our long term goals. What stood out most was how intentional every decision felt and how clearly they understood our audience. Within months, engagement increased across every channel and inbound interest became consistent instead of random. New Atlas Media did not just improve our marketing, they helped define who we are as a company.",
        author: "Luke McClain"
    },
    {
        quote: "New Atlas Media brought structure and focus to our marketing efforts when we needed it most. Their approach was thoughtful, efficient, and easy to work with from day one. We saw clearer messaging and stronger traction without feeling overwhelmed by unnecessary complexity. The results spoke for themselves and the process felt sustainable long term.",
        author: "Tyler Jones"
    }
];

const CaseStudies: React.FC = () => {
    return (
        <section id="case-studies" className="py-20 sm:py-32 bg-brand-dark relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20 px-2">
                    <span className="inline-block text-brand-purple text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4">
                        Case Studies
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                        Founders Who Were <br />
                        <span className="text-brand-purple">Right Where You Are.</span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-400">
                        They were stuck, skeptical, and tired of marketing that didn't work. Then they found a system that did.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`group relative bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-white/[0.07] hover:border-brand-purple/30 transition-all duration-300 flex flex-col ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                                }`}
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 text-brand-purple/20 group-hover:text-brand-purple/40 transition-colors">
                                <Quote size={32} />
                            </div>

                            {/* Quote */}
                            <blockquote className="text-sm sm:text-base text-slate-300 leading-relaxed sm:leading-7 mb-6 sm:mb-8 relative z-10 flex-grow">
                                "{testimonial.quote}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center gap-3 sm:gap-4 relative z-10">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-brand-purple to-brand-purpleDark flex items-center justify-center text-white font-bold text-base sm:text-lg">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-white font-semibold">{testimonial.author}</p>
                                    {(testimonial.role || testimonial.company) && (
                                        <p className="text-slate-400 text-sm">
                                            {testimonial.role}{testimonial.role && testimonial.company && ', '}{testimonial.company}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-purple/0 to-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;

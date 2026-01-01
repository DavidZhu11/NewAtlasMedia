import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-in-out ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img src="https://i.postimg.cc/BbWL4Y63/Untitled-design-(6).png" alt="New Atlas Media" className="h-10 w-auto" />
            <span className="text-xl font-bold tracking-tight text-white">New Atlas Media</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#case-studies" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Case Studies</a>
            <a href="#about" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">About Us</a>

            <a href="https://calendly.com/brendan-jointgrowthpartners/30min" target="_blank" rel="noopener noreferrer" className="flex h-10 items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 text-sm font-medium text-white shadow-lg shadow-purple-900/10 backdrop-blur-sm transition-all group">
              Book a Call
              <span className="material-symbols-outlined text-sm ml-1 group-hover:translate-x-0.5 transition-transform">arrow_outward</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden absolute top-full left-0 right-0 bg-brand-panel border-b border-white/10 p-4 flex flex-col gap-4 shadow-2xl">
          <a href="#case-studies" className="text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Case Studies</a>
          <a href="#about" className="text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>About Us</a>
          <a href="https://calendly.com/brendan-jointgrowthpartners/30min" target="_blank" rel="noopener noreferrer" className="w-full bg-brand-purple text-white py-3 rounded-lg font-medium text-center block">
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
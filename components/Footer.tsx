import React from 'react';
import { Rocket } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <img src="https://i.postimg.cc/BbWL4Y63/Untitled-design-(6).png" alt="New Atlas Media" className="h-6 w-auto" />
          <span className="font-bold text-md text-white">New Atlas Media</span>
        </div>

        <div className="flex gap-8 text-sm text-slate-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">JGP Holdings</a>
        </div>

        <div className="text-slate-600 text-sm">
          © 2025 New Atlas Media. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
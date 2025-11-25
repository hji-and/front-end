import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">BrandCore</h3>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Creating digital experiences that matter. We are a team of passionate developers and designers dedicated to building the future of the web.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-indigo-400 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <ul className="space-y-3 text-slate-400">
              <li>123 Innovation Drive</li>
              <li>Tech Valley, CA 94043</li>
              <li className="pt-2">hello@brandcore.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} BrandCore. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Designers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState, useEffect } from 'react';
import { Globe, Menu, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-white text-2xl font-bold tracking-tighter">
            DOOSAN
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-12">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white hover:text-gray-300 font-medium text-sm transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-xs text-white border border-gray-500 rounded px-3 py-1.5 hover:bg-white hover:text-black transition-colors">
            A/S 신청
          </a>
          <a href="#" className="text-xs text-white border border-gray-500 rounded px-3 py-1.5 hover:bg-white hover:text-black transition-colors">
            파트너 서비스
          </a>
          <div className="flex items-center text-white cursor-pointer ml-4">
            <Globe size={16} className="mr-1" />
            <span className="text-sm mr-1">KR</span>
            <ChevronDown size={14} />
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white">
          <Menu size={24} />
        </div>
      </div>
    </header>
  );
};

export default Header;
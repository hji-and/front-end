import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer select-none">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
              BrandCore
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-indigo-500 ${
                  isScrolled ? 'text-slate-600' : 'text-slate-200'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-full transition-all shadow-lg shadow-indigo-500/30">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-indigo-600 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className={`w-6 h-6 ${!isScrolled && !isOpen ? 'text-white' : 'text-slate-900'}`} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl transition-all duration-300 ease-in-out transform origin-top ${
          isOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-95 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="text-lg font-medium text-slate-700 hover:text-indigo-600 hover:pl-2 transition-all block py-2 border-b border-slate-50 last:border-0"
            >
              {item.label}
            </a>
          ))}
          <button className="mt-4 w-full py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md active:scale-95 transition-transform">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
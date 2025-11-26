import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        <div className="text-center md:text-left">
          <h4 className="font-bold text-lg tracking-widest mb-4">
            THE COFFEE ROOSTER
          </h4>
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
            Curating minimalist aesthetics for cafe spaces. Designed for
            comfort, crafted for style.
          </p>
        </div>

        <div className="flex space-x-8 text-sm text-gray-600">
          <div className="flex flex-col space-y-2">
            <h5 className="font-bold text-gray-900 mb-2 uppercase tracking-wide text-xs">
              Shop
            </h5>
            <a href="#" className="hover:text-black transition-colors">
              New Arrivals
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Best Sellers
            </a>
            <a href="#" className="hover:text-black transition-colors">
              MD
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <h5 className="font-bold text-gray-900 mb-2 uppercase tracking-wide text-xs">
              Info
            </h5>
            <a href="#" className="hover:text-black transition-colors">
              About Us
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Shop
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-200 pt-8 text-center text-xs text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} The Coffee Roost Demo. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

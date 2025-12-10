import React from 'react';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  return (
    <section className="bg-doosan-dark py-24 text-white relative overflow-hidden" id="products">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 opacity-20">
         <img src="https://picsum.photos/id/600/1920/1200" className="w-full h-full object-cover grayscale" alt="Background texture" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <p className="text-sm font-medium text-gray-400 mb-2">Products</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            전 세계 최대 규모의<br />
            Cobot 라인업
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group bg-[#1a1b1e] rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 border border-gray-800 hover:border-gray-600">
              <div className="bg-white p-8 h-64 flex items-center justify-center relative">
                 <img src={product.image} alt={product.name} className="w-48 h-auto mix-blend-multiply" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-6 h-10 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.badges.map((badge) => (
                    <span key={badge} className="px-2 py-1 bg-[#2a2b30] text-blue-400 text-xs font-medium rounded">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional E-Series Card Logic could go here or be added to constants if needed, strictly following the image shows 4 cards then a scroll/grid. I'll stick to grid for cleaner code. */}
      </div>
    </section>
  );
};

export default Products;
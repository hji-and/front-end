import React from 'react';
import { ChevronDown } from 'lucide-react';
import { USE_CASES } from '../constants';

const UseCases: React.FC = () => {
  return (
    <section className="py-24 bg-white container mx-auto px-6">
      <div className="mb-12">
        <p className="text-sm font-medium text-gray-500 mb-2">Use cases</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          로봇 도입으로 일하는 방식이 새로워집니다.
        </h2>
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <p className="text-gray-600 mb-6 md:mb-0">
            <a href="#" className="text-blue-600 font-semibold hover:underline">다양한 성공사례</a>를 통해 일터를 혁신할 새로운 아이디어를 얻어보세요.
          </p>
          
          <button className="flex items-center justify-between border border-gray-300 rounded px-4 py-2 w-48 text-sm hover:border-gray-400 transition-colors">
            <span>더 많은 도입사례</span>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {USE_CASES.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-lg cursor-pointer h-64">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
            
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <span className={`text-xs font-bold uppercase tracking-wider mb-1 block ${item.category.includes('Tech') ? 'text-yellow-400' : 'text-blue-400'}`}>
                {item.category}
              </span>
              <h3 className="text-white text-lg font-bold leading-tight mb-4">
                {item.title}
              </h3>
              
              <div className="flex gap-2">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] text-gray-300 border border-gray-600 px-2 py-0.5 rounded backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCases;
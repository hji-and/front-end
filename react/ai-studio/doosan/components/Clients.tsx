import React from 'react';
import { CLIENT_LOGOS } from '../constants';

const Clients: React.FC = () => {
  return (
    <section className="relative py-24 bg-doosan-dark overflow-hidden">
      {/* Background Globe Effect */}
      <div className="absolute bottom-[-50%] left-0 right-0 h-full w-full pointer-events-none">
          <div className="w-[120%] h-[200%] ml-[-10%] rounded-[50%] bg-gradient-to-b from-blue-900/20 to-transparent blur-3xl"></div>
          <img src="https://picsum.photos/id/452/1920/600" className="absolute bottom-0 w-full h-full object-cover opacity-20 mix-blend-overlay" alt="Globe texture" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <p className="text-sm font-medium text-gray-400 mb-2">Our Clients</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            전 세계 50개국 리딩 기업들이<br />
            두산 로봇 도입으로 생산성을 높이고,<br />
            비용을 절감했습니다.
          </h2>
        </div>

        {/* Logo Scroll */}
        <div className="flex flex-wrap justify-between items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {CLIENT_LOGOS.map((logo, idx) => (
            <span key={idx} className="text-white font-bold text-xl md:text-2xl font-serif italic tracking-wider">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
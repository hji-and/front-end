import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/id/1015/1920/1080" 
          alt="Robot Arm Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40"></div>
      </div>

      {/* Decorative Text Behind */}
      <div className="absolute top-1/3 left-0 right-0 text-center pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] font-bold text-white/5 whitespace-nowrap leading-none tracking-tighter">
          PAYLOAD
        </span>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10 pt-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
          AI-Powered Robot Solutions <br className="hidden md:block"/> for a Better Life
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl font-light">
          Innovation in every motion, revolutionizing the way we work
        </p>

        <a href="#products" className="group flex items-center gap-2 bg-transparent border border-white/30 hover:bg-white hover:text-black text-white px-8 py-3 rounded-full transition-all duration-300">
          <span className="text-sm font-medium">두산 로봇과 함께 상상을 실현해 보세요</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
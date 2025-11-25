import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeBar } from './components/MarqueeBar';
import { ScrollAnimationSection } from './components/ScrollAnimationSection';
import { ProductGrid } from './components/ProductGrid';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <MarqueeBar />
        <ScrollAnimationSection />
        <ProductGrid />
        
        {/* About Section Placeholder */}
        <section id="about" className="py-24 bg-stone-50 text-center px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light mb-8 tracking-wide">THE PHILOSOPHY</h2>
            <p className="text-gray-600 leading-loose font-light text-lg">
              We believe in the beauty of simplicity. By stripping away the unnecessary, 
              we focus on what truly matters: quality materials, thoughtful design, 
              and the serenity of a balanced space.
            </p>
          </div>
        </section>

        {/* Journal Section Placeholder */}
        <section id="journal" className="py-20 max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1">
                 <img src="https://picsum.photos/800/600?grayscale" alt="Journal" className="w-full h-auto object-cover" />
              </div>
              <div className="flex-1 space-y-6">
                 <span className="text-xs font-bold text-gray-400 tracking-widest">LATEST STORY</span>
                 <h2 className="text-4xl font-light leading-tight">Designing for <br/>Mental Clarity</h2>
                 <p className="text-gray-600 font-light">
                    How your environment shapes your thoughts and why decluttering your physical space can lead to a clearer mind.
                 </p>
                 <button className="text-sm font-bold border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">READ MORE</button>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
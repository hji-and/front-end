import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MarqueeBar } from "./components/MarqueeBar";
import { ScrollAnimationSection } from "./components/ScrollAnimationSection";
import { ProductGrid } from "./components/ProductGrid";
import { Footer } from "./components/Footer";
import coffee from "./components/img/coffebean.png";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main
        className="flex-grow"
        style={{
          background: "linear-gradient(to bottom, #FAFAFA, #fafaf9)",
        }}
      >
        <Hero />
        <MarqueeBar />
        <ScrollAnimationSection />
        <ProductGrid />

        {/* About Section Placeholder */}
        <section
          id="about"
          className="py-24 bg-gradient-to-r from-gray-50 to-stone-50 text-center px-6"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light mb-8 tracking-wide">
              최고의 커피는 최상의 원두로부터
            </h2>
            <p className="text-gray-600 leading-loose font-light text-lg">
              아라비카 원두는 고품질, 그 이상의 의미를 갖습니다. 최상의 품질을
              위한 최선의 노력들이 모든 단계에서 이뤄집니다. 과연 카페는 최상의
              원두를 위해 어떤 노력을 하고 있을까요?
            </p>
          </div>
        </section>

        {/* Journal Section Placeholder */}
        <section id="journal" className="py-20 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <img
                src={coffee}
                alt="Journal"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex-1 space-y-6">
              <span className="text-xs font-bold text-gray-400 tracking-widest">
                LATEST STORY
              </span>
              <h2 className="text-4xl font-light leading-tight">
                Roast <br />
                Spectrum
              </h2>
              <p className="text-gray-600 font-light">
                원두는 온도와 시간의 균형으로 본연의 향과 풍미가 최상의 수준으로
                발현됩니다. 끊임없는 연구와 마스터 정신이 깃든 세 가지 로스팅
                기법을 보유하고 있습니다. 당신의 취향의 맞는 로스트를 찾아
                커피의 풍미를 더 풍부하게 즐겨보세요.
              </p>
              <button className="text-sm font-bold border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
                READ MORE
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;

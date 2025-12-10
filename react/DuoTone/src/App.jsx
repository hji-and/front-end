import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SubMenu from './components/SubMenu';
import Section0 from './components/Section0';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import BandBanner from './components/BandBanner';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Section8 from './components/Section8';
import Section9 from './components/Section9';
import LineBanner from './components/LineBanner';
import Slick1 from './components/Slick1';
import Section10 from './components/Section10';
import Section11 from './components/Section11';
import Section12 from './components/Section12';
import Section13 from './components/Section13';
import Section14 from './components/Section14';
import Section15 from './components/Section15';
import Section16 from './components/Section16';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { useScrollAnimations } from './hooks/useScrollAnimations';
import './css/style.css';
import './css/slick.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoState, setLogoState] = useState('on');
  const { scrollY, windowHeight } = useScrollAnimation();
  
  // 모든 스크롤 애니메이션 적용
  useScrollAnimations(scrollY);

  useEffect(() => {
    if (typeof document === 'undefined' || typeof window === 'undefined') return;

    // Section0 opacity 조절
    const section0 = document.getElementById('section0');
    if (section0) {
      const section0Opacity = scrollY / 600;
      section0.style.opacity = Math.max(0, Math.min(1, 1 - section0Opacity));
    }

    // Section1 opacity 조절
    const section1 = document.getElementById('section1');
    if (section1) {
      const section0El = document.getElementById('section0');
      if (section0El) {
        const st0_o = parseFloat(window.getComputedStyle(section0El).opacity);
        section1.style.opacity = st0_o === 0 ? 1 : 0;
        section1.style.transition = 'opacity 0.6s';
      }
    }

    // 로고 상태 변경 로직
    const updateLogoState = () => {
      const header = document.getElementById('header');
      if (!header) return;

      const headerH = header.offsetHeight;
      const scrH = scrollY + headerH;

      const section3 = document.getElementById('section3');
      const section7 = document.getElementById('section7');
      const section10 = document.getElementById('section10');

      if (section3) {
        const st3_off = section3.offsetTop;
        const st3_h = section3.querySelector('.st3_bg')?.offsetHeight || 0;
        const result_st3 = st3_off + st3_h;

        if (scrH > st3_off && scrH < result_st3) {
          setLogoState('off');
          return;
        }
      }

      if (section7) {
        const st7_off = section7.offsetTop;
        const st7_h = section7.offsetHeight;
        const result_st7 = st7_off + st7_h;

        if (scrH > st7_off && scrH < result_st7) {
          setLogoState('off');
          return;
        }
      }

      if (section10) {
        const st10_off = section10.offsetTop;
        const st10_h = section10.offsetHeight;
        const st11_h = document.getElementById('section11')?.offsetHeight || 0;
        const st12_h = document.getElementById('section12')?.offsetHeight || 0;
        const st13_h = document.getElementById('section13')?.offsetHeight || 0;
        const result_st_all = st10_off + st10_h + st11_h + st12_h + st13_h - 40;

        if (scrH > st10_off && scrH < result_st_all) {
          setLogoState('off');
          return;
        }
      }

      const section15 = document.getElementById('section15');
      if (section15) {
        const st15_off = section15.offsetTop;
        const st15_img_h = section15.querySelector('.st15_cover img')?.offsetHeight || 0;
        const result_st15 = st15_off + st15_img_h;

        if (scrH > st15_off && scrH < result_st15) {
          setLogoState('off');
          return;
        }
      }

      setLogoState('on');
    };

    updateLogoState();
  }, [scrollY]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isMenuOpen]);

  return (
    <div className="App">
      <Header 
        isMenuOpen={isMenuOpen} 
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        logoState={logoState}
      />
      <SubMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Section0 />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <BandBanner />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <LineBanner />
      <Slick1 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Section13 />
      <Section14 />
      <Section15 />
      <Section16 />
    </div>
  );
}

export default App;

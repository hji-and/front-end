import { useEffect, useState } from 'react';

export function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      const winH = window.innerHeight;
      setWindowHeight(winH);
      document.querySelectorAll('.win_h').forEach(el => {
        el.style.height = `${winH}px`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // 초기 설정
    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { scrollY, windowHeight };
}

export function useElementOffset(elementRef) {
  const [offset, setOffset] = useState({ top: 0, height: 0 });

  useEffect(() => {
    const updateOffset = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        setOffset({
          top: rect.top + window.scrollY,
          height: rect.height
        });
      }
    };

    updateOffset();
    window.addEventListener('scroll', updateOffset);
    window.addEventListener('resize', updateOffset);

    return () => {
      window.removeEventListener('scroll', updateOffset);
      window.removeEventListener('resize', updateOffset);
    };
  }, [elementRef]);

  return offset;
}


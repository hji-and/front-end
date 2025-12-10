import React, { useEffect, useRef } from 'react';
import logoOn from '../images/duotone_logo.png';
import logoOff from '../images/duotone_logo_off.png';

function Header({ isMenuOpen, onMenuToggle, logoState }) {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const line4Ref = useRef(null);
  const line5Ref = useRef(null);

  useEffect(() => {
    if (isMenuOpen) {
      // 메뉴 열기 애니메이션
      if (line1Ref.current) {
        line1Ref.current.style.width = '0';
        line1Ref.current.style.backgroundColor = '#fff';
        line1Ref.current.style.transition = 'width 0.2s, background-color 0.2s';
      }
      setTimeout(() => {
        if (line2Ref.current) {
          line2Ref.current.style.width = '0';
          line2Ref.current.style.backgroundColor = '#fff';
          line2Ref.current.style.transition = 'width 0.2s, background-color 0.2s';
        }
      }, 200);
      setTimeout(() => {
        if (line3Ref.current) {
          line3Ref.current.style.width = '0';
          line3Ref.current.style.backgroundColor = '#fff';
          line3Ref.current.style.transition = 'width 0.2s, background-color 0.2s';
        }
      }, 400);
      setTimeout(() => {
        if (line4Ref.current) {
          line4Ref.current.style.width = '30px';
          line4Ref.current.style.transition = 'width 0.2s';
        }
      }, 600);
      setTimeout(() => {
        if (line5Ref.current) {
          line5Ref.current.style.width = '30px';
          line5Ref.current.style.transition = 'width 0.2s';
        }
      }, 800);
    } else {
      // 메뉴 닫기 애니메이션
      if (line5Ref.current) {
        line5Ref.current.style.width = '0';
        line5Ref.current.style.transition = 'width 0.2s';
      }
      setTimeout(() => {
        if (line4Ref.current) {
          line4Ref.current.style.width = '0';
          line4Ref.current.style.transition = 'width 0.2s';
        }
      }, 200);
      setTimeout(() => {
        if (line3Ref.current) {
          line3Ref.current.style.width = '30px';
          line3Ref.current.style.backgroundColor = '#555';
          line3Ref.current.style.transition = 'width 0.2s, background-color 0.2s';
        }
      }, 400);
      setTimeout(() => {
        if (line2Ref.current) {
          line2Ref.current.style.width = '30px';
          line2Ref.current.style.backgroundColor = '#555';
          line2Ref.current.style.transition = 'width 0.2s, background-color 0.2s';
        }
      }, 600);
      setTimeout(() => {
        if (line1Ref.current) {
          line1Ref.current.style.width = '30px';
          line1Ref.current.style.backgroundColor = '#555';
          line1Ref.current.style.transition = 'width 0.2s, background-color 0.2s';
        }
      }, 800);
    }
  }, [isMenuOpen]);

  return (
    <div id="header">
      <h1 className="logo">
        <a href="#" className={logoState === 'on' ? 'on' : ''}>
          <img src={logoOn} alt="Duotone Logo" />
        </a>
        <a href="#" className={logoState === 'off' ? 'off' : ''}>
          <img src={logoOff} alt="Duotone Logo" />
        </a>
      </h1>
      <div className="ham">
        <a href="#" onClick={(e) => { e.preventDefault(); onMenuToggle(); }}>
          <div className="line1" ref={line1Ref}></div>
          <div className="line2" ref={line2Ref}></div>
          <div className="line3" ref={line3Ref}></div>
          <div className="line4" ref={line4Ref}></div>
          <div className="line5" ref={line5Ref}></div>
        </a>
      </div>
    </div>
  );
}

export default Header;


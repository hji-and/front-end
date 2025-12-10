import { useEffect } from 'react';

export function useScrollAnimations(scrollY) {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const handleScrollAnimations = () => {
      const scr = scrollY;

      // Section2 애니메이션
      const section2 = document.getElementById('section2');
      if (section2) {
        const st2_off = section2.offsetTop - 300;
        const leftEl = section2.querySelector('.st2_cover ul li.left');
        const rightEl = section2.querySelector('.st2_cover ul li.right');
        
        if (scr > st2_off) {
          if (leftEl) {
            leftEl.style.opacity = '1';
            leftEl.style.transition = 'opacity 0.4s';
          }
          if (rightEl) {
            rightEl.style.opacity = '1';
            rightEl.style.top = '0';
            rightEl.style.transition = 'opacity 0.4s, top 0.4s';
          }
        } else {
          if (leftEl) {
            leftEl.style.opacity = '0';
            leftEl.style.transition = 'opacity 0.4s';
          }
          if (rightEl) {
            rightEl.style.opacity = '0';
            rightEl.style.top = '20%';
            rightEl.style.transition = 'opacity 0.4s, top 0.4s';
          }
        }
      }

      // Section3 애니메이션
      const section3 = document.getElementById('section3');
      if (section3) {
        const st3_off = section3.offsetTop - 500;
        const textBox = section3.querySelector('.text_box');
        const hideBox = section3.querySelector('.hide_box');
        
        if (scr > st3_off) {
          if (textBox) textBox.classList.add('on');
          if (hideBox) hideBox.classList.add('on');
        } else {
          if (textBox) textBox.classList.remove('on');
          if (hideBox) hideBox.classList.remove('on');
        }
      }

      // Section4 애니메이션
      const section4 = document.getElementById('section4');
      if (section4) {
        const st4_off = section4.offsetTop;
        const chapter2 = section4.querySelector('.chapter2');
        const mainTxt = section4.querySelector('.main_txt');
        
        if (scr > st4_off - 500) {
          if (chapter2) {
            chapter2.style.opacity = '1';
            chapter2.style.transition = 'opacity 0.5s';
          }
          if (mainTxt) {
            mainTxt.style.opacity = '1';
            mainTxt.style.transition = 'opacity 0.5s';
          }
        } else {
          if (chapter2) {
            chapter2.style.opacity = '0';
            chapter2.style.transition = 'opacity 0.5s';
          }
          if (mainTxt) {
            mainTxt.style.opacity = '0';
            mainTxt.style.transition = 'opacity 0.5s';
          }
        }

        // Section4 내부 아이템들
        const covers = section4.querySelectorAll('.st4_cover > ul > li.cover');
        covers.forEach((cover) => {
          const off = cover.offsetTop - 500;
          const text = cover.querySelector('.text');
          const svg = cover.querySelector('.svg');
          
          if (scr > off) {
            if (text) {
              text.style.top = '50%';
              text.style.opacity = '1';
              text.style.transition = 'opacity 0.5s, top 0.5s';
            }
            if (svg) {
              svg.style.opacity = '1';
              svg.style.transition = 'opacity 0.5s';
            }
          } else {
            if (text) {
              text.style.top = '60%';
              text.style.opacity = '0';
              text.style.transition = 'opacity 0.5s, top 0.5s';
            }
            if (svg) {
              svg.style.opacity = '0';
              svg.style.transition = 'opacity 0.5s';
            }
          }
        });
      }

      // Section5 애니메이션
      const section5 = document.getElementById('section5');
      if (section5) {
        const st5_off = section5.offsetTop;
        const img = section5.querySelector('.st5_cover img');
        const text = section5.querySelector('.st5_text');
        
        if (scr > st5_off - 300) {
          if (img) {
            img.style.opacity = '1';
            img.style.transition = 'opacity 0.5s';
          }
          if (text) {
            setTimeout(() => {
              if (text) {
                text.style.opacity = '1';
                text.style.top = '50%';
                text.style.transition = 'opacity 0.4s, top 0.4s';
              }
            }, 500);
          }
        } else {
          if (img) {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s';
          }
          if (text) {
            text.style.opacity = '0';
            text.style.top = '60%';
            text.style.transition = 'opacity 0.4s, top 0.4s';
          }
        }
      }

      // Section6 애니메이션
      const section6 = document.getElementById('section6');
      if (section6) {
        const st6_off = section6.offsetTop;
        const chapter3 = section6.querySelector('.chapter3');
        const mainTxt = section6.querySelector('.main_txt');
        const st6Txt = section6.querySelector('.st6_txt');
        
        if (scr > st6_off - 400) {
          if (chapter3) {
            chapter3.style.opacity = '1';
            chapter3.style.transition = 'opacity 0.5s';
          }
          if (mainTxt) {
            mainTxt.style.opacity = '1';
            mainTxt.style.transition = 'opacity 0.5s';
          }
          if (st6Txt) {
            st6Txt.style.top = '0';
            st6Txt.style.opacity = '1';
            st6Txt.style.transition = 'opacity 0.5s, top 0.5s';
          }
        } else {
          if (chapter3) {
            chapter3.style.opacity = '0';
            chapter3.style.transition = 'opacity 0.5s';
          }
          if (mainTxt) {
            mainTxt.style.opacity = '0';
            mainTxt.style.transition = 'opacity 0.5s';
          }
          if (st6Txt) {
            st6Txt.style.top = '10%';
            st6Txt.style.opacity = '0';
            st6Txt.style.transition = 'opacity 0.5s, top 0.5s';
          }
        }

        const st6_txt = section6.querySelector('.st6_cover .st6_txt');
        if (st6_txt) {
          const st6_txt_off = st6_txt.offsetTop;
          const items = section6.querySelectorAll('.st6_cover ul li');
          if (scr > st6_txt_off - 200) {
            items.forEach(item => item.classList.add('on'));
          } else {
            items.forEach(item => item.classList.remove('on'));
          }
        }
      }

      // Section7 애니메이션
      const section7 = document.getElementById('section7');
      if (section7) {
        const st7_off = section7.offsetTop;
        const st7_cover = section7.querySelector('.st7_cover');
        const st7_txt = section7.querySelector('.st7_txt');
        const st8_off = document.getElementById('section8')?.offsetTop || 0;
        
        if (scr > st7_off - 300 && scr < st8_off - 600) {
          if (st7_cover) {
            st7_cover.style.display = 'block';
            st7_cover.style.transition = 'opacity 1s';
            st7_cover.style.opacity = '1';
          }
        } else {
          if (st7_cover) {
            st7_cover.style.opacity = '0';
            setTimeout(() => {
              if (st7_cover && st7_cover.style.opacity === '0') {
                st7_cover.style.display = 'none';
              }
            }, 1000);
          }
        }

        const st7_off2 = st7_off + 500;
        if (scr > st7_off2) {
          if (st7_txt) {
            st7_txt.style.display = 'block';
            st7_txt.style.transition = 'opacity 1s';
            st7_txt.style.opacity = '1';
          }
        } else {
          if (st7_txt) {
            st7_txt.style.opacity = '0';
            setTimeout(() => {
              if (st7_txt && st7_txt.style.opacity === '0') {
                st7_txt.style.display = 'none';
              }
            }, 1000);
          }
        }
      }

      // Section8 애니메이션
      const section8 = document.getElementById('section8');
      if (section8) {
        const st8_off = section8.offsetTop;
        const chapter4 = section8.querySelector('.chapter4');
        const mainTxt = section8.querySelector('.main_txt');
        const st8Txt = section8.querySelector('.st8_txt');
        
        if (scr > st8_off - 600) {
          if (chapter4) {
            chapter4.style.opacity = '1';
            chapter4.style.transition = 'opacity 0.5s';
          }
          if (mainTxt) {
            mainTxt.style.opacity = '1';
            mainTxt.style.transition = 'opacity 0.5s';
          }
        } else {
          if (chapter4) {
            chapter4.style.opacity = '0';
            chapter4.style.transition = 'opacity 0.5s';
          }
          if (mainTxt) {
            mainTxt.style.opacity = '0';
            mainTxt.style.transition = 'opacity 0.5s';
          }
        }

        if (scr > st8_off + 100) {
          if (st8Txt) {
            st8Txt.style.opacity = '1';
            st8Txt.style.top = '0';
            st8Txt.style.transition = 'opacity 0.5s, top 0.5s';
          }
        } else {
          if (st8Txt) {
            st8Txt.style.opacity = '0';
            st8Txt.style.top = '10%';
            st8Txt.style.transition = 'opacity 0.5s, top 0.5s';
          }
        }

        const items = section8.querySelectorAll('.st8_right ul li');
        items.forEach((item) => {
          const st8_li = item.offsetTop;
          if (scr > st8_li - 400) {
            item.style.opacity = '1';
            item.style.transition = 'opacity 0.5s';
          } else {
            item.style.opacity = '0';
            item.style.transition = 'opacity 0.5s';
          }
        });
      }

      // Section9 애니메이션
      const section9 = document.getElementById('section9');
      if (section9) {
        const st9_off = section9.offsetTop;
        const chapter5 = section9.querySelector('.chapter5');
        const mainTxt = section9.querySelector('.main_txt');
        const st9Txt = section9.querySelector('.st9_txt');
        
        if (scr > st9_off - 400) {
          if (chapter5) {
            chapter5.style.opacity = '1';
            chapter5.style.transition = 'opacity 0.5s';
            setTimeout(() => {
              if (mainTxt) {
                mainTxt.style.opacity = '1';
                mainTxt.style.transition = 'opacity 0.5s';
              }
            }, 500);
          }
        } else {
          if (chapter5) {
            chapter5.style.opacity = '0';
            chapter5.style.transition = 'opacity 0.5s';
          }
          if (mainTxt) {
            mainTxt.style.opacity = '0';
            mainTxt.style.transition = 'opacity 0.5s';
          }
        }

        if (scr > st9_off - 300) {
          if (st9Txt) {
            st9Txt.style.opacity = '1';
            st9Txt.style.top = '0';
            st9Txt.style.transition = 'opacity 0.5s, top 0.5s';
          }
        } else {
          if (st9Txt) {
            st9Txt.style.opacity = '0';
            st9Txt.style.top = '5%';
            st9Txt.style.transition = 'opacity 0.5s, top 0.5s';
          }
        }
      }

      // Section10-12 애니메이션
      const section10 = document.getElementById('section10');
      if (section10) {
        const st10_off = section10.offsetTop;
        if (scr > st10_off) {
          section10.classList.add('on');
        } else {
          section10.classList.remove('on');
        }

        const st10_cover = section10.querySelector('.st10_cover');
        if (st10_cover) {
          const st10_cover_off = st10_cover.offsetTop;
          const left = section10.querySelector('.st10_left');
          const right = section10.querySelector('.st10_right');
          
          if (scr > st10_cover_off - 200) {
            if (left) left.classList.add('on');
            if (right) right.classList.add('on');
          } else {
            if (left) left.classList.remove('on');
            if (right) right.classList.remove('on');
          }
        }
      }

      const section11 = document.getElementById('section11');
      if (section11) {
        const st11_off = section11.offsetTop;
        if (scr > st11_off) {
          section11.classList.add('on');
        } else {
          section11.classList.remove('on');
        }

        const st11_cover = section11.querySelector('.st11_cover');
        if (st11_cover) {
          const st11_cover_off = st11_cover.offsetTop;
          const left = section11.querySelector('.st11_left');
          const right = section11.querySelector('.st11_right');
          
          if (scr > st11_cover_off - 300) {
            if (left) left.classList.add('on');
            if (right) right.classList.add('on');
          } else {
            if (left) left.classList.remove('on');
            if (right) right.classList.remove('on');
          }
        }
      }

      const section12 = document.getElementById('section12');
      if (section12) {
        const st12_off = section12.offsetTop;
        if (scr > st12_off) {
          section12.classList.add('on');
        } else {
          section12.classList.remove('on');
        }

        if (scr > st12_off + 300) {
          const left = section12.querySelector('.st12_left');
          const right = section12.querySelector('.st12_right');
          if (left) left.classList.add('on');
          if (right) right.classList.add('on');
        } else {
          const left = section12.querySelector('.st12_left');
          const right = section12.querySelector('.st12_right');
          if (left) left.classList.remove('on');
          if (right) right.classList.remove('on');
        }
      }

      // Section14 애니메이션
      const section14 = document.getElementById('section14');
      if (section14) {
        const st14_off = section14.offsetTop;
        const chapter6 = section14.querySelector('.chapter6');
        const st14Txt = section14.querySelector('.st14_txt');
        
        if (scr > st14_off - 600) {
          if (chapter6) {
            chapter6.style.opacity = '1';
            chapter6.style.transition = 'opacity 0.5s';
          }
          if (st14Txt) {
            st14Txt.style.opacity = '1';
            st14Txt.style.top = '0';
            st14Txt.style.transition = 'opacity 0.5s, top 0.5s';
          }
        } else {
          if (chapter6) {
            chapter6.style.opacity = '0';
            chapter6.style.transition = 'opacity 0.5s';
          }
          if (st14Txt) {
            st14Txt.style.opacity = '0';
            st14Txt.style.top = '5%';
            st14Txt.style.transition = 'opacity 0.5s, top 0.5s';
          }
        }
      }

      // Section15 애니메이션
      const section15 = document.getElementById('section15');
      if (section15) {
        const st15_off = section15.offsetTop;
        if (scr > st15_off - 400) {
          section15.classList.add('on');
          const st15Txt = section15.querySelector('.st15_txt');
          const st15Hidebox = section15.querySelector('.st15_hidebox');
          if (st15Txt) st15Txt.classList.add('on');
          if (st15Hidebox) st15Hidebox.classList.add('on');
        }
      }

      // Section16 애니메이션
      const section16 = document.getElementById('section16');
      if (section16) {
        const st16_off = section16.offsetTop;
        const leftFi = section16.querySelector('.left_fi');
        const rightFi = section16.querySelector('.right_fi');
        
        if (scr > st16_off - 200) {
          if (leftFi) {
            leftFi.style.left = '50%';
            leftFi.style.top = '55%';
            leftFi.style.transition = 'left 1s, top 1s';
          }
          if (rightFi) {
            rightFi.style.left = '38%';
            rightFi.style.top = '55%';
            rightFi.style.transition = 'left 1s, top 1s';
          }
        } else {
          if (leftFi) {
            leftFi.style.left = '45%';
            leftFi.style.top = '60%';
            leftFi.style.transition = 'left 1s, top 1s';
          }
          if (rightFi) {
            rightFi.style.left = '40%';
            rightFi.style.top = '50%';
            rightFi.style.transition = 'left 1s, top 1s';
          }
        }

        const st16_cover = section16.querySelector('.st16_cover');
        if (st16_cover) {
          const st16_cover_off = st16_cover.offsetTop;
          const st16Txt = section16.querySelector('.st16_txt');
          
          if (scr > st16_cover_off - 600) {
            if (st16Txt) {
              st16Txt.style.opacity = '1';
              st16Txt.style.top = '0';
              st16Txt.style.transition = 'opacity 0.5s, top 0.5s';
            }
          } else {
            if (st16Txt) {
              st16Txt.style.opacity = '0';
              st16Txt.style.top = '5%';
              st16Txt.style.transition = 'opacity 0.5s, top 0.5s';
            }
          }
        }
      }
    };

    handleScrollAnimations();
  }, [scrollY]);
}


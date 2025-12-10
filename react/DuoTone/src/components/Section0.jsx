import React, { useEffect, useState } from 'react';
import topVisual from '../images/top-visual.69f52cd7.jpg';
import text1 from '../images/duotone-text-1-d.b166af26.png';
import text2 from '../images/duotone-text-2-u.8aede628.png';
import text3 from '../images/duotone-text-3-o.57d60f55.png';
import text4 from '../images/duotone-text-4-t.6fab23af.png';
import text5 from '../images/duotone-text-5-o.1d38b4a8.png';
import text6 from '../images/duotone-text-6-n.f9ef26d9.png';
import text7 from '../images/duotone-text-7-e.b7152df6.png';

function Section0() {
  const [opacities, setOpacities] = useState({
    image: 0,
    text1: 0,
    text2: 0,
    text3: 0.6,
    text4: 0.6,
    text5: 0,
    text6: 0,
    text7: 0
  });

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setOpacities(prev => ({ ...prev, image: 1 }));
    }, 100);

    const timer2 = setTimeout(() => {
      setOpacities(prev => ({ ...prev, text2: 1 }));
    }, 700);

    const timer3 = setTimeout(() => {
      setOpacities(prev => ({ ...prev, text1: 1, text5: 1 }));
    }, 1100);

    const timer4 = setTimeout(() => {
      setOpacities(prev => ({ ...prev, text7: 1 }));
    }, 1600);

    const timer5 = setTimeout(() => {
      setOpacities(prev => ({ ...prev, text3: 0.6 }));
    }, 2200);

    const timer6 = setTimeout(() => {
      setOpacities(prev => ({ ...prev, text6: 1 }));
    }, 2300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, []);

  return (
    <div id="section0" className="win_h">
      <div className="st0_cover">
        <img src={topVisual} alt="" style={{ opacity: opacities.image }} />
        <div className="text_animation">
          <ul className="cf">
            <li className="text1" style={{ opacity: opacities.text1 }}>
              <img src={text1} alt=""/>
            </li>
            <li className="text2" style={{ opacity: opacities.text2 }}>
              <img src={text2} alt=""/>
            </li>
            <li className="text3" style={{ opacity: opacities.text3 }}>
              <img src={text3} alt=""/>
            </li>
            <li className="text4" style={{ opacity: opacities.text4 }}>
              <img src={text4} alt=""/>
            </li>
            <li className="text5" style={{ opacity: opacities.text5 }}>
              <img src={text5} alt=""/>
            </li>
            <li className="text6" style={{ opacity: opacities.text6 }}>
              <img src={text6} alt=""/>
            </li>
            <li className="text7" style={{ opacity: opacities.text7 }}>
              <img src={text7} alt=""/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Section0;


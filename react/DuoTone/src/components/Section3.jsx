import React from 'react';
import figureImg from '../images/figure-forthenextwave.5c1729a7.jpg';

function Section3() {
  return (
    <div id="section3" className="win_h">
      <div className="st3_bg">
        <img src={figureImg} alt=""/>
        <div className="text_box">
          <p className="box1 tbox">for the</p>
          <p className="box2 tbox">next</p>
          <p className="box3 tbox">wave</p>
        </div>
      </div>
      <div className="hide_box">
        <p className="hide_txt">for the</p>
      </div>
    </div>
  );
}

export default Section3;


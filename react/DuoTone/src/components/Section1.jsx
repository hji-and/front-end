import React from 'react';

function Section1() {
  return (
    <div id="section1" className="win_h" style={{ opacity: 0 }}>
      <div className="st1_cover">
        <p className="main_txt">
          Duotone is a product design agency,
          specialized in also creating the visionary strategy,
          process and design system for the products.
        </p>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="48" viewBox="0 0 24 48" className="down">
            <g fill="none" fillRule="evenodd">
              <path fill="#FFF" d="M0 0H1600V25368H0z" transform="translate(-788 -1588)"/>
              <path fill="#FFF" d="M0 -23H1600V25345H0z" transform="translate(-788 -1588)"/>
              <g stroke="#FF6565" strokeWidth="2">
                <path strokeLinecap="square" d="M8.5 0.5L8.5 34.5" transform="translate(-788 -1588) translate(791 1595)"/>
                <path d="M0.753 28L8.753 36 16.753 28" transform="translate(-788 -1588) translate(791 1595)"/>
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Section1;


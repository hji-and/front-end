import React from 'react';

function BandBanner() {
  return (
    <div id="band_banner">
      <div className="band_cover">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="2260" height="360" viewBox="0 0 2260 360">
          <defs>
            <path id="prefix__a" d="M0 0H2560V360H0z"/>
          </defs>
          <g fill="none" fillRule="evenodd" transform="translate(-300)">
            <mask id="prefix__b" fill="#fff">
              <use xlinkHref="#prefix__a"/>
            </mask>
            <circle cx="1520" cy="180" r="180" fill="#FF6565" mask="url(#prefix__b)"/>
            <circle cx="2640" cy="180" r="180" fill="#FF6565" mask="url(#prefix__b)"/>
            <circle cx="1000" cy="180" r="20" fill="#FF6565" mask="url(#prefix__b)"/>
            <circle cx="2200" cy="180" r="20" fill="#000046" mask="url(#prefix__b)" opacity=".8"/>
            <circle cx="1760" cy="180" r="180" fill="#000046" mask="url(#prefix__b)" opacity=".8"/>
            <circle cx="480" cy="180" r="180" fill="#000046" mask="url(#prefix__b)" opacity=".8"/>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default BandBanner;


import React from 'react';
import img1 from '../images/20200319225233.jpg';
import img2 from '../images/20200320001008.jpg';
import img3 from '../images/20200320001103.jpg';
import img4 from '../images/20200320001152.jpg';
import img5 from '../images/20200320001231.jpg';
import img6 from '../images/20200320001334.jpg';
import img7 from '../images/20200320001537.jpg';
import img8 from '../images/20200320001904.jpg';

function Section13() {
  const projects = [
    { img: img1, logo: 'logo1' },
    { img: img2, logo: 'logo2' },
    { img: img3, logo: 'logo3' },
    { img: img4, logo: 'logo4' },
    { img: img5, logo: 'logo5' },
    { img: img6, logo: 'logo6' },
    { img: img7, logo: 'logo7' },
    { img: img8, logo: 'logo8' }
  ];

  return (
    <div id="section13">
      <ul className="cf">
        {projects.map((project, index) => (
          <li key={index}>
            <img src={project.img} alt=""/>
            <div className="logo_cover">
              {/* Logo SVGs would go here */}
            </div>
          </li>
        ))}
      </ul>
      <div className="all_pj">
        <a href="#">
          All Project<div className="plus"></div>
        </a>
      </div>
    </div>
  );
}

export default Section13;


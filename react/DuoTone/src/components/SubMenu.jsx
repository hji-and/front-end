import React, { useEffect, useRef } from 'react';
import salmonImg from '../images/gnb-salmon.d0464d65.png';

function SubMenu({ isOpen, onClose }) {
  const subMenuRef = useRef(null);
  const subRightRef = useRef(null);
  const subLeftRef = useRef(null);
  const centerBgRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // 메뉴 열기 애니메이션
      if (subMenuRef.current) {
        subMenuRef.current.style.display = 'block';
        setTimeout(() => {
          if (subRightRef.current) {
            subRightRef.current.style.display = 'block';
          }
        }, 600);
        setTimeout(() => {
          if (subLeftRef.current) {
            subLeftRef.current.style.left = '0';
            subLeftRef.current.style.opacity = '1';
            subLeftRef.current.style.transition = 'left 0.4s, opacity 0.4s';
          }
        }, 1000);
        setTimeout(() => {
          if (centerBgRef.current) {
            centerBgRef.current.style.top = '50%';
            centerBgRef.current.style.opacity = '1';
            centerBgRef.current.style.transition = 'top 0.4s, opacity 0.4s';
          }
        }, 1400);
      }
    } else {
      // 메뉴 닫기 애니메이션
      if (subLeftRef.current) {
        subLeftRef.current.style.left = '-10%';
        subLeftRef.current.style.opacity = '0';
        subLeftRef.current.style.transition = 'left 0.1s, opacity 0.1s';
      }
      if (centerBgRef.current) {
        centerBgRef.current.style.top = '60%';
        centerBgRef.current.style.opacity = '0';
        centerBgRef.current.style.transition = 'top 0.4s, opacity 0.4s';
      }
      if (subRightRef.current) {
        subRightRef.current.style.display = 'none';
      }
      setTimeout(() => {
        if (subMenuRef.current) {
          subMenuRef.current.style.display = 'none';
        }
      }, 600);
    }
  }, [isOpen]);

  if (!isOpen && subMenuRef.current?.style.display === 'none') return null;

  return (
    <div id="sub_menu" ref={subMenuRef} style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="sub_cover">
        <div className="sub_right" ref={subRightRef} style={{ display: 'none' }}>
          <ul>
            <li><a href="#" data-hover="01">Intro</a></li>
            <li><a href="#" data-hover="02">Salmons</a></li>
            <li><a href="#" data-hover="03">Design</a></li>
            <li><a href="#" data-hover="04">Case Study</a></li>
            <li><a href="#" data-hover="05">Openpath</a></li>
            <li><a href="#" data-hover="06">Contact</a></li>
          </ul>
        </div>
        
        <div className="sub_left" ref={subLeftRef}>
          <ul className="sns_icon cf">
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                  <g fill="none" fillRule="evenodd">
                    <path d="M0 0H40V40H0z"/>
                    <path fill="#FFF" fillRule="nonzero" d="M32.45 6H7.55c-.412-.003-.808.16-1.099.451-.291.291-.454.687-.451 1.099v24.91c0 .41.164.803.455 1.092.29.29.685.45 1.095.448H21V23.16h-3.69v-4.23H21v-3.11c0-3.62 2.21-5.59 5.43-5.59 1.09-.008 2.178.048 3.26.17v3.78h-2.27c-1.76 0-2.1.83-2.1 2.05v2.7h4.19L29 23.16h-3.68V34h7.14c.41 0 .803-.164 1.092-.455.29-.29.45-.685.448-1.095V7.55c.003-.412-.16-.808-.451-1.099-.291-.291-.687-.454-1.099-.451z"/>
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                  <g fill="none" fillRule="evenodd">
                    <path d="M0 0H40V40H0z"/>
                    <path fill="#FFF" d="M19.852 3.852c9.164 0 16.592 7.429 16.592 16.592 0 9.164-7.428 16.593-16.592 16.593-9.164 0-16.593-7.429-16.593-16.593 0-9.163 7.429-16.592 16.593-16.592zM16.409 15H11v11h5.044c.568 0 1.095-.05 1.581-.149.486-.098.908-.283 1.264-.552.317-.233.58-.522.793-.864.333-.517.497-1.103.497-1.755 0-.631-.145-1.169-.436-1.611-.29-.445-.722-.767-1.292-.972.377-.188.66-.397.853-.626.346-.409.518-.947.518-1.62 0-.651-.17-1.212-.512-1.68-.571-.761-1.538-1.15-2.901-1.171zm8.609 2.568c-1.177 0-2.131.363-2.87 1.093-.737.728-1.104 1.774-1.104 3.141 0 1.458.409 2.509 1.223 3.157.817.645 1.758.97 2.826.97 1.293 0 2.3-.385 3.017-1.151.463-.482.721-.956.777-1.424h-2.14c-.125.23-.269.412-.432.54-.299.244-.687.362-1.164.362-.452 0-.838-.097-1.156-.296-.528-.317-.806-.87-.838-1.662h5.84c.01-.683-.014-1.205-.068-1.565-.1-.618-.31-1.16-.64-1.63-.364-.532-.826-.92-1.385-1.166-.56-.246-1.19-.369-1.886-.369zm-9.031 3.59c.48.004.855.066 1.12.186.475.212.712.607.712 1.179 0 .677-.245 1.134-.735 1.373-.272.13-.648.193-1.134.193h-2.367v-2.931zm9.03-1.891c.496 0 .911.142 1.244.426.335.283.521.698.56 1.245h-3.614c.076-.514.261-.92.56-1.22.295-.299.711-.451 1.25-.451zm-9.35-2.357c.536 0 .978.059 1.323.172.4.164.601.503.601 1.015 0 .463-.151.786-.454.967-.303.182-.697.273-1.184.273h-2.37V16.91zm11.589-1.454h-4.51v1.1h4.51v-1.1z"/>
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                  <g fill="none" fillRule="evenodd">
                    <path d="M0 0H40V40H0z"/>
                    <path fill="#FFF" fillRule="nonzero" d="M20 15c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5z"/>
                    <path fill="#FFF" fillRule="nonzero" d="M34.91 13.82c-.24-5.45-3.27-8.48-8.72-8.73C24.58 5 24.07 5 20 5s-4.58 0-6.18.09c-5.45.25-8.48 3.27-8.73 8.72C5 15.42 5 15.93 5 20s0 4.58.09 6.18c.25 5.45 3.27 8.48 8.72 8.73 1.61.09 2.12.09 6.19.09s4.58 0 6.19-.09c5.44-.25 8.47-3.27 8.72-8.73.09-1.6.09-2.11.09-6.18s0-4.58-.09-6.18zM20 27.7c-4.253 0-7.7-3.447-7.7-7.7s3.447-7.7 7.7-7.7 7.7 3.447 7.7 7.7-3.447 7.7-7.7 7.7zm8-13.91c-.994 0-1.8-.806-1.8-1.8s.806-1.8 1.8-1.8 1.8.806 1.8 1.8c.003.478-.186.938-.524 1.276-.338.338-.798.527-1.276.524z"/>
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                  <g fill="none" fillRule="evenodd">
                    <path fill="#FFF" d="M20.148 3.556c9.164 0 16.593 7.428 16.593 16.592 0 9.164-7.429 16.593-16.593 16.593S3.556 29.312 3.556 20.148 10.984 3.556 20.148 3.556zM16.871 13.63h-4.81v.276l1.55 1.847c.151.135.229.335.208.536v7.258c.046.262-.038.53-.224.72l-1.743 2.093v.276h4.942v-.276l-1.743-2.092c-.188-.191-.276-.457-.24-.72V17.27l4.338 9.366h.503l3.726-9.366v7.542c-.002.135-.018.18-.131.291l-1.34 1.288v.276h6.506v-.276l-1.293-1.257c-.114-.086-.171-.228-.147-.368V15.53c-.024-.14.033-.281.147-.368l1.324-1.256v-.276H23.86l-3.27 8.07-3.718-8.07z"/>
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                  <g fill="none" fillRule="evenodd">
                    <path fill="#FFF" d="M15.658 6.667L5.333 33.333h29.334L24.342 6.667h-8.684zm4.23 7.11l4.779 13.334H15.11l4.778-13.333z"/>
                  </g>
                </svg>
              </a>
            </li>
          </ul>
          
          <ul className="ko_en cf">
            <li className="on"><a href="#">KR</a></li>
            <li><a href="#">EN</a></li>
          </ul>
          <p><a href="#">프로젝트 의뢰</a></p>
          <p><a href="#">채용문의</a></p>
        </div>
      </div>
      <div className="center_bg" ref={centerBgRef}>
        <img src={salmonImg} alt=""/>
      </div>
    </div>
  );
}

export default SubMenu;


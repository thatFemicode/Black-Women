import React, { useEffect, useRef } from 'react';
import { BannerStyled } from './BannerStyled';
import SplitText from '../../utils/Split3.min';
import { bannerAnimation } from './animation';
import { OuterLayout } from '../../Styling/Layout/Layout';
import Sisters from './img/Sisters.png';
import Princess from './img/Princess.jpg';
const Banner = () => {
  let message = useRef(null);
  let banner = useRef(null);
  let containerRef = useRef(null);
  let imageRef = useRef(null);
  let containerRef2 = useRef(null);
  let imageRef2 = useRef(null);
  useEffect(() => {
    const spli = new SplitText(message, {
      type: 'words',
      linesClass: 'lineChildren',
    });
    let line2 = spli.words;
    bannerAnimation(
      banner,
      line2,
      containerRef,
      imageRef,
      containerRef2,
      imageRef2
    );
  });
  return (
    <BannerStyled ref={(el) => (banner = el)}>
      <OuterLayout>
        <div className="banner-main">
          <div className="banner-main-inner">
            <div className="ban1">
              <div className="main">
                <div ref={(el) => (containerRef = el)} className="image">
                  <div ref={(el) => (imageRef = el)} className="img">
                    <img src={Princess} alt="" />
                  </div>
                </div>
                <div className="text">
                  <p ref={(el) => (message = el)}>Black</p>
                </div>
              </div>
            </div>
            <div className="ban3">
              <p>Essence of</p>
            </div>
            <div className="ban2">
              <div className="main">
                <div className="text">
                  <p>Beauty</p>
                </div>
                <div className="image" ref={(el) => (containerRef2 = el)}>
                  <div ref={(el) => (imageRef2 = el)} className="img">
                    <img src={Sisters} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OuterLayout>
    </BannerStyled>
  );
};

export default Banner;

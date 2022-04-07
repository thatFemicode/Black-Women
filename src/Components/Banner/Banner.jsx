import React, { useEffect, useRef } from 'react';
import { BannerStyled } from './BannerStyled';
import SplitText from '../../utils/Split3.min';
import { bannerAnimation } from './animation';
import { OuterLayout } from '../../Styling/Layout/Layout';
import Cee from './img/CeeCee.jpg';
import Grass from './img/Grass.jpg';
import Sisters from './img/Sisters.png';
import Hair from './img/Hair.jpg';
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
            <div className="text">
              <p ref={(el) => (message = el)}>Black</p>
            </div>
            <div className="text2">
              <p ref={(el) => (message = el)}>Essence of</p>
            </div>
            <div className="text3">
              <p ref={(el) => (message = el)}>Beauty</p>
            </div>
            <div ref={(el) => (containerRef = el)} className="texting">
              <div ref={(el) => (imageRef = el)} className="img">
                <img src={Princess} alt="" />
              </div>
            </div>
            <div ref={(el) => (containerRef2 = el)} className="texting2">
              <div ref={(el) => (imageRef2 = el)} className="img">
                <img src={Sisters} alt="" />
              </div>
            </div>
          </div>
        </div>
      </OuterLayout>
    </BannerStyled>
  );
};

export default Banner;

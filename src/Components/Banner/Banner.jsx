import React, { useEffect, useRef } from 'react';
import { BannerStyled } from './BannerStyled';
import SplitText from '../../utils/Split3.min';
import { bannerAnimation } from './animation';
import Sisters from './img/Sisters.png';
import Princess from './img/Princess.jpg';
import CircularButton from '../Button/CircularButton';
import { Link } from 'react-router-dom';

const Banner = () => {
  let text1 = useRef(null);
  let text2 = useRef(null);
  let text3 = useRef(null);
  let banner = useRef(null);
  let button = useRef(null);
  let containerRef = useRef(null);
  let imageRef = useRef(null);
  let containerRef2 = useRef(null);
  let imageRef2 = useRef(null);
  useEffect(() => {
    const spli = new SplitText(text1, {
      type: 'words',
      linesClass: 'lineChildren',
    });
    const spli2 = new SplitText(text2, {
      type: 'words',
      linesClass: 'lineChildren',
    });
    const spli3 = new SplitText(text3, {
      type: 'words',
      linesClass: 'lineChildren',
    });
    let line1 = spli.words;
    let line2 = spli2.words;
    let line3 = spli3.words;
    bannerAnimation(
      banner,
      line1,
      containerRef,
      imageRef,
      line2,
      line3,
      containerRef2,
      imageRef2,
      button
    );
  });
  return (
    <BannerStyled ref={(el) => (banner = el)}>
      <div ref={(el) => (button = el)} className="banner-button">
        <Link to="/gallery">
          <CircularButton name={'Gallery'} />
        </Link>
      </div>
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
                <p ref={(el) => (text1 = el)}>Black</p>
              </div>
            </div>
          </div>
          <div className="ban3">
            <p ref={(el) => (text2 = el)}>Essence of</p>
          </div>
          <div className="ban2">
            <div className="main">
              <div className="text">
                <p ref={(el) => (text3 = el)}>Beauty</p>
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
    </BannerStyled>
  );
};

export default Banner;

import React, { useEffect, useRef } from 'react';
import slideData from './data';
import { PageGalleryStyled } from './PageGalleryStyled';
import { gsap } from 'gsap';
import GallerySlider from '../GallerySlider/GallerySlider';

const PageGallery = () => {
  const slideRefs = useRef([]);
  const countTopRefs = useRef([]);
  const countBottomRefs = useRef([]);
  const bgImageRefs = useRef([]);
  const textRefs = useRef([]);
  const dynamicBar = useRef(undefined);

  const startAnimation = () => {
    console.log('I am called~startAnimation');
    const tlRepeat = gsap.timeline();
    const tl = gsap.timeline({
      repeat: -1,
      delay: 1,
      paused: false,
      onRepeat: () => {
        repeatBeginning(tlRepeat);
      },
    });

    gsap.set(textRefs, { x: -30 });
    gsap.set(textRefs[0], { opacity: 1 });

    slideData.forEach((_slide, i) => {
      if (i < slideData.length - 1) {
        tl.fromTo(
          dynamicBar.current,
          { scaleY: 0 },
          { duration: 1.4, scaleY: 1 },
          '+=2'
        )
          .set(dynamicBar.current, { transformOrigin: 'bottom center' })
          .to(dynamicBar.current, { duration: 1, scaleY: 0 }, '+=0.4')
          .set(dynamicBar.current, { transformOrigin: 'top center' })
          .add('elements-in-out')
          .to(
            [countTopRefs[i], countBottomRefs[i]],
            { opacity: 0 },
            'elements-in-out'
          )
          .to(
            [countTopRefs[i + 1], countBottomRefs[i + 1]],
            { opacity: 1 },
            'elements-in-out'
          )
          .to(bgImageRefs[i], { duration: 0.2, opacity: 0 }, 'elements-in-out')
          .set(
            bgImageRefs[i + 1],
            { scale: 1.2, webkitFilter: 'blur(' + 6 + 'px)' },
            'elements-in-out'
          )
          .to(
            bgImageRefs[i + 1],
            { duration: 1.8, scale: 1, webkitFilter: 'blur(' + 0 + 'px)' },
            'elements-in-out'
          )
          .to(textRefs[i], { duration: 0.3, opacity: 0 }, 'elements-in-out')
          .to(textRefs[i + 1], { duration: 0.8, opacity: 1, x: 0 }, '-=1');
      } else {
        tl.fromTo(
          dynamicBar.current,
          { scaleY: 0 },
          { duration: 1.4, scaleY: 1 },
          '+=2'
        )
          .set(dynamicBar.current, { transformOrigin: 'bottom center' })
          .to(dynamicBar.current, { duration: 1, scaleY: 0 }, '+=0.4')
          .set(dynamicBar.current, { transformOrigin: 'top center' })
          .add('elements-in-out')
          .to(
            [countTopRefs[i], countBottomRefs[i]],
            { opacity: 0 },
            'elements-in-out'
          );
      }
    });

    console.log('tl', tl);
    console.log('tlRepeat', tlRepeat);
  };

  const repeatBeginning = (tlRepeat) => {
    gsap.set(bgImageRefs[0], {
      opacity: 0,
      scale: 1.2,
      webkitFilter: 'blur(' + 6 + 'px)',
    });

    tlRepeat
      .add('slide1-in')
      .fromTo(
        [countTopRefs[0], countBottomRefs[0]],
        { opacity: 0 },
        { duration: 0.3, opacity: 1, ease: 'Power2.easeIn' },
        'slide1-in'
      )
      .to(
        bgImageRefs[0],
        {
          duration: 1.8,
          scale: 1,
          opacity: 1,
          webkitFilter: 'blur(' + 0 + 'px)',
        },
        'slide1-in'
      )
      .fromTo(
        textRefs[0],
        { opacity: 0, x: -30, ease: 'Power2.easeIn' },
        { duration: 0.8, opacity: 1, x: 0 },
        '-=1'
      );
  };
  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <PageGalleryStyled>
      {slideData.map((slide, index) => (
        <Slide
          key={index}
          data={slide}
          ref={{
            slideRef: (ref) => {
              slideRefs[index] = ref;
            },
            imageRef: (ref) => {
              bgImageRefs[index] = ref;
            },
            textRef: (ref) => {
              textRefs[index] = ref;
            },
          }}
        />
      ))}
      <div className="slider__navigation">
        <div className="slider__count slider__count--top">
          {slideData.map((_slide, index) => (
            <p
              key={index}
              className="count count--top"
              ref={(ref) => {
                countTopRefs[index] = ref;
              }}
            >
              {(index + 1).toString().padStart(2, '0')}
            </p>
          ))}
        </div>
        <div className="slider__bar">
          <div ref={dynamicBar} className="slider__bar--dynamic" />
          <div className="slider__bar--static" />
        </div>
        <div className="slider__count slider__count--bottom">
          {slideData.map((_slide, index) => {
            if (index < slideData.length - 1) {
              return (
                <p
                  key={index}
                  className="count count--bottom"
                  ref={(ref) => {
                    countBottomRefs[index] = ref;
                  }}
                >
                  {(index + 2).toString().padStart(2, '0')}
                </p>
              );
            } else {
              return (
                <p
                  key={index}
                  className="count count--bottom"
                  ref={(ref) => {
                    countBottomRefs[index] = ref;
                  }}
                >
                  01
                </p>
              );
            }
          })}
        </div>
      </div>{' '}
    </PageGalleryStyled>
  );
};

export default PageGallery;

const Slide = React.forwardRef((props, ref) => {
  const { data } = props;
  const { slideRef, imageRef, textRef } = ref;
  return (
    <div
      ref={slideRef}
      className="slider__slide"
      style={{ zIndex: data.zIndex }}
    >
      <div
        ref={imageRef}
        className="slider__img"
        style={{ backgroundImage: `url(${data.imageUrl})` }}
      ></div>
      <div className="slider__text" ref={textRef}>
        <h1 className="slider__header">{data.headerText}</h1>
        <a href={data.link} className="cta">
          {data.linkText}
        </a>
      </div>
    </div>
  );
});

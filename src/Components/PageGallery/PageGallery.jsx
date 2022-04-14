import React, { useLayoutEffect, useRef, useCallback } from 'react';
import slideData from './data';
import { PageGalleryStyled } from './PageGalleryStyled';
import { gsap } from 'gsap';
import GallerySlider from '../GallerySlider/GallerySlider';

const PageGallery = () => {
  const slideRefs = useRef([]);
  const bgImageRefs = useRef([]);
  const textRefs = useRef([]);
  const dynamicBar = useRef(undefined);

  const startAnimation = useCallback(() => {
    console.log('I am called~startAnimation');
    const tlRepeat = gsap.timeline();
    const tl = gsap.timeline({
      repeat: -1,
      delay: 0,
      paused: false,
      onRepeat: () => {
        repeatBeginning(tlRepeat);
      },
    });

    gsap.set(textRefs.current, { x: -30 });
    gsap.set(textRefs.current[0], { opacity: 1 });

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
            bgImageRefs.current[i],
            { duration: 0.2, opacity: 0 },
            'elements-in-out'
          )

          .to(
            bgImageRefs.current[i + 1],
            { duration: 1.8, scale: 1, webkitFilter: 'blur(' + 0 + 'px)' },
            'elements-in-out'
          )
          .to(
            textRefs.current[i],
            { duration: 0.3, opacity: 0 },
            'elements-in-out'
          )
          .to(
            textRefs.current[i + 1],
            { duration: 0.8, opacity: 1, x: 0 },
            '-=1'
          );
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
          .add('elements-in-out');
      }
    });
  }, []);

  const repeatBeginning = (tlRepeat) => {
    gsap.set(bgImageRefs.current[0], {
      opacity: 0,
      scale: 1,
      webkitFilter: 'blur(' + 6 + 'px)',
    });

    tlRepeat
      .add('slide1-in')
      .to(
        bgImageRefs.current[0],
        {
          duration: 1.8,
          scale: 1,
          opacity: 1,
          webkitFilter: 'blur(' + 0 + 'px)',
        },
        'slide1-in'
      )
      .fromTo(
        textRefs.current[0],
        { opacity: 0, x: -30, ease: 'Power2.easeIn' },
        { duration: 0.8, opacity: 1, x: 0 },
        '-=1'
      );
  };
  useLayoutEffect(() => {
    startAnimation();
  }, [startAnimation]);

  return (
    <PageGalleryStyled>
      {slideData.map((slide, index) => (
        <GallerySlider
          key={index}
          data={slide}
          ref={{
            slideRef: (ref) => {
              slideRefs.current[index] = ref;
            },
            imageRef: (ref) => {
              bgImageRefs.current[index] = ref;
            },
            textRef: (ref) => {
              textRefs.current[index] = ref;
            },
          }}
        />
      ))}
      <div className="slider__navigation">
        <div className="slider__bar">
          <div ref={dynamicBar} className="slider__bar--dynamic" />
          <div className="slider__bar--static" />
        </div>
      </div>
    </PageGalleryStyled>
  );
};

export default PageGallery;

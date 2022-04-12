import React, { forwardRef } from 'react';
import { GallerySliderStyled } from './GallerySliderStyled';

const GallerySlider = forwardRef((props, ref) => {
  const { data } = props;
  const { slideRef, imageRef, textRef } = ref;
  return (
    <GallerySliderStyled
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
      </div>{' '}
    </GallerySliderStyled>
  );
});

export default GallerySlider;

import React, { forwardRef } from 'react';
import { GallerySliderStyled } from './GallerySliderStyled';

const GallerySlider = forwardRef((props, ref) => {
  const { data } = props;
  const { slideRef, imageRef, textRef } = ref;
  return (
    <GallerySliderStyled ref={slideRef} style={{ zIndex: data.zIndex }}>
      <div className="slider__container">
        <div
          ref={imageRef}
          className="slider__img"
          style={{ backgroundImage: `url(${data.imageUrl})` }}
        ></div>
      </div>
      <div className="slider__text" ref={textRef}>
        <h1 className="slider__header">{data.headerText}</h1>
      </div>
    </GallerySliderStyled>
  );
});

export default GallerySlider;

// const Slide = React.forwardRef((props, ref) => {
//   const { data } = props;
//   const { slideRef, imageRef, textRef } = ref;
//   return (
//     <div
//       ref={slideRef}
//       className="slider__slide"
//       style={{ zIndex: data.zIndex }}
//     >
//       <div className="slider__container">
//         <div
//           ref={imageRef}
//           className="slider__img"
//           style={{ backgroundImage: `url(${data.imageUrl})` }}
//         ></div>
//       </div>
//       <div className="slider__text" ref={textRef}>
//         <h1 className="slider__header">{data.headerText}</h1>
//         <a href={data.link} className="cta">
//           {data.linkText}
//         </a>
//       </div>
{
  /* <div className="slider__count slider__count--bottom">
          {slideData.map((_slide, index) => {
            if (index < slideData.length - 1) {
              return (
                <p
                  key={index}
                  className="count count--bottom"
                  ref={(ref) => {
                    countBottomRefs.current[index] = ref;
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
                    countBottomRefs.current[index] = ref;
                  }}
                >
                  01
                </p>
              );
            }
          })}
        </div> */
}
{
  /* <div className="slider__count slider__count--top">
          {slideData.map((_slide, index) => (
            <p
              key={index}
              className="count count--top"
              ref={(ref) => {
                countTopRefs.current[index] = ref;
              }}
            >
              {(index + 1).toString().padStart(2, '0')}
            </p>
          ))}
        </div> */
}
//     </div>
//   );
// });

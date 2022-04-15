import React from 'react';
import Img from '../CollageImg/Img';
import { CollageStyled } from './CollageStyled';
import { collagePics } from './data';

const Collage = () => {
  const leftImages = collagePics.slice(0, 1);
  const rightImages = collagePics.slice(1, collagePics.length);
  return (
    <CollageStyled>
      <h1>Your skin does not define who you are</h1>
      <div className="collage-main">
        <div className="left-column">
          {leftImages.map((src, index) => {
            const { img, id } = src;
            return <Img key={id} src={img} />;
          })}
        </div>
        <div className="right-column">
          {rightImages.map((src, index) => {
            const { img, id } = src;
            return <Img key={id} src={img} />;
          })}
        </div>
      </div>
    </CollageStyled>
  );
};

export default Collage;

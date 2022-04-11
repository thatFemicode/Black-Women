import React from 'react';

const Img = ({ src }) => {
  return (
    <div className="hero-element">
      <img src={src} alt="" className="collage-element" />
    </div>
  );
};

export default Img;

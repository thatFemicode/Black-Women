import React, { useState, useRef, useEffect } from 'react';
import imgs from './data';
import { FeaturesStyled } from './FeaturesStyled';
import FeaturesSlide from './FeaturesSlide';
import { gsap } from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
import cn from 'classnames';
gsap.registerPlugin(scrollTrigger);
const Features = () => {
  const [activeFeatureIndex, setFeatureIndex] = useState(0);
  const featureSliderRef = useRef(null);
  const featureSlidesRightRef = useRef(null);
  useEffect(() => {
    function stopTrigger() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: featureSlidesRightRef.current,
          start: 'top top',
          end: () => `+=${featureSliderRef.current.offsetHeight}`,
          scrub: true,
          pin: true,
        },
      });

      return tl;
    }
    const master = gsap.timeline();
    master.add(stopTrigger()); //with a gap of 2 seconds
  }, []);

  return (
    <FeaturesStyled ref={featureSliderRef}>
      <div className="feature-slides-left">
        {imgs.map((feature, index) => (
          <FeaturesSlide
            updateActiveImage={setFeatureIndex}
            key={feature.imageUrl}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </div>
      <div ref={featureSlidesRightRef} className="feature-slides-right">
        <RenderImages activeFeatureIndex={activeFeatureIndex} />
      </div>
    </FeaturesStyled>
  );
};

export default Features;

function RenderImages({ activeFeatureIndex }) {
  return imgs.map(({ img }, index) => (
    <img
      className={cn({ 'as-primary': activeFeatureIndex === index })}
      key={img}
      style={{ backgroundImage: `url(${img})` }}
    />
  ));
}

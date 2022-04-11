import React, { useRef, useEffect } from 'react';
import Banner from '../Banner/Banner';
import Block from '../Block/Block';
import Collage from '../Collage/Collage';
import { HeroStyled } from './HeroStyled';
import { gsap } from 'gsap';
import { OuterLayout } from '../../Styling/Layout/Layout';
import Bottom from '../Bottom/Bottom';
import Footer from '../Footer/Footer';
import Features from '../Features/Features';

const Hero = () => {
  let containerRef = useRef(null);
  useEffect(() => {
    gsap.to(containerRef, { duration: 1, opacity: 1 });
  });
  return (
    <HeroStyled ref={(el) => (containerRef = el)} className="hero-container">
      <OuterLayout>
        <Banner />
        <div className="hero-media">
          <Block />
          <Collage />
        </div>
        <Bottom />
        <Footer />
      </OuterLayout>
      <Features />
    </HeroStyled>
  );
};

export default Hero;

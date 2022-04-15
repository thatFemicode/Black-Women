import React, { useEffect, useRef } from 'react';
import Gens from './img/Tint.jpg';
import ItemButton from '../Button/ItemButton';
import { BottomStyled } from './BottomStyled';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(scrollTrigger);

const Bottom = () => {
  const phoneRef = useRef(null);
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: phoneRef.current,
        start: '300px',
        end: '+=400',

        scrub: true,
        // markers: true,
      },
    });
    tl.to(
      '.hero-container',
      {
        backgroundColor: '#fff',
        duration: 0.25,
        ease: 'power4.out',
      },
      '-=2'
    );
  }, []);
  return (
    <BottomStyled ref={phoneRef}>
      <div className="hero-usedBy-copy">
        <p>
          Black is all i hear but are we not all one in this world, why should a
          skin tone be a deterrent and a determinant in some situations in life.
          Being black is something to be proud of and to all black women out
          there kids, mums, grandmums, you are beautiful, strong, bold,
          courageous. Words cant describe how strong you are and the things you
          do but you all are the real MVP's for why we men are where we are
          today
        </p>
      </div>
      <div className="hero-usedBy-logos">
        <Link to="/gallery">
          <ItemButton name={'Gallery'} />
        </Link>
        <img src={Gens} alt="" />
      </div>
    </BottomStyled>
  );
};

export default Bottom;

import React, { useEffect, useRef } from 'react';
import { FooterStyled } from './FooterStyled';
import { gsap } from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
import SplitText from '../../utils/Split3.min';
import ItemButton from '../Button/ItemButton';
import { Link } from 'react-router-dom';
gsap.registerPlugin(scrollTrigger);
const Footer = () => {
  const footerRef = useRef(null);
  const text = useRef(null);
  useEffect(() => {
    // const split = new SplitText(text.current, { type: 'lines' });
    const spli = new SplitText(text.current, {
      type: 'words',
      linesClass: 'lineChildren',
    });
    let line2 = spli.words;
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top bottom',
        end: '+=300',
        // toggleActions: 'play none none none',
        // scrub: true,
        // markers: true,
      },
    });

    tl.from(line2, {
      duration: 2,
      opacity: 0,
      y: 100,
      ease: 'power4.out',
      stagger: 0.1,
    });
    return () => tl.scrollTrigger.kill();
  }, []);
  return (
    <FooterStyled ref={footerRef}>
      <h1 className="text" ref={text}>
        You are beautiful, strong, bold and Dont ever doubt yourself{' '}
      </h1>
      <Link to="/gallery">
        <ItemButton name={'Gallery'} />
      </Link>
    </FooterStyled>
  );
};
export default Footer;

import React, { useEffect, useRef } from 'react';

import { BlockContainer, BlockStyled } from './BlockStyled';
// import Braids from './img/Braids.jpg';
// import Cee from './img/CeeCee.jpg';
import Flowers from './img/Flowers.png';

import { gsap } from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(scrollTrigger);

const Block = () => {
  const phoneRef = useRef(null);

  useEffect(() => {
    function intro() {
      const tl = gsap.timeline({ delay: 2 });
      tl.fromTo(phoneRef.current, { y: 100 }, { duration: 1, y: 0 });
      return tl;
    }

    function stopTrigger() {
      const tl = gsap.timeline({
        // delay: 1,
        scrollTrigger: {
          trigger: phoneRef.current,
          start: 'top top',
          end: '+=300',
          scrub: true,
          pin: true,
          // anticipatePin: 1,
          // markers: true,
        },
      });

      // add animations and labels to the timeline
      tl.to(phoneRef.current, { scale: 1.2 }, '+=0.2');
      tl.to(
        '.hero-container',
        {
          // selector text, Array, or object
          backgroundColor: '#000', // camelCase
          duration: 0.15, // seconds
        },
        '-=0.5'
      );
      // tl.to(
      //   '.hero-container',
      //   {
      //     backgroundColor: '#fff',
      //     duration: 0.15,
      //     delay: 4,
      //     // ease: 'power4.out',
      //   },
      //   '+=3'
      // );

      return tl;
    }
    const master = gsap.timeline();
    master.add(intro()); //with a gap of 2 seconds

    // could not make it with delay from gsap
    setTimeout(() => {
      master.add(stopTrigger());
    }, 1000);
  }, []);
  return (
    <BlockContainer>
      <BlockStyled ref={phoneRef}>
        <div className="hero-phone-template">
          <img
            className="collage-element"
            alt=""
            // playsinline=""
            // autoPlay
            // webkit-playsinline=""
            // loop
            // // poster="https://lh3.googleusercontent.com/AJYQSvDZk4lqSWgBeiKFnE6OXdWWp8up4UdugQPqDVqpV4sW4DOtxzOTcuMJYlU771xp4nhG4mCUrOcPM3HiEbxns9QpTz90wLe13w=s0"
            src={Flowers}
          />
        </div>
      </BlockStyled>
    </BlockContainer>
  );
};

export default Block;

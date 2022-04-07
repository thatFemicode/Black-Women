import React, { useState, useEffect, useRef } from 'react';
import { preloaderAnimation } from './animation';
import { PreloaderStyled } from './PreloaderStyled';

const Preloader = ({ setLoading }) => {
  const [width, setWidth] = useState(0);
  const [mess, setMess] = useState('');

  let preloader = useRef(null);
  let load = useRef(null);
  let bg = useRef(null);
  let message = useRef(null);
  // let text1 = useRef(null);
  const generateMessage = () => {
    const messages = [
      'skin just like pearls',
      'Self-esteem means knowing you are the dream',
      'You are your best thing.',
      'Black is the essence of beauty',
      ' I will love who I am',
      'You are beautiful',
    ];
    const randomNum = Math.floor(Math.random() * messages.length);
    setMess(messages[randomNum]);
  };
  useEffect(() => {
    const count = setInterval(() => {
      setWidth((loading) => {
        if (loading < 100) {
          setWidth(loading + 1);
        } else {
          clearInterval(count);
          setWidth(100);
        }
      });
    }, 40);

    generateMessage();
    preloaderAnimation(preloader, load, bg, message, setLoading);
  }, [setLoading]);
  return (
    <PreloaderStyled ref={(el) => (preloader = el)} width={width}>
      <div ref={(el) => (load = el)} className="load"></div>
      <div className="progress"></div>
      <div ref={(el) => (bg = el)} className="yellow-bg"></div>
      <div ref={(el) => (message = el)} className="message">
        {mess}
      </div>
    </PreloaderStyled>
  );
};

export default Preloader;

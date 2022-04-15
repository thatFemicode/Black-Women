import React, { useRef, useEffect } from 'react';
import PageGallery from '../../Components/PageGallery/PageGallery';
import { GalleryStyled } from './GalleryStyled';
import { OuterLayout } from '../../Styling/Layout/Layout';
import { gsap } from 'gsap';
const Gallery = () => {
  let gallery = useRef(null);
  useEffect(() => {
    gsap.to(gallery, {
      duration: 1,
      opacity: 1,
    });
  }, []);
  return (
    <GalleryStyled ref={(el) => (gallery = el)}>
      <OuterLayout>
        <PageGallery />
      </OuterLayout>
    </GalleryStyled>
  );
};

export default Gallery;

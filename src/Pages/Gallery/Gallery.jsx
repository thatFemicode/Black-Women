import React from 'react';
import PageGallery from '../../Components/PageGallery/PageGallery';
import { GalleryStyled } from './GalleryStyled';
import { OuterLayout } from '../../Styling/Layout/Layout';

const Gallery = () => {
  return (
    <GalleryStyled>
      <OuterLayout>
        <PageGallery />
      </OuterLayout>
    </GalleryStyled>
  );
};

export default Gallery;

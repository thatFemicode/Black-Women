import styled from 'styled-components';

export const PageGalleryStyled = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;

  /* mix-blend-mode: difference; */
  .slider__slide {
    width: 100%;
    height: 100%;
    /* overflow: hidden; */
    display: flex;
    top: 0;
    left: 0;
    position: absolute;
  }
  /* .slider__slide--1 {
  z-index: 4;
}
.slider__slide--2 {
  z-index: 3;
}
.slider__slide--3 {
  z-index: 2;
}
.slider__slide--4 {
  z-index: 1;
} */
  .slider__img {
    width: 100%;
    height: 100%;
    /* position: absolute; */
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  /* .slider__img--1 {
  background-image: url("https://i.postimg.cc/Y0T3F1tc/about-landing.jpg");
}
.slider__img--2 {
  background-image: url("https://i.postimg.cc/FHHyKWyf/i-Stock-1148043788.jpg");
}
.slider__img--3 {
  background-image: url("https://i.postimg.cc/tTqp06QH/i-Stock-1064136816.jpg");
}
.slider__img--4 {
  background-image: url("https://i.postimg.cc/435R13K2/i-Stock-1179976698.jpg");
} */
  .slider__text {
    align-self: flex-end;
    padding: 0 0 5vw 15vh;
    opacity: 0;
    width: 80%;
    max-width: 1005px;
  }
  .slider__text .slider__header {
    margin-bottom: 40px;
    text-transform: capitalize;
    color: #fff;
    mix-blend-mode: difference;
  }
  .slider__text .cta {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 6px;
    margin-left: 65px;
    position: relative;
    mix-blend-mode: difference;
  }
  .slider__text .cta:before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -55px;
    width: 40px;
    height: 1px;
    background-color: white;
  }
  .slider__navigation {
    width: 21px;
    height: 400px;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: calc(100% - 5vw);
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .count--top {
    position: absolute;
    top: 0;
    left: 0;
  }
  .count {
    opacity: 0;
  }
  .count:first-child {
    opacity: 0;
  }
  .count--bottom {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .slider__bar {
    width: 2px;
    height: 250px;
    position: relative;
  }
  .slider__bar--dynamic {
    width: 100%;
    height: 100%;
    background-color: #ff69b4;
    transform-origin: top center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .slider__bar--static {
    width: 100%;
    height: 100%;
    background-color: darkgrey;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

import styled from 'styled-components';

export const PageGalleryStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .slider__navigation {
    width: 20px;
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

  .slider__bar {
    width: 2px;
    height: 250px;
    position: relative;
  }
  .slider__bar--dynamic {
    width: 100%;
    height: 100%;
    background-color: #000;
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

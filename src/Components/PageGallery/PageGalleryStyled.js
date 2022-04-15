import styled from 'styled-components';

export const PageGalleryStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  .navigation {
    height: 100%;
    width: 100%;
  }
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
  .home-navigation {
    position: fixed;
    bottom: 0%;
    right: 100px;
    z-index: 12;
    display: flex;
    width: 600px;
    align-items: center;
    padding: 2rem;
    justify-content: space-between;
    @media screen and (min-height: 600px) and (max-height: 880px) and (max-width: 1280px) {
      right: 50px;
      bottom: -5%;
      width: 550px;
    }
    @media (max-width: ${({ theme }) => theme.blogNav}) {
      width: 100%;
      right: 0;
    }
    @media (max-width: ${({ theme }) => theme.mobil}) {
      bottom: -20px;
    }
    p {
      font-size: 2rem;
      @media (max-width: ${({ theme }) => theme.dont}) {
        font-size: 1.5rem;
      }
      @media (max-width: ${({ theme }) => theme.blogNav}) {
        font-size: 1.4rem;
      }
      @media (max-width: ${({ theme }) => theme.make}) {
        font-size: 1rem;
      }
    }
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

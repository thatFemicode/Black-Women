import styled from 'styled-components';
export const GallerySliderStyled = styled.div`
  overflow: hidden;
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;

  @media (max-width: ${({ theme }) => theme.desktop}) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: unset;
  }
  .slider__container {
    width: 50%;
    position: relative;
    @media (max-width: ${({ theme }) => theme.pics}) {
      width: 60%;
    }
    @media (max-width: ${({ theme }) => theme.dont}) {
      width: 65%;
    }
    @media (max-width: ${({ theme }) => theme.desktop}) {
      width: 100%;
      display: grid;
      place-items: center;
    }
    @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
      width: 100%;
      display: grid;
      place-items: center;
    }
  }
  .slider__img {
    width: 100%;
    height: 100%;
    width: 550px;
    height: 600px;
    border-radius: 1rem;
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    /* @media (max-width: ${({ theme }) => theme.mins}) {
      width: 450px;
      height: 550px;
    } */
    @media (max-width: ${({ theme }) => theme.dont}) {
      width: 430px;
      height: 500px;
    }

    @media (max-width: ${({ theme }) => theme.desktop}) {
      width: 450px;
      height: 550px;
    }
    @media screen and (min-height: 500px) and (max-height: 600px) and (max-width: 1024px) {
      width: 350px;
      height: 450px;
    }
    @media (max-width: ${({ theme }) => theme.desktop}) {
      width: 400px;
      height: 500px;
    }
    @media (max-width: ${({ theme }) => theme.make}) {
      width: 300px;
      height: 350px;
    }
    @media (max-width: ${({ theme }) => theme.mobil}) {
      width: 280px;
      height: 289px;
    }
  }
  .slider__text {
    opacity: 0;
    width: 50%;
    align-self: center;

    @media (max-width: ${({ theme }) => theme.pics}) {
      width: 40%;
    }
    @media (max-width: ${({ theme }) => theme.dont}) {
      width: 35%;
    }

    @media (max-width: ${({ theme }) => theme.desktop}) {
      margin-top: 3rem;
      width: 100%;
      height: 100%;
    }
    @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
      margin-top: 3rem;
      width: 100%;
      height: 100%;
    }
    @media (max-width: ${({ theme }) => theme.make}) {
      margin-top: 2rem;
      width: 100%;
    }
  }
  .slider__text .slider__header {
    margin-bottom: 40px;
    margin-left: 7rem;
    text-transform: capitalize;
    color: #000;
    font-size: 3.5rem;
    mix-blend-mode: difference;
    @media (max-width: ${({ theme }) => theme.mins}) {
      font-size: 3rem;
    }
    @media (max-width: ${({ theme }) => theme.pics}) {
      font-size: 2.5rem;
      margin-left: 0rem;
    }
    @media (max-width: ${({ theme }) => theme.dont}) {
      font-size: 1.8rem;
    }
    @media (max-width: ${({ theme }) => theme.desktop}) {
      font-size: 2rem;
    }
    @media (max-width: ${({ theme }) => theme.make}) {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    @media (max-width: ${({ theme }) => theme.mobil}) {
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
  }
  .slider__text .cta {
    font-weight: 700;
    margin-left: 7rem;
    text-transform: uppercase;
    letter-spacing: 6px;
    position: relative;
    @media (max-width: ${({ theme }) => theme.pics}) {
      margin-left: 0rem;
    }
  }
  /* .slider__text .cta:before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -55px;
    width: 40px;
    height: 1px;
    background-color: white;
  } */
`;

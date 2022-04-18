import styled from 'styled-components';
import frame from './img/frame.png';
export const BlockStyled = styled.div`
  width: 280px;
  height: 600px;
  top: 340px;
  position: relative;
  transform: scale(1.2);

  @media (max-width: ${({ theme }) => theme.kobe}) {
    width: 250px;
    height: 550px;
    top: 250px;
    /* left: 60%; */
    /* transform: translateX(-35%); */
  }
  @media (max-width: ${({ theme }) => theme.dont}) {
    width: 250px;
    height: 450px;
    top: 450px;
  }
  @media screen and (min-height: 1000px) and (max-height: 1024px) and (max-width: 768px) {
    width: 250px;
    height: 450px;
  }
  @media (max-width: ${({ theme }) => theme.make}) {
    width: 170px;
    height: 350px;
    top: 330px;
  }

  .hero-phone-template {
    background-image: url(${frame});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;

    height: 100%;
    overflow: hidden;
    img {
      position: absolute;
      width: 64%;
      height: auto;
      top: 100px;
      left: 9%;
      border-radius: 20px;
      overflow: hidden;
      @media (max-width: ${({ theme }) => theme.dont}) {
        top: 50px;
      }
      @media screen and (min-height: 1000px) and (max-height: 1024px) and (max-width: 768px) {
        top: 50px;
      }
      @media (max-width: ${({ theme }) => theme.make}) {
        top: 55px;
      }
    }
  }
`;
export const BlockContainer = styled.div`
  position: absolute;
  width: 105%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.kobe}) {
    width: 107%;
  }
  @media screen and (min-height: 1000px) and (max-height: 1024px) and (max-width: 768px) {
    width: 108%;
  }
`;

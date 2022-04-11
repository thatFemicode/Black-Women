import styled from 'styled-components';

export const FeaturesStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .feature-slide {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    margin: 0 auto;

    .feature-slide-title {
      font-size: 6vw;
      text-transform: uppercase;
      font-weight: 900;
    }
    .feature-slide-description {
      font-size: 1.5rem;
      margin-top: 30px;
      line-height: 1.3;
    }
  }

  .feature-slides-right {
    height: 100vh;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      opacity: 0;
      transition: all 1s ease-in-out;
      /* transform: scale(1.3); */
      position: absolute;
      top: 0px;
      &.as-primary {
        opacity: 1;
        transform: scale(1.1);
      }
    }
  }
`;

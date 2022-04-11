import styled from 'styled-components';

export const CollageStyled = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 35% 1fr 35%;
  padding: 0 2rem;
  padding-top: 100px;
  place-items: center;
  align-items: start;
  margin-bottom: 10vh;
  @media (max-width: ${({ theme }) => theme.kobe}) {
    padding-top: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.dont}) {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.desktop}) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (max-width: ${({ theme }) => theme.min}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .left-column {
    /* grid-area: 1 / 1 / span 1 / span 1; */
    grid-row: 1/2;
  }
  .right-column {
    grid-area: 1 / 3 / span 1 / span 1;
  }

  .left-column,
  .right-column {
    /* display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(6, 1fr);
    column-gap: 20px;
    height: 400px; */
  }
  .hero-element {
    overflow: hidden;
    border-radius: 20px;
    /* width: 400px;
    height: 400px; */
    img {
      object-fit: cover;
      // transform-origin: center left;
      width: 300px;
      height: 100%;
      transition: all 0.2s ease-in-out;

      @media (max-width: ${({ theme }) => theme.kobe}) {
        width: 250px;
      }
      @media (max-width: ${({ theme }) => theme.kobe}) {
        width: 200px;

        /* left: 60%; */
        /* transform: translateX(-35%); */
      }
      @media (max-width: ${({ theme }) => theme.desktop}) {
        width: 180px;
      }
      @media (max-width: ${({ theme }) => theme.make}) {
        width: 150px;
        border-radius: 22px;
      }
      // will-change: transform;
      // transform: scale(1.1);
      // transition: transform 2s cubic-bezier(0.77, 0, 0.175, 1);
    }
  }
`;

import styled from 'styled-components';
export const PreloaderStyled = styled.div`
  background: #333;
  height: 100vh;
  width: 100%;
  position: fixed;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  .progress {
    position: absolute;
    left: 0;
    background-color: #f0eff1;
    height: 2px;
    width: ${({ width }) => `${width}%`};
    transition: width 0.4s ease-out;
    will-change: width;
  }

  .load {
    position: absolute;
    background-color: #f0eff1;
    height: 2px;
    width: 0;
    left: 0;
    z-index: 2;
  }
  .message {
    position: absolute;
    top: 50%;
    left: 50%;
    /* mix-blend-mode: difference; */
    width: 100%;
    color: #444;
    text-align: center;
    font-size: 2vw;
    transform: translate(-50%, -50%);
    /* color: var(--burlywood);
    font-size: calc(var(--VW) * 2); */
    z-index: 31;
    @media (hover: none) and (pointer: coarse), (max-width: 500px) {
      /* font-size: calc(var(--VW) * 4); */
    }
  }
`;

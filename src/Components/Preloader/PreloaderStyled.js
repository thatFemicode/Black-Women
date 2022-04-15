import styled from 'styled-components';
export const PreloaderStyled = styled.div`
  background: #000;
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
    background-color: #fff;
    height: 2px;
    width: ${({ width }) => `${width}%`};
    transition: width 0.4s ease-out;
    will-change: width;
  }

  .load {
    position: absolute;
    background-color: #fff;
    height: 2px;
    width: 0;
    left: 0;
    z-index: 2;
  }
  .message {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    color: #444;
    text-align: center;
    font-size: 5rem;
    z-index: 31;
    max-width: 100%;
    transform: translate(-50%, -50%);
    @media (max-width: ${({ theme }) => theme.kobe}) {
      font-size: 4rem;
    }
    @media (max-width: ${({ theme }) => theme.dont}) {
      font-size: 3rem;
    }
    @media (max-width: ${({ theme }) => theme.desktop}) {
      font-size: 3rem;
    }
    @media (max-width: ${({ theme }) => theme.make}) {
      font-size: 2rem;
    }
    @media (max-width: ${({ theme }) => theme.mobil}) {
      font-size: 1.5rem;
    }
  }
`;

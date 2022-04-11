import styled from 'styled-components';

export const BottomStyled = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  padding: 0 2rem;
  padding-top: 4rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  margin-top: 274px;
  @media (max-width: ${({ theme }) => theme.kobe}) {
    flex-direction: column;
  }
  /* padding-top: 234px; */
  /* margin-bottom: 300px; */

  /* padding-top: 100px;
  place-items: center;
  align-items: start;
  margin-bottom: 10vh; */
  @media (max-width: ${({ theme }) => theme.kobe}) {
    padding-top: 4rem;
    margin-top: 360px;
  }
  @media (max-width: ${({ theme }) => theme.dont}) {
    margin-top: 380px;
  }
  @media (max-width: ${({ theme }) => theme.nav}) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.desktop}) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (max-width: ${({ theme }) => theme.min}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.mobil}) {
    margin-top: 170px;
    padding-top: 1rem;
  }

  .hero-usedBy-copy {
    flex: 3;
    margin-bottom: 0;

    max-width: 560px;
    @media (max-width: ${({ theme }) => theme.minss}) {
      max-width: 450px;
    }
    @media (max-width: ${({ theme }) => theme.pics}) {
      max-width: 400px;
    }
    @media (max-width: ${({ theme }) => theme.kobe}) {
      max-width: 100%;
    }

    p {
      color: #fff;
      mix-blend-mode: difference;
      font-size: 1.9rem;
      font-weight: 400;
      line-height: 1.6;
      @media (max-width: ${({ theme }) => theme.minss}) {
        font-size: 1.7rem;
      }
      @media (max-width: ${({ theme }) => theme.pics}) {
        font-size: 1.4rem;
      }
      @media (max-width: ${({ theme }) => theme.mobil}) {
        font-size: 1rem;
      }
    }
  }
  .hero-usedBy-logos {
    flex: 1;
    max-width: 450px;
    padding-bottom: 2rem;
    @media (max-width: ${({ theme }) => theme.dont}) {
      max-width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    img {
      margin-top: 3rem;
      object-fit: cover;
      border-radius: 1rem;

      width: 330px;
      @media (max-width: ${({ theme }) => theme.kobe}) {
        width: 300px;
      }
      @media (max-width: ${({ theme }) => theme.dont}) {
        width: 200px;
      }
      @media (max-width: ${({ theme }) => theme.mobil}) {
        width: 150px;
      }
    }
  }
`;

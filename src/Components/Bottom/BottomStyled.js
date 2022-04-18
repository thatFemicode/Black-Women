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
  @media (max-width: ${({ theme }) => theme.make}) {
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 170px;
  }
  @media (max-width: ${({ theme }) => theme.mobil}) {
    margin-top: 170px;
    padding-top: 1rem;
  }

  .hero-usedBy-copy {
    flex: 3;
    max-width: 450px;
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
      font-size: 1.5rem;
      font-weight: 400;
      text-align: justify;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.kobe}) {
      max-width: 100%;
    }
    img {
      margin-top: 3rem;
      object-fit: cover;
      border-radius: 1rem;
      width: 220px;
      @media (max-width: ${({ theme }) => theme.kobe}) {
        width: 300px;
      }
      @media (max-width: ${({ theme }) => theme.dont}) {
        width: 150px;
      }
      /* @media (max-width: ${({ theme }) => theme.mobil}) {
        width: 100px;
      } */
    }
  }
`;

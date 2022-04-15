import styled from 'styled-components';
export const FooterStyled = styled.div`
  padding-bottom: 200px;
  padding-top: 200px;
  text-align: center;
  font-size: 6rem;
  font-weight: 600;
  color: #ccc;
  mix-blend-mode: difference;
  height: 100%;
  width: 100%;
  text-transform: capitalize;
  /* height: 100vh; */
  @media (max-width: ${({ theme }) => theme.pics}) {
    font-size: 5rem;
  }
  @media (max-width: ${({ theme }) => theme.kobe}) {
    font-size: 4rem;
  }
  @media (max-width: ${({ theme }) => theme.dont}) {
    padding-bottom: 200px;
    padding-top: 200px;
    font-size: 3rem;
  }
  @media (max-width: ${({ theme }) => theme.desktop}) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (max-width: ${({ theme }) => theme.make}) {
    padding-bottom: 100px;
    padding-top: 100px;
    font-size: 2.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.mobil}) {
    font-size: 1.3rem;
    padding-top: 100px;
  }

  h1 {
    margin-bottom: 1rem;
  }
`;

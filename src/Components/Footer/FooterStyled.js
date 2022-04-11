import styled from 'styled-components';
export const FooterStyled = styled.div`
  padding-bottom: 200px;
  padding-top: 200px;
  text-align: center;
  font-size: 6rem;
  font-weight: 600;
  color: #fff;
  mix-blend-mode: difference;

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
  @media (max-width: ${({ theme }) => theme.make}) {
    padding-bottom: 100px;
    padding-top: 100px;
    font-size: 2.5rem;
  }
  @media (max-width: ${({ theme }) => theme.mobil}) {
    font-size: 1.5rem;
  }
  h1 {
    display: inline-block;
  }
`;

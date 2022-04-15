import styled from 'styled-components';

export const GalleryStyled = styled.main`
  width: 100%;
  height: 100%;
  opacity: 0;
  overflow: hidden;
  padding: 0 2rem;
  padding-top: 4rem;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
    height: 100%;
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
`;

import styled from 'styled-components';

export const BannerStyled = styled.section`
  height: 100%;
  overflow: hidden;
  width: 100%;
  opacity: 0;
  padding: 1rem 3rem;
  padding-top: 2rem;
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

  .banner-main {
    display: grid;
    height: 100%;
    width: 100%;
    padding: 30px;
    overflow: auto;
    /* @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
      height: 90vh;
    } */
    &-inner {
      overflow: hidden;
      width: 100%;
      height: 100vh;
      grid-area: 1/1;
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(12, 1fr);
      @media (max-width: ${({ theme }) => theme.desktop}) {
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(6, 1fr);
      }
      /* grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr; */
      /* grid-template-rows: repeat(12, 8.33333%); */
      /* grid-template-rows: max-content; */
      /* grid-auto-flow: row dense; */

      .text {
        width: 100%;
        height: 100%;
        grid-column: 5/13;
        /* overflow: hidden; */
        grid-row: 2 / 4;
        /* text-align: left; */

        @media (max-width: ${({ theme }) => theme.dont}) {
          grid-column: 6/13;
        }
        @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
          grid-row: 2/5;
          grid-column: 7/12;
          width: 100%;
          height: 100%;
        }
        @media (max-width: ${({ theme }) => theme.nav}) {
          grid-column: 7/13;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          grid-column: 4/7;
          grid-row: 2/7;
        }
        @media screen and (min-height: 1000px) and (max-height: 1024px) and (max-width: 768px) {
          grid-column: 4/7;
          grid-row: 2/7;
        }
        @media (max-width: ${({ theme }) => theme.blogNav}) {
          grid-row: 2/4;
        }

        p {
          margin-top: -2rem;
          /* margin-left: -1rem; */
          font-size: 6rem;
          color: #222;

          @media (max-width: ${({ theme }) => theme.kobe}) {
            font-size: 5rem;
          }
          @media (max-width: ${({ theme }) => theme.dont}) {
            font-size: 4.5rem;
          }
          @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
            font-size: 11vw;
          }
          @media (max-width: ${({ theme }) => theme.nav}) {
            font-size: 4rem;
          }
          @media (max-width: ${({ theme }) => theme.desktop}) {
            font-size: 5rem;
          }
          @media (max-width: ${({ theme }) => theme.blogNav}) {
            font-size: 4rem;
          }
        }
      }
      .text2 {
        width: 100%;
        height: 100%;
        grid-column: 1/13;
        grid-row: 5/8;
        text-align: center;
        position: relative;
        @media (max-width: ${({ theme }) => theme.dont}) {
          grid-column: 4/13;
        }
        @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
          grid-row: 6/8;
        }
        @media (max-width: ${({ theme }) => theme.nav}) {
          grid-column: 5/13;
          grid-row: 5/8;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          grid-column: 2/7;
          grid-row: 3/6;
        }
        @media screen and (min-height: 1000px) and (max-height: 1024px) and (max-width: 768px) {
          grid-column: 2/7;
          grid-row: 3/6;
        }

        /* overflow: hidden; */
        p {
          /* margin-top: -2.8rem; */
          /* margin-left: 3rem; */
          width: 100%;
          height: 100%;
          font-size: 5rem;
          color: #222;
          @media (max-width: ${({ theme }) => theme.kobe}) {
            font-size: 4.5rem;
          }
          @media (max-width: ${({ theme }) => theme.dont}) {
            font-size: 4rem;
            /* margin-top: -2rem; */
          }
          @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
            font-size: 10vw;
          }
          @media (max-width: ${({ theme }) => theme.nav}) {
            font-size: 3.5rem;
          }
          @media (max-width: ${({ theme }) => theme.desktop}) {
            margin-top: 2rem;
            font-size: 3rem;
          }
        }
      }
      .text3 {
        width: 100%;
        height: 100%;
        grid-column: 6/9;
        grid-row: 8 / 13;
        /* text-align: left; */
        position: relative;
        @media (max-width: ${({ theme }) => theme.pics}) {
          grid-row: 8/12;
        }
        @media (max-width: ${({ theme }) => theme.dont}) {
          grid-column: 4/13;
        }
        @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
          grid-row: 10/13;
          grid-column: 1/13;
        }
        @media (max-width: ${({ theme }) => theme.nav}) {
          grid-column: 3/13;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          grid-column: 1/6;
          grid-row: 5/6;
        }
        @media screen and (min-height: 1000px) and (max-height: 1024px) and (max-width: 768px) {
          grid-column: 1/6;
          grid-row: 4/6;
        }
        @media (max-width: ${({ theme }) => theme.blogNav}) {
          grid-column: 1/7;
        }

        p {
          /* margin-top: -3.8rem; */
          /* margin-left: -0.6rem; */
          margin-top: -2rem;
          font-size: 6rem;
          color: #222;
          @media (max-width: ${({ theme }) => theme.kobe}) {
            font-size: 5rem;
          }
          @media (max-width: ${({ theme }) => theme.dont}) {
            font-size: 4.5rem;
          }
          @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
            font-size: 11vw;
          }
          @media (max-width: ${({ theme }) => theme.mind}) {
            margin-top: 0;
          }
          @media (max-width: ${({ theme }) => theme.nav}) {
            font-size: 4rem;
          }
          @media (max-width: ${({ theme }) => theme.desktop}) {
            font-size: 5rem;
          }
          @media (max-width: ${({ theme }) => theme.blogNav}) {
            margin-top: -4rem;
            font-size: 4rem;
          }
        }
      }
      .texting {
        position: relative;
        height: 100%;
        width: 100%;
        grid-column: 1/4;
        grid-row: 1/9;
        transition: all 0.5s ease-in-out;

        /* @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
          grid-row: 1/9;
        } */
        @media (max-width: ${({ theme }) => theme.dont}) {
          grid-row: 1/9;
          grid-column: 1/5;
        }
        @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
          grid-row: 1/6;
          grid-column: 1/6;
          width: 100%;
          height: 100%;
        }
        @media (max-width: ${({ theme }) => theme.nav}) {
          grid-column: 1/5;
          grid-row: 1/9;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          grid-column: 1/3;
          grid-row: 1/4;
        }
        @media screen and (min-height: 1000px) and (max-height: 1024px) and (max-width: 768px) {
          grid-column: 1/3;
          grid-row: 1/3;
        }
        @media (max-width: ${({ theme }) => theme.mobil}) {
          grid-column: 1/3;
          grid-row: 1/4;
        }

        .img {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
          transform-origin: top;
          height: 100%;

          /* height: 400px; */
          /* background-color: #fff; */
          /* height: 100px; */
          /* height: 100%; */

          /* background-size: cover;
          background-position: center;
          background-repeat: no-repeat; */

          img {
            border-radius: 1rem;
            width: 100%;
            @media (max-width: ${({ theme }) => theme.pics}) {
              width: 230px;
            }
            @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
              width: 100%;
            }

            /* height: 100%; */
          }
        }
      }
      .texting2 {
        position: relative;
        height: 100%;
        width: 100%;
        /* overflow: hidden; */
        grid-column: 10/13;
        grid-row: 4/13;
        @media (max-width: ${({ theme }) => theme.mind}) {
          grid-row: 6/13;
        }
        @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
          grid-row: 5/13;
        }
        @media (max-width: ${({ theme }) => theme.dont}) {
          grid-row: 7/13;
          grid-column: 9/13;
        }
        @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
          grid-row: 8/13;
          grid-column: 8/13;
          width: 100%;
          height: 100%;
        }
        @media (max-width: ${({ theme }) => theme.nav}) {
          grid-column: 9/13;
          grid-row: 7/13;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          grid-row: 4/7;
          grid-column: 5/7;
        }
        @media screen and (min-height: 1000px) and (max-height: 1024px) and (max-width: 768px) {
          grid-row: 4/7;
          grid-column: 5/7;
        }
        @media screen and (min-height: 1000px) and (max-height: 1024px) and (max-width: 768px) {
          grid-row: 4/7;
          width: 100%;
          height: 100%;
        }
        @media (max-width: ${({ theme }) => theme.mobil}) {
          grid-column: 3/6;
          grid-row: 2/4;
        }

        .img {
          width: 100%;
          height: 100%;
          transform-origin: bottom;
          height: 100%;
          @media (max-width: ${({ theme }) => theme.kobe}) {
            width: 100%;
          }
          img {
            border-radius: 1rem;
            width: 100%;
            @media (max-width: ${({ theme }) => theme.pics}) {
              width: 230px;
            }
            @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;

import styled from 'styled-components';

export const BannerStyled = styled.section`
  height: 100%;
  width: 100%;
  opacity: 0;
  padding: 3rem;
  overflow-x: hidden;
  height: 100vh;

  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;

  .banner-main {
    display: grid;
    height: 100%;
    width: 100%;
    padding: 16px;
    overflow: hidden;
    &-inner {
      overflow: hidden;
      width: 100%;
      height: 100%;
      grid-area: 1/1;
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(12, 1fr);
      /* grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr; */
      /* grid-template-rows: repeat(12, 8.33333%); */
      /* grid-template-rows: max-content; */
      /* grid-auto-flow: row dense; */

      .text {
        grid-column: 9/11;
        grid-row: 1 / 3;
        text-align: left;

        p {
          margin-top: -2.5rem;
          font-size: 8rem;
          color: #222;
        }
      }
      .text2 {
        grid-column: 3/13;
        grid-row: 5 / 10;
        text-align: center;
        position: relative;

        p {
          /* margin-top: -3.8rem; */
          /* margin-left: 3rem; */
          font-size: 6rem;
          color: #222;
          position: absolute;
          left: 40%;
          transform: translateX(-50%);
        }
      }
      .text3 {
        grid-column: 1/6;
        grid-row: 10 / 12;
        text-align: left;
        position: relative;

        p {
          /* margin-top: -3.8rem; */
          margin-left: -0.6rem;
          font-size: 8rem;
          color: #222;
        }
      }
      .texting {
        position: relative;
        height: 100%;
        grid-column: 1/4;
        grid-row: 1/4;
        /* opacity: 0; */
        /* overflow: hidden; */

        .img {
          width: 300px;
          height: 100%;
          position: relative;
          /* overflow: hidden; */
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
            width: 100%;
            /* height: 100%; */
          }
        }
      }
      .texting2 {
        position: relative;
        height: 100%;
        width: 100%;
        grid-column: 10/13;
        grid-row: 5/8;

        .img {
          width: 300px;
          height: 100%;
          transform-origin: bottom;
          height: 100%;
          /* overflow: hidden; */

          /* width: 250px;
          height: 400px; */
          /* height: 100%; */
          img {
            width: 100%;
            /* width: 100%;
            height: 100%; */
          }
        }
      }
    }
  }
`;

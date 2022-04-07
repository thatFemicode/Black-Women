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
        grid-column: 5/9;
        grid-row: 1 / span 3;
        text-align: center;

        p {
          font-size: 8.5rem;
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
          width: 90%;
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
          width: 90%;
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

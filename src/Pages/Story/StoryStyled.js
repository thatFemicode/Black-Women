import styled from "styled-components";

export const StoryStyled = styled.main`
  height: 100vh;
  overflow: hidden;
  background-color: #333;
  .slide {
    height: 100%;
    width: 100%;
    top: 0;
    position: fixed;
    visibility: hidden;
    overflow: hidden;
    &__outer,
    &__inner {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    &__content {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
    }

    &__container {
      position: relative;
      max-width: 1400px;
      width: 100vw;
      margin: 0 auto;
      height: 90vh;
      margin-bottom: 10vh;
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: repeat(10, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;
      padding: 0 1rem;
    }

    &__heading {
      --width: 200;
      display: block;
      text-align: left;
      /* font-family: "Bandeins Sans & Strange Variable"; */
      font-size: clamp(5rem, 15vw, 15rem);
      font-weight: 900;
      /* font-variation-settings: "wdth" var(--width); */
      color: #f2f1fc;
      z-index: 999;
      mix-blend-mode: difference;
      grid-area: 2 / 2 / 3 / 10;
      align-self: end;
    }

    &__img-cont {
      margin-top: 4rem;
      grid-area: 2 / 1 / 7 / 8;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .slide:nth-of-type(1) {
    visibility: visible;
    .slide__content {
      background-color: #6d597a;
    }
  }

  .slide:nth-of-type(2) {
    .slide__content {
      background-color: #355070;
    }
  }

  .slide:nth-of-type(3) {
    .slide__content {
      background-color: #b56576;
    }
  }

  .slide:nth-of-type(4) {
    .slide__content {
      background-color: #9a8c98;
    }
  }

  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;

    &__content {
      max-width: 1400px;
      width: 100vw;
      margin: 0 auto;
      padding: 0 1rem;
      height: 90vh;
      margin-bottom: 10vh;
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: repeat(10, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;
    }

    &__img-cont {
      position: relative;
      overflow: hidden;
      margin: 0;
      grid-area: 4 / 3 / 9 / 11;

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 50%;
      }
    }

    &__count {
      grid-area: 3 / 10 / 4 / 10;
      font-size: clamp(3rem, 4vw, 15rem);
      margin: 0;
      padding: 0;
      text-align: right;
      border-bottom: 7px white solid;
    }
  }

  @media screen and (min-width: 900px) {
    .overlay__content,
    .slide__container {
      padding: 0 3rem;
      margin-top: 10vh;
      height: 80vh;
    }

    .overlay__img-cont {
      grid-area: 5 / 4 / 10 / 11;
    }

    .overlay__count {
      grid-area: 3 / 10 / 4 / 11;
    }

    .slide__img-cont {
      margin-top: 0;
      grid-area: 3 / 2 / 8 / 7;
    }

    .slide__heading {
      grid-area: 1 / 1 / 4 / 10;
    }
  }
`;

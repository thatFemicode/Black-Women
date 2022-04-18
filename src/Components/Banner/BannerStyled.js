import styled from 'styled-components';

export const BannerStyled = styled.section`
  height: 100%;
  overflow: hidden;
  width: 100%;
  opacity: 0;
  position: relative;
  padding: 0 2rem;
  padding-top: 4rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
    height: 100%;
  }
  @media (max-width: ${({ theme }) => theme.mins}) {
    padding-top: 4rem;
  }
  @media (max-width: ${({ theme }) => theme.nav}) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.desktop}) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.min}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .banner-button {
    z-index: 1;
    position: absolute;
    top: 130px;
    right: 100px;
    @media (max-width: ${({ theme }) => theme.desktop}) {
      top: 550px;
      left: 20px;
    }
    @media (max-width: ${({ theme }) => theme.make}) {
      top: 500px;
      left: 20px;
    }
    @media (max-width: ${({ theme }) => theme.mobil}) {
      top: 450px;
      left: 20px;
    }
  }
  .banner-main {
    display: grid;
    height: 100%;
    width: 100%;
    padding: 3rem 0;
    position: relative;
    overflow: hidden;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
    @media (max-width: ${({ theme }) => theme.desktop}) {
      height: 100vh;
      padding: 2rem 0;
    }

    &-inner {
      /* overflow: hidden; */
      width: 100%;
      height: 100vh;
      grid-area: 1/1;
      display: grid;
      justify-content: center;
      align-items: center;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(12, 1fr);

      @media (max-width: ${({ theme }) => theme.dont}) {
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(6, 1fr);
      }
      @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
        height: 100%;
      }
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
      .ban1 {
        width: 100%;
        height: 100%;
        /* overflow: hidden; */
        grid-column-start: 1;
        grid-column-end: 7;
        grid-row-start: 1;
        grid-row-end: 7;
        @media (max-width: ${({ theme }) => theme.mins}) {
          grid-column-start: 1;
          grid-column-end: 7;
        }
        @media (max-width: ${({ theme }) => theme.dont}) {
          grid-column-start: 1;
          grid-column-end: 5;
          grid-row: 1/4;
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          grid-column: 1/5;
        }

        .main {
          width: 100%;
          display: flex;
          align-items: center;

          .image {
            width: 100%;
            height: 100%;
            .img {
              width: 100%;
              height: 100%;
              position: relative;
              overflow: hidden;
              transform-origin: top;
              height: 100%;

              img {
                width: 250px;
                border-radius: 1rem;

                @media (max-width: ${({ theme }) => theme.dont}) {
                  width: 210px;
                }
                @media (max-width: ${({ theme }) => theme.image}) {
                  width: 190px;
                }
                @media (max-width: ${({ theme }) => theme.desktop}) {
                  width: 180px;
                }
                @media (max-width: ${({ theme }) => theme.make}) {
                  width: 160px;
                }

                @media (max-width: ${({ theme }) => theme.mobil}) {
                  width: 130px;
                }
              }
            }
          }

          .text {
            flex: 1;
            @media (max-width: ${({ theme }) => theme.image}) {
              /* align-self: flex-start; */
              margin-top: 1rem;
            }
            @media (max-width: ${({ theme }) => theme.desktop}) {
              align-self: center;
            }

            p {
              font-size: 5rem;
              color: #222;

              @media screen and (min-height: 600px) and (max-height: 800px) and (max-width: 1280px) {
                font-size: 4.5rem;
              }

              @media (max-width: ${({ theme }) => theme.kobe}) {
                font-size: 4rem;
              }

              @media (max-width: ${({ theme }) => theme.dont}) {
                font-size: 4rem;
              }
              @media (max-width: ${({ theme }) => theme.desktop}) {
                font-size: 3rem;
              }
              @media (max-width: ${({ theme }) => theme.make}) {
                font-size: 2rem;
              }
            }
          }
        }
      }
      .ban2 {
        overflow: hidden;
        grid-column-start: 7;
        grid-column-end: 13;
        grid-row: 5/11;
        width: 100%;
        height: 100%;
        @media (max-width: ${({ theme }) => theme.mins}) {
          grid-column-start: 6;
          grid-column-end: 13;
        }

        @media (max-width: ${({ theme }) => theme.dont}) {
          grid-column-start: 3;
          grid-column-end: 7;
          grid-row: 3/7;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          grid-column-start: 2;
          grid-column-end: 7;
          grid-row: 4/7;
        }

        @media (max-width: ${({ theme }) => theme.make}) {
          grid-column: 2/7;
          grid-row: 4/7;
        }

        .main {
          width: 100%;
          display: flex;
          align-items: center;
          /* flex-direction: row-reverse; */
          /* align-items: center; */

          .image {
            height: 100%;
            .img {
              width: 100%;
              height: 100%;
              position: relative;
              overflow: hidden;
              transform-origin: bottom;
              height: 100%;

              img {
                width: 250px;
                border-radius: 1rem;

                @media (max-width: ${({ theme }) => theme.dont}) {
                  width: 210px;
                }
                @media (max-width: ${({ theme }) => theme.image}) {
                  width: 190px;
                }
                @media (max-width: ${({ theme }) => theme.desktop}) {
                  width: 180px;
                }

                @media (max-width: ${({ theme }) => theme.make}) {
                  width: 160px;
                }
                @media (max-width: ${({ theme }) => theme.mobil}) {
                  width: 130px;
                }
              }
            }
          }
          .text {
            flex: 1;

            @media (max-width: ${({ theme }) => theme.desktop}) {
              align-self: center;
            }
            p {
              font-size: 5rem;
              color: #222;

              @media screen and (min-height: 600px) and (max-height: 800px) and (max-width: 1280px) {
                font-size: 4.5rem;
              }

              @media (max-width: ${({ theme }) => theme.kobe}) {
                font-size: 4rem;
              }

              @media (max-width: ${({ theme }) => theme.dont}) {
                font-size: 4rem;
              }
              @media (max-width: ${({ theme }) => theme.desktop}) {
                font-size: 3rem;
              }
              @media (max-width: ${({ theme }) => theme.make}) {
                font-size: 2rem;
              }
            }
          }
        }
      }
      .ban3 {
        grid-column: 1/13;
        grid-row: 5/12;
        width: 100%;
        height: 100%;
        text-align: center;

        @media screen and (min-height: 500px) and (max-height: 600px) and (max-width: 1024px) {
          grid-row: 3/7;
        }
        @media (max-width: ${({ theme }) => theme.dont}) {
          grid-column-start: 1;
          grid-column-end: 7;
          grid-row: 3/7;
        }

        p {
          width: 100%;
          height: 100%;
          font-size: 4rem;
          color: #222;
          @media (max-width: ${({ theme }) => theme.kobe}) {
            font-size: 3.5rem;
            margin-top: 1rem;
          }
          @media (max-width: ${({ theme }) => theme.dont}) {
            font-size: 3rem;
            margin-top: -1rem;
          }

          @media (max-width: ${({ theme }) => theme.image}) {
            font-size: 2.7rem;
          }
          @media (max-width: ${({ theme }) => theme.desktop}) {
            margin-top: 3rem;
            font-size: 2.3rem;
          }

          @media (max-width: ${({ theme }) => theme.make}) {
            font-size: 2rem;
          }
          @media (max-width: ${({ theme }) => theme.mobil}) {
            font-size: 2rem;
          }
        }
      }
    }
  }
`;

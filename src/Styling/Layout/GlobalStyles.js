import { createGlobalStyle } from 'styled-components';
// import bg from "./Pages/Marketplace/img/noise.png";
const GlobalStyle = createGlobalStyle`


*{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    /* font-family: 'Space Grotesk', sans-serif; */
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight:500;
    text-decoration: none;
    font-size:100%;
    scroll-behavior:smooth;
    /* color: #0f2137; */
 

    /* font-size:1vw; */
    &:after{
     margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    }
    &:before{
     margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    }
}
html {
  scroll-behavior: smooth;
  cursor: none;
}
body{
  position:relative;
  /* background-color:#000; */
/* overflow: hidden; */
/* background-color: #f0eff1; */
overflow-x: hidden;
height:100%;
width:100%;
color:var(--black);


/* background-color:#e9dbd4; */
-ms-overflow-style: none; /* Internet Explorer 10+ */
scrollbar-width: none; /* Firefox */
&::-webkit-scrollbar {
 display: none;
}
}
img{
    max-width: 100%;
}
a{
text-decoration: none;
color:inherit;
}
li{
    list-style: none
}
.no-scroll{
  height:100vh;
  overflow:hidden;
  @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
         overflow:auto
          }
}

.load-screen1 {
  position: relative;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  background-color: #f6f8fb;
  width: 100%;
  height: 0%;
}
.load-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -13;
  pointer-events: none;
  display:flex;
  align-items: center;
  justify-content:center;
  background-color: #f6f8fb;
}
.load-screen {
  position: relative;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  background-color: #fff;
  width: 0%;
  height: 100%;
  display:flex;
  align-items: center;
  justify-content:center;
  svg {
opacity:0;
position: absolute;
width:400px;
height:400px;
left:50%;
transform:translateX(-50%);
@media screen and (max-width:450px){
  width:200px;
  height:200px;
  /* transform:translateX(-60%); */
}
@media screen and (max-width:376px){
  width:150px;
  height:150px;
  /* transform:translateX(-40%); */
}
path{
    fill-opacity:0;
    stroke-width:10;
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke-dasharray: 1500;
    transform-origin:50% 50%;
  }
  }
}
.Headd {
  opacity: 0;
  pointer-events: none;
}
.Headds {
  opacity: 1;
}
`;
export default GlobalStyle;

import { ThemeProvider } from "styled-components";
import { MainStyled } from "./Styling/MainStyled";
import { theme } from "./Styling/theme";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Story from "./Pages/Story/Story";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainStyled>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
        </Routes>
      </MainStyled>
    </ThemeProvider>
  );
}

export default App;

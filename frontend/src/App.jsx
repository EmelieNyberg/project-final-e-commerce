// App.jsx

import { BrowserRouter, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { routes } from "./routes/routes";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Banner />
          <Navbar />
          <Routes>{routes}</Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};
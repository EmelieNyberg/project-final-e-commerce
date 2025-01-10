// App.jsx

import { BrowserRouter, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { routes } from "./routes/routes";

import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* Navbar Emelie Lagt till 8 jan */}
        <Navbar />
        <Routes>{routes}</Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};
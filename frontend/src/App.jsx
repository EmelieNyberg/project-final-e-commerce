// App.jsx

import { BrowserRouter, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { routes } from "./routes/routes";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* Banner tillagt 9 jan */}
        <Banner />
        {/* Navbar Emelie Lagt till 8 jan */}
        <Navbar />
        <Routes>{routes}</Routes>
      </BrowserRouter>
    </>
  );
};
// App.jsx

import { BrowserRouter, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { routes } from "./routes/routes";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* Navbar Emelie Lagt till 8 jan */}
        <Navbar />
        <Routes>{routes}</Routes>
      </BrowserRouter>
    </>
  );
};
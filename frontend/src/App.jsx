// App.jsx

import { BrowserRouter, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { routes } from "./routes/routes";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Banner />
        <Navbar />
        <Routes>{routes}</Routes>
      </BrowserRouter>
    </>
  );
};
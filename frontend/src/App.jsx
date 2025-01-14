// App.jsx

import { BrowserRouter, Routes } from "react-router-dom";
// import { Navbar } from "./components/Navbar";
// import { Banner } from "./components/Banner";
import { routes } from "./routes/routes";
// import { TopCategories } from "./components/TopCategories";

// import { Footer } from "./components/Footer";


export const App = () => {
  return (
    <>
      <BrowserRouter>

        <Routes>{routes}</Routes>

      </BrowserRouter>

    </>
  );
};
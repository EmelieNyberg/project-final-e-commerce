// App.jsx

import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/routes";

export const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>{routes}</Routes>
      </BrowserRouter>
    </main>
  );
};
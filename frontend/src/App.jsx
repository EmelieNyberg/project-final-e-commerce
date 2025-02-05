// App.jsx

import { BrowserRouter, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { routes } from "./routes/routes";
import { Footer } from "./components/Footer";

// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");


export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* <Elements stripe={stripePromise}> */}
        <BrowserRouter>
          <Banner />
          <Navbar />
          <Routes>{routes}</Routes>
          <Footer />
        </BrowserRouter>
        {/* </Elements> */}
      </ThemeProvider>
    </>
  );
};
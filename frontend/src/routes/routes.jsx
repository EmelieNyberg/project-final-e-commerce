// routes.jsx

import { Home } from "../pages/Home";
import { AboutUs } from "../pages/AboutUs";
import { Contact } from "../pages/Contact";
import { MyAccount } from "../pages/MyAccount";
import { ProductDisplay } from "../pages/ProductDisplay";
import { ProductsPage } from "../pages/ProductsPage";
import { ShoppingCart } from "../pages/ShoppingCart";
import { SignUpPage } from "../pages/SignUpPage";
// import { CheckOut } from "../pages/CheckOut"; //

import { Route } from "react-router-dom";

export const routes = (
    <>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/checkout" element={<CheckOut />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDisplay />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/signup" element={<SignUpPage />} />
        {/* <Route path="/checkout" element={<CheckOut />} /> */}

        {/* <Route path="*" element={<PageNotFound />} /> */}
    </>
);
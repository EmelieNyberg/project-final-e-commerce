// Home.jsx

import { Banner } from "../components/Banner";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { TopCategories } from "../components/TopCategories";
import { Footer } from "../components/Footer";
import { ProductCard } from "../components/ProductCard";
import { ServiceBanner } from "../components/ServiceBanner";

export const Home = () => {
    return (
        <>
            <Banner />
            <Navbar />
            <Hero />
            <TopCategories />
            <ProductCard />
            <ServiceBanner />
            <Footer />
        </>
    );
};
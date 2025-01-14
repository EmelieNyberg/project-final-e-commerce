// Home.jsx

import { Hero } from "../components/Hero";
import { TopCategories } from "../components/TopCategories";
import { ProductCard } from "../components/ProductCard";
import { ServiceBanner } from "../components/ServiceBanner";

export const Home = () => {
    return (
        <>
            <Hero />
            <TopCategories />
            <ProductCard />
            <ServiceBanner />
        </>
    );
};
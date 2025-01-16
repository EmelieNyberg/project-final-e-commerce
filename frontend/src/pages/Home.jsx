import { useState, useEffect } from "react";
import { Hero } from "../components/Hero";
import { TopCategories } from "../components/TopCategories";
import { ProductCard } from "../components/ProductCard";
import { ServiceBanner } from "../components/ServiceBanner";

export const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch products:", err);
                setError("Failed to fetch products");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <Hero />
            <TopCategories />
            {/* Skicka produkterna till ProductCard */}
            <ProductCard products={products} />
            <ServiceBanner />
        </>
    );
};
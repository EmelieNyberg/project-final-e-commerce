// import { useState, useEffect } from "react";
import { Hero } from "../components/Hero";
import { TopCategories } from "../components/TopCategories";
import { NewArrivals } from "../components/NewArrivals";
import { ServiceBanner } from "../components/ServiceBanner";

export const Home = () => {
  return (
    <>
      <Hero />
      <TopCategories />
      <NewArrivals />
      <ServiceBanner />
    </>
  );
};

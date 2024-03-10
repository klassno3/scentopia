import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Discount from "../components/Discount";
import Brands from "../components/Brands";
import ProductList from "../components/ProductList/ProductList";
import { useLocation } from "react-router-dom";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    const sectionId = hash.substring(1);
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView();
    }
  }, [hash]);
  return (
    <div>
      <Hero />
      <Discount />
      <ProductList />
      <Brands />
    </div>
  );
}

import React from "react";
import Hero from "../components/Hero";
import Discount from "../components/Discount";
import Brands from "../components/Brands";
import ProductList from "../components/ProductList/ProductList";
import WomenPerfumeList from "../components/ProductList/WomenPerfumeList";

export default function Home() {
  return (
    <div>
      <Hero />
      <Discount />
      <ProductList />
      <WomenPerfumeList />
      <Brands />
    </div>
  );
}

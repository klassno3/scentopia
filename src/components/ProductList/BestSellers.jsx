import React from "react";
import { data } from "./data";
import ProductCard from "./ProductCard";
function BestSellers() {
  return (
    <div className="flex flex-col space-y-4 p-5">
      <div className="flex justify-between items-center md:justify-center ">
        <h1 className="text-3xl font-lobsterTwo font-bold text-black w-full  md:text-center mr-2  ">
          Best{" "}
          <span className="border-b-2 border-accentPink-dark">Sellers</span>
        </h1>
        <div>
          <select
            name="filter"
            id="filter"
            className="text-black p-2 bg-white rounded  focus:outline-none border-2 border-accentPink-dark md:ml-auto"
          >
            <option value="" selected disabled>
              Filter
            </option>
            <option ption value="brand">
              Brand
            </option>
            <option value="price">Price</option>
            <option value="arriveddate">Arrived Date</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 md:place-items-center md:grid md:grid-cols-3 lg:grid-cols-4">
        {data?.map((item, index) => (
          <ProductCard key={index} data={item} />
        ))}
      </div>
      <div className="p-2 text-center m-6 ">
        <button className="hover:text-accentPink-dark transition-colors duration-300 ease-in-out">
          see more ...
        </button>
      </div>
    </div>
  );
}

export default BestSellers;

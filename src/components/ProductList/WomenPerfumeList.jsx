import React from "react";
import { womenData } from "./data";
import WomenCard from "./WomenCard";
export default function WomenPerfumeList() {
  return (
    <div className="flex flex-col h-auto w-full  ">
      <div id="newArrivals" className="flex flex-col space-y-4 p-2">
        <div className="flex justify-between items-center md:justify-center gap-2">
          <h1 className="text-2xl md:text-3xl font-lobsterTwo font-bold text-black w-full  md:text-center">
            Women's{" "}
            <span className="border-b-2 border-accentPink-dark">Perfume</span>
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
          {womenData?.map((item, index) => (
            <WomenCard key={index} womenData={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

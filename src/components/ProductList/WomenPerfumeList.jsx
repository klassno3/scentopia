import React, { useState } from "react";
import ProductCard from "./ProductCard";
import eye from "../../assets/images/eye.png";
import hide from "../../assets/images/hide.png";
export default function WomenPerfumeList({ data }) {
  const filteredData = data?.filter((item) => {
    return item.gender === "women";
  });
  const result = Math.min(8, filteredData?.length);
  const womenPerfume = filteredData?.slice(0, result); //showing only 8 prodcuts first
  const others = filteredData?.slice(result);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="flex flex-col h-auto w-full">
      <div className="flex flex-col space-y-4 p-5">
        <div className="flex flex-col gap-4 justify-center items-center text-center md:flex-row">
          <h1 className="text-3xl font-lobsterTwo font-bold text-black w-full  md:text-center mr-2">
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
          {womenPerfume?.map((item, index) => (
            <ProductCard key={index} data={item} />
          ))}
          {showMore &&
            others?.map((item, index) => (
              <ProductCard key={index} data={item} />
            ))}
        </div>
      </div>
      <div className="p-2 text-center m-6 ">
        <button
          className="hover:text-accentPink-dark transition-colors duration-300 ease-in-out"
          onClick={handleShowMore}
        >
          {showMore ? null : (
            <div className="flex items-center">
              <span>Show More</span>
              <img src={eye} className="ml-1 mt-1 w-4 h-4" alt="eye" />
            </div>
          )}
          {showMore && others.length > 0 ? (
            <div className="flex items-center">
              <span>Show Less</span>
              <img src={hide} className="ml-1 mt-1 w-4 h-4" alt="hide" />
            </div>
          ) : null}
        </button>
      </div>
    </div>
  );
}

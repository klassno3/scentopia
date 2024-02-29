import React from "react";
import WomenPerfumeList from "./WomenPerfumeList";
import BestSellers from "./BestSellers";
import MenPerfumeList from "./MenPerfumeList";
export default function ProductList() {
  return (
    <div className="flex flex-col h-auto w-full  ">
      <div id="bestSeller">
        <BestSellers />
      </div>
      <div id="womenPerfume">
        <WomenPerfumeList />
      </div>
      <div id="menPerfume">
        <MenPerfumeList />
      </div>
    </div>
  );
}

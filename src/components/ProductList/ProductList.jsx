import React from "react";
import { data } from "./data";
import WomenPerfumeList from "./WomenPerfumeList";
import BestSellers from "./BestSellers";
import MenPerfumeList from "./MenPerfumeList";
export default function ProductList() {
  return (
    <div className="flex flex-col h-auto w-full  ">
      <div id="bestSeller">
        <BestSellers data={data} />
      </div>
      <div id="womenPerfume">
        <WomenPerfumeList data={data} />
      </div>
      <div id="menPerfume">
        <MenPerfumeList data={data} />
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../components/ProductList/data";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import CurrencyFormatter from "../components/CurrencyFormatter";
import Rating from "@mui/material/Rating";

export default function ProductDetail() {
  const { id } = useParams();
  const product = data.find((item) => item.id == id);
  return (
    <>
      {/*showing path first */}
      {/* <div className="flex flex-col"> */}
      <div className="flex items-center mt-36 ml-4">
        <Link to="/">
          <MdOutlineKeyboardArrowLeft className="text-gray-500" size={25} />
        </Link>
        <span className="text-gray-600 font-bold ml-1 text-xl font-montserrat">
          Home / products / {product?.title}
        </span>
      </div>
      <div className="flex  ">
        <img
          src={product?.image}
          alt={product?.title}
          className="w-1/2 h-full object-contain"
        />
        <div className="flex flex-col w-1/2 ">
          <h1 className="text-3xl font-montserrat font-bold text-black w-full m-4  ">
            {product?.title}
          </h1>
          <p className="text-black mb-4 font-montserrat-400 line-clamp-3">
            {product?.description}
          </p>
          <div className="flex flex-col items-center w-[200px] h-auto">
            <img
              src={product?.image}
              alt="size"
              className=" h-[200px] w-[200px]"
            />
            <p className="text-bold underline ">{product?.size}</p>
          </div>
          <div className="text-accentPink-dark text-2xl my-4 mx-5 font-montserrat">
            <CurrencyFormatter amount={product?.price} />
          </div>
          <div className="flex items-center m-4">
            <Rating name="read-only" value={product.rating} readOnly />
            <span className="text-gray-600 font-bold ml-1 text-md font-montserrat">
              {product?.ratedBy}
            </span>
          </div>
          <button className="bg-[#ffe5ed] text-accentPink-dark px-4 py-2 shadow-xl hover:shadow-lg rounded w-1/4 m-4">
            Add To Cart
          </button>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

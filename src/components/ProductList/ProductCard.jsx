import {useContext} from "react";
import CurrencyFormatter from "../CurrencyFormatter";
import { CartContext } from '../../context/CartContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function ProductCard({ data }) {
  const { id, title, image, desc, price } = data;
   const { addToCart } = useContext( CartContext );
  return (
    <div
      className="flex flex-col  p-3"
      style={{ width: "276px", height: "auto" }}
    >
      <Link to={`/product/${id}`} className="w-full h-full flex justify-start ">
        {" "}
        {/* routing to product page with the given product id to show details */}
        <img
          src={image}
          alt="product"
          className="  object-contain "
          style={{ width: "189", height: "142px" }}
        />
      </Link>
      <div className=" p-3 flex flex-col justify-between">
        <p className="text-sm font-montserrat font-semibold">{title}</p>
        <h2 className="font-montserrat font-bold">{desc}</h2>
        <div className="font-montserrat text-accentPink-dark font-bold mb-2">
          <CurrencyFormatter amount={price} />
        </div>
        <div className="gap-4 flex">
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              backgroundColor: "#Acacac",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
               
              <div onClick={()=> addToCart( data, id)} className='cursor-pointer  relative w-10 h-10 rounded-full bg-primary-200 hover:bg-primary-300'>
            <FontAwesomeIcon
              icon={faCartShopping}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  reflect text-xl  cursor-pointer hover:scale-125 transition-all duration-500 ease-in-out"
              style={{ color: "#fff", width: "21px", height: "21px" }}
            />
              </div>
          </div>
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              backgroundColor: "#Acacac",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faHeart}
              className="reflect text-xl cursor-pointer hover:scale-125 transition-all duration-500 ease-in-out"
              style={{ color: "#fff", width: "21px", height: "21px" }}
            />
          </div>
        </div>
        <button className="bg-accentPink-dark text-white px-4 py-2 shadow-xl hover:shadow-lg rounded mt-4 md:w-32 lg:w-32">
          Buy
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

import React from "react";
import img1 from "../assets/images/pngwing.com (1).png";
import img2 from "../assets/images/pngwing.com (2).png";
import img3 from "../assets/images/pngwing.com (3).png";
import img4 from "../assets/images/pngwing.com.png";

export default function Discount() {
  return (
    <div className="flex items-center justify-center  bg-accentPink-dark px-8 py-4">
      <div className="hidden md:flex flex-col w-1/2  space-y-4">
        <img
          src={img1}
          alt="Perfume"
          className="w-40 h-40 md:display-none"
          style={{ transform: "rotate(30deg)" }}
        />
        <div className="flex justify-right ml-20">
          <img src={img2} alt="versace" className="w-40 h-40 align-right " />
        </div>
      </div>
      <div className="w-full flex flex-col items-center md:items-start  lg:items-start text-center ">
        <div className="w-full flex flex-col space-y-4 items-center justify-center ">
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat text-white mb-4">
            Shop winter deals
          </h1>
          <p className="text-white text-lg md:text-xl mb-4 font-montserrat">
            At FrangranceY.com, our mission is to provide you with the largest
            selection of perfumes and colognes at the cheapest prices.
          </p>
          <button className="bg-white text-black px-4 py-2 shadow-xl font-miriamLibre hover:bg-accentPink-light hover:text-white   rounded my-4 transition-all duration-500 ease-in-out">
            Shop Now
          </button>
        </div>

        <div
          className="text-white bg-accentPink-light w-40 h-40 md:w-40 md:h-40 lg:w-40 lg:h-40  md:ml-10 lg:ml-10 text-2xl md:text-3xl lg:text-3xl flex justify-center items-center 
          font-miriam shadow-lg rounded-full mt-4 "
          style={{
            borderRadius: "50%",
          }}
        >
          <p>20% OFF</p>
        </div>
      </div>
      <div className=" hidden md:flex flex-col items-center w-1/2  space-y-4 ">
        <div>
          <img
            src={img3}
            alt="coco"
            className="w-40 h-40 "
            style={{ transform: "rotate(-20deg)" }}
          />
        </div>

        <img
          src={img4}
          alt="gucci"
          className="w-40 h-40 "
          style={{ transform: "rotate(10deg)" }}
        />
      </div>
    </div>
  );
}
// import React from "react";
// import img1 from "../assets/images/pngwing.com (1).png";
// import img2 from "../assets/images/pngwing.com (2).png";
// import img3 from "../assets/images/pngwing.com (3).png";
// import img4 from "../assets/images/pngwing.com.png";

// // export default function Discount() {
//   return (
//     <div className="flex flex-col items-center justify-center bg-accentPink-dark px-4 py-2 md:px-8 md:py-4 lg:px-16 lg:py-8">
//       <div className="flex flex-col space-y-4 items-center md:flex-row md:space-x-4 md:space-y-0">
//         <img
//           src={img1}
//           alt="Perfume"
//           className="w-40 h-40 transform rotate-30"
//         />
//         <img
//           src={img2}
//           alt="Versace"
//           className="w-40 h-40 transform rotate-0 md:transform rotate-0 md:ml-20"
//         />
//       </div>
//       <div className="text-center w-full md:w-1/2 lg:w-1/2 mx-4 md:mx-10 px-4 md:px-10 lg:px-16">
//         <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold font-miriamLibre text-white mb-4">
//           Shop winter deals
//         </h1>
//         <p className="text-white mb-4 font-montserrat">
//           At FrangranceY.com, our mission is to provide you with the largest
//           selection of perfumes and colognes at the cheapest prices.
//         </p>
//         <button className="bg-white text-black px-4 py-2 shadow-xl hover:shadow-lg rounded mt-4">
//           Shop Now
//         </button>
//         <div className="bg-accentPink-light text-white w-20 h-20 md:w-40 md:h-40 lg:w-40 lg:h-40 ml-4 md:ml-10 lg:ml-10 text-2xl md:text-3xl lg:text-3xl flex justify-center items-center font-lobsterTwo shadow-lg rounded-full mt-4 md:mt-0 lg:mt-0">
//           <p>20% OFF</p>
//         </div>
//       </div>
//       <div className="flex flex-col items-center space-y-4 mt-4 md:mt-0 lg:mt-0">
//         <img src={img3} alt="Coco" className="w-40 h-40 transform rotate--20" />
//         <img src={img4} alt="Gucci" className="w-40 h-40 transform rotate-10" />
//       </div>
//     </div>
//   );
// }

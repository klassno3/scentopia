import image12 from "../assets/images/image 12.png";
import image13 from "../assets/images/image 13.png";
import image14 from "../assets/images/image 14.png";
import image15 from "../assets/images/image 15.png";
import image16 from "../assets/images/image 16.png";
import image17 from "../assets/images/image 17.png";
import image18 from "../assets/images/image 18.png";
import image19 from "../assets/images/image 19.png";

export default function Brands() {
  return (
    <div className="bg-gradient-to-br from-accentPink-dark to-accentPink-light flex flex-col text-center p-4 gap-14">
      <h1 className="mt-7 text-white font-Montserrat text-2xl lg:text-3xl">
        Popular{" "}
        <span className="relative">
          <span className="absolute -bottom-1 left-0 w-full h-[0.05em] rounded-full bg-white"></span>
          <span className="">brands</span>
        </span>
      </h1>
      <div className="flex lg:flex-col p-2">
        <div className="flex flex-wrap items-center justify-evenly gap-6">
          <img src={image12} className="w-28 md:w-46" alt="chanel" />
          <img src={image13} className="w-28 md:w-[9rem]" alt="dior" />
          <img src={image14} className="w-36 md:w-[9rem]" alt="gucci" />
          <img src={image15} className="w-40 md:w-72" alt="calvin" />
        </div>
        <div className="flex flex-wrap items-center justify-evenly gap-16">
          <img src={image16} className="w-28 md:w-44" alt="versace" />
          <img src={image17} className="w-28 md:w-52" alt="dolce" />
          <img src={image18} className="w-36 md:w-52" alt="armani" />
          <img src={image19} className="w-40 md:w-52" alt="YSL" />
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState, useRef ,useContext} from "react";
import { Link } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/images/Logo.svg";
import Search from "./Search";
import { SidebarContext } from '../context/SidebarContext';
import { CartContext } from '../context/CartContext';
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const location = useLocation();
    const { itemAmount } = useContext( CartContext );

    const { isSidebarOpen, setIsSidebarOpen } = useContext( SidebarContext )

  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);

  const genericHamburgerLine = `h-[3px]  w-7 md:w-10 my-[3px] rounded-full bg-[#444] transition ease transform duration-300`;

  useEffect(() => {
    const isActive = () => {
      window.scrollY > 0 ? setActive(true) : setActive(false);
      // scroll event handling logic
    };

    window.addEventListener("scroll", isActive);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  // takes it to the top when we switch pages

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const divEl = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler, true);
    };
  });
  return (
    <div
      className={`w-full z-40 ${
        active
          ? "bg-text-white z-40 shadow-xl font-poppins  fixed top-0 left-0  "
          : "bg-text-light-gray fixed top-0 left-0  "
      }`}
    >

      <div className="px-2 md:px-8 w-full max-w-[1440px] mx-auto flex  justify-between items-center">
        <RouterLink to="/" className="lg:w-1/7 cursor-pointe">
          <img className=" w-16 md:w-20 py-1" src={Logo} alt="" />
        </RouterLink>

        {location.pathname === "/" && (
          <div className="hidden lg:flex lg:w-1/2  font-montserrat   text-base justify-center items-start  gap-3 lg:gap-5">
            <Link
              to="bestSeller"
              activeClass="current"
              smooth={true}
              spy={true}
              offset={-150}
              className=" relative cursor-pointer z-10 transition-all bg-[-100%] duration-500 bg-[length:200%_100%] text-transparent bg-text-gradient bg-clip-text hover:bg-[0%]"
            >
              Best Sellers
            </Link>
            <Link
              to="womenPerfume"
              activeClass="current"
              smooth={true}
              spy={true}
              offset={-150}
              className=" relative cursor-pointer z-10 transition-all bg-[-100%] duration-500 bg-[length:200%_100%] text-transparent bg-text-gradient bg-clip-text hover:bg-[0%]"
            >
              Women's Perfume
            </Link>
            <Link
              to="menPerfume"
              activeClass="current"
              smooth={true}
              spy={true}
              offset={-150}
              className=" relative cursor-pointer z-10 transition-all bg-[-100%] duration-500 bg-[length:200%_100%] text-transparent bg-text-gradient bg-clip-text hover:bg-[0%]"
            >
              Men Perfume
            </Link>

            <Link
              to="brands"
              activeClass="current"
              smooth={true}
              spy={true}
              offset={-150}
              className=" relative cursor-pointer z-10 transition-all bg-[-100%] duration-500 bg-[length:200%_100%] text-transparent bg-text-gradient bg-clip-text hover:bg-[0%]"
            >
              Brands
            </Link>
          </div>
        )}

        <div className="hidden w-[40%] lg:flex items-center gap-5 font-montserrat justify-end">
          {location.pathname === "/" && <Search />}
          <FontAwesomeIcon
            icon={faHeart}
            className="reflect text-xl cursor-pointer hover:scale-125 transition-all duration-500 ease-in-out"
            style={{ color: "#444" }}
          />
          <div className="relative">

          <FontAwesomeIcon
            onClick={()=>setIsSidebarOpen(!isSidebarOpen)}
            icon={faCartShopping}
            className="reflect text-xl  cursor-pointer hover:scale-125 transition-all duration-500 ease-in-out"
            style={{ color: "#444" }}
            />
               <div className="absolute -top-1 -right-3 bg-accentPink-dark text-white w-4 h-4 text-xs rounded-full px-2">
              <div className="flex justify-center text-secondary-100">
             {itemAmount}

              </div>
            </div>
            </div>
          <RouterLink
            to="/signup"
            className=" relative cursor-pointer z-10 transition-all bg-[-100%] duration-500 bg-[length:200%_100%] text-transparent bg-text-gradient bg-clip-text hover:bg-[0%]"
          >
            Sign Up
          </RouterLink>
        </div>

        <div
          ref={divEl}
          className="flex justify-end items-center gap-5 relative lg:hidden"
        >
          {/* mobile menu */}

          <FontAwesomeIcon
            icon={faHeart}
            className="justify-start reflect text-xl cursor-pointer hover:scale-125 transition-all duration-500 ease-in-out"
            style={{ color: "#444" }}
          />
             <div className="relative">

          <FontAwesomeIcon
            onClick={()=>setIsSidebarOpen(!isSidebarOpen)}
            icon={faCartShopping}
            className="reflect text-xl  cursor-pointer hover:scale-125 transition-all duration-500 ease-in-out"
            style={{ color: "#444" }}
            />
               <div className="absolute -top-1 -right-3 bg-accentPink-dark text-white w-4 h-4 text-xs rounded-full px-2">
              <div className="flex justify-center text-secondary-100">
             {itemAmount}

              </div>
            </div>
            </div>
         
          {location.pathname === "/" && (
            <button
              className="flex flex-col h-12 w-z  rounded justify-center items-center group"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={` transition-all duration-500 ${genericHamburgerLine}
           ${
             isOpen
               ? "rotate-[405deg] translate-y-[6px]   group-hover:scale-105"
               : " group-hover:-translate-y-[3px]"
           }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <div
                className={` transition-all duration-300 ${genericHamburgerLine} ${
                  isOpen
                    ? "-rotate-[45deg]  -translate-y-[12px]  group-hover:scale-105"
                    : " group-hover:translate-y-[2px]"
                }`}
              />
            </button>
          )}
        </div>
      </div>

      <div
        className={`z-50  shadow-md transition-all duration-300 flex justify-center pt-32 absolute overflow-x-hidden h-screen translate-x-0  w-3/4  top-[74.5px] ${
          active ? " bg-text-white/95" : " bg-text-light-gray"
        } ${isOpen ? "lg:hidden right-0 " : "-right-full"}`}
      >
        <div className="flex flex-col font-montserrat text-base gap-5">
          {location.pathname === "/" && (
            <div className="pl-12 sm:pl-0">
              <Search />
            </div>
          )}
          <RouterLink
            to="/signup"
            onClick={() => setIsOpen(false)}
            className="pl-12 sm:pl-0 text-sm md:text-base relative cursor-pointer z-10 transition-all bg-[-100%] duration-500 bg-[length:200%_100%] text-transparent bg-text-gradient bg-clip-text hover:bg-[0%]"
          >
            Sign Up
          </RouterLink>

          {location.pathname === "/" && (
            <div className="flex flex-col font-montserrat text-sm md:text-base gap-5 pl-12 sm:pl-0">
              <Link
                onClick={() => setIsOpen(false)}
                to="womenPerfume"
                activeClass="current"
                smooth={true}
                spy={true}
                offset={-150}
                className=" relative cursor-pointer z-10 transition-all bg-[-100%] duration-500 bg-[length:200%_100%] text-transparent bg-text-gradient bg-clip-text hover:bg-[0%]"
              >
                Women's Perfume
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                to="menPerfume"
                activeClass="current"
                smooth={true}
                spy={true}
                offset={-150}
                className=" relative cursor-pointer z-10 transition-all bg-[-100%] duration-500 bg-[length:200%_100%] text-transparent bg-text-gradient bg-clip-text hover:bg-[0%]"
              >
                Men Perfume
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                to="bestSeller"
                activeClass="current"
                smooth={true}
                spy={true}
                offset={-150}
                className=" relative cursor-pointer z-10 transition-all bg-[-100%] duration-500 bg-[length:200%_100%] text-transparent bg-text-gradient bg-clip-text hover:bg-[0%]"
              >
                Best Sellers
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                to="brands"
                activeClass="current"
                smooth={true}
                spy={true}
                offset={-150}
                className=" relative cursor-pointer z-10 transition-all bg-[-100%] duration-500 bg-[length:200%_100%] text-transparent bg-text-gradient bg-clip-text hover:bg-[0%]"
              >
                Brands
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navigation;

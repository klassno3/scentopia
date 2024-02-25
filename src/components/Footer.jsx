import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/images/Logo.svg";

export default function Footer() {
  return (
    <div className="w-full px-4 pt-4 2xl:px-8 2xl:pt-8 ">
      <div
        className="grid grid-cols-1  gap-8 justify-center justify-items-center md:grid-cols-2 max-w-[1500px] mx-auto
      "
      >
        <div className="w-full flex flex-col md:flex-row gap-2 text-[#4A4A4A] items-center text-center md:items-start md:text-left">
          <img src={logo} alt="scentopia logo" className="w-24" />
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="font-light text-sm max-w-[25em]">
              Discover captivating fragrances at Scentopia. Find your signature
              scent among our curated collection of top brands and niche
              artisans.
            </p>
            <div className="flex justify-center gap-6">
              <a href="/" target="_blank">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="reflect text-2xl cursor-pointer hover:scale-125 transition-all duration-500 ease-in-out"
                  style={{ color: "#1DA1F2" }}
                />
              </a>
              <a href="/" target="_blank">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="reflect text-2xl cursor-pointer hover:scale-125 transition-all duration-500 ease-in-out"
                  style={{ color: "#E4405F" }}
                />
              </a>
              <a href="/" target="_blank">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="reflect text-2xl cursor-pointer hover:scale-125 transition-all duration-500 ease-in-out"
                  style={{ color: "#1877F2" }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-fit flex flex-col text-center md:text-left gap-3">
          <h3 className="font-medium md:text-left">Help and Support</h3>
          <p className="font-light text-sm md:text-left">Contact us</p>
          <p className="font-light text-sm md:text-left">
            Terms and Conditions
          </p>
          <p className="font-light text-sm md:text-left">Privacy Policy</p>
        </div>
        <div className="md:col-span-2 mb-2">
          <p className="text-xs font-light text-center">@2024 Scentopia</p>
        </div>
      </div>
    </div>
  );
}

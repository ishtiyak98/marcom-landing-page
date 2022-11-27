import React from "react";
import BgImg from "../assets/background-marcom-image.png";
import { GiArcheryTarget } from "react-icons/gi";
import { AiOutlinePieChart } from "react-icons/ai";
import { AiOutlineBulb } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const HomeBanner = () => {
  return (
    <section
      className="h-[90vh] flex items-center bg-no-repeat bg-cover bg-right-bottom px-24 relative"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="space-y-8">
        <div>
          <h4 className="text-3xl uppercase font-semibold text-[#00DBB9] montserrat-font tracking-wide">
            we are the creative
          </h4>
          <h2 className="text-6xl uppercase font-semibold text-white montserrat-font">
            Marketing <br /> Agency
          </h2>
        </div>
        <p className="w-[450px] text-white text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
          voluptate rerum? Non tenetur ipsam animi temporibus.
        </p>
        <button className="uppercase montserrat-font text-white text-lg bg-transparent border-2 border-white px-8 py-2 rounded-full hover:text-[#00DBB9] hover:border-[#00DBB9]">
          See More
        </button>
        <div className="flex space-x-6 pt-4">
          <GiArcheryTarget className="text-6xl text-pink-600 bg-white rounded-full p-3 cursor-pointer"></GiArcheryTarget>
          <AiOutlinePieChart className="text-6xl text-[#00DBB9] bg-white rounded-full p-3 cursor-pointer"></AiOutlinePieChart>
          <AiOutlineBulb className="text-6xl text-[#FFB000] bg-white rounded-full p-3 cursor-pointer"></AiOutlineBulb>
        </div>
      </div>
      <div className="absolute bottom-8 right-24 space-y-4">
        <FaInstagram className="text-4xl text-[#101928] hover:text-pink-600 bg-[#00DBB9] p-2 rounded-full cursor-pointer"></FaInstagram>
        <FaFacebookF className="text-4xl text-[#101928] hover:text-pink-600 bg-[#00DBB9] p-2 rounded-full cursor-pointer"></FaFacebookF>
        <FaTwitter className="text-4xl text-[#101928] hover:text-pink-600 bg-[#00DBB9] p-2 rounded-full cursor-pointer"></FaTwitter>
        <FaWhatsapp className="text-4xl text-[#101928] hover:text-pink-600 bg-[#00DBB9] p-2 rounded-full cursor-pointer"></FaWhatsapp>
      </div>
    </section>
  );
};

export default HomeBanner;

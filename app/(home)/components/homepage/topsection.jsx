import React from "react";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Topsection = () => {
  return (
    <div className="px-4 py-2 sm:px-12 sm:py-4 flex flex-wrap justify-between items-center bg-[#0F4077] text-white">
      <div className="flex gap-4 md:gap-6 items-center flex-wrap">
        <p className="flex gap-1 items-center text-xs sm:text-sm md:text-base">
          <MdOutlinePhoneAndroid className="w-4 h-4 sm:w-5 sm:h-5" />
          0495-2963244
        </p>
        <p className="flex gap-1 items-center text-xs sm:text-sm md:text-base">
          <IoIosMail className="w-5 h-5 sm:w-6 sm:h-6" />
          casthamarassery@gmail.com
        </p>
      </div>
      <div className="flex gap-2 mt-2 sm:mt-0">
        <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
        <FaFacebookSquare className="w-4 h-4 sm:w-5 sm:h-5" />
        <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
        <FaYoutube className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
    </div>
  );
};

export default Topsection;

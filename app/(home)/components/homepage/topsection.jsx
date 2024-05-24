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
    <div className="px-12 py-4  justify-between sm:flex w-full bg-[#0F4077] text-white hidden ">
      <div className=" flex gap-6">
        <p className="flex gap-1 items-center">
          <MdOutlinePhoneAndroid className="w-5 h-5" />
          0495 123 123 123
        </p>
        <p className="flex gap-1 items-center">
          <IoIosMail className="w-6 h-6" /> casthamarassery@email.com
        </p>
      </div>
      <div className="flex gap-2">
        <FaInstagram />
        <FaFacebookSquare />
        <FaLinkedin />
        <FaYoutube />
      </div>
    </div>
  );
};

export default Topsection;

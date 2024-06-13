import React from "react";
import filled from "../../assets/svgs/filled.svg";
import { FaBehanceSquare, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="">
        <div className="flex flex-col bg-zinc-800 rounded-t-xl px-8 md:px-24">
          <div className="flex justify-between items-center border-b-[1px] py-12 border-gray-600">
            <div className="text-white text-3xl md:text-[4rem]">
              Lets Connect{" "}
            </div>
          </div>
          <div className="py-9 flex flex-col md:flex-row border-b-[1px] border-gray-600">
            <div className="basis-1/2 text-white text-xl">
              Got a project? Let’s Talk
              <div className="flex my-2 gap-4">
                <FaLinkedin
                  className="h-8 w-8 cursor-pointer"
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/sejal-vatta-557641205/",
                      "_blank"
                    );
                  }}
                />
                <FaBehanceSquare
                  className="h-8 w-8 cursor-pointer"
                  onClick={() => {
                    window.open("https://www.behance.net/arshiazz", "_blank");
                  }}
                />
                <MdMail
                  className="h-8 w-8 cursor-pointer"
                  onClick={() => {
                    window.open("mailto:sejalvatta7@gmail.com");
                  }}
                />
              </div>
            </div>
            <div className="basis-1/2 flex justify-between">
              <div className="flex flex-col gap-2">
                <div className="text-red-400 text-xl mb-2">Navigation</div>
                <div
                  onClick={() => {
                    navigate("/");
                  }}
                  className="text-white cursor-pointer"
                >
                  Home
                </div>
                <div
                  onClick={() => {
                    navigate("/about");
                  }}
                  className="text-white cursor-pointer"
                >
                  About Me
                </div>
                <div
                  onClick={() => {
                    navigate("/resume");
                  }}
                  className="text-white cursor-pointer"
                >
                  Resume
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-red-400 text-xl mb-2">Contact</div>
                <div
                  onClick={() => {
                    window.open("mailto:sejalvatta7@gmail.com", "_blank");
                  }}
                  className="text-white cursor-pointer"
                >
                  sejalvatta7@gmail.com
                </div>
                <div
                  onClick={() => {
                    window.open("www.sejal-portfolio.in");
                  }}
                  className="text-white cursor-pointer"
                >
                  www.sejal-portfolio.in
                </div>
              </div>
              <div className="hidden md:flex flex-row h-fit">
                <input
                  className="p-2 rounded-l-lg"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                />
                <div className="bg-red-400 flex justify-center items-center p-2 rounded-r-lg">
                  <img src={filled} alt="" srcset="" />
                </div>
              </div>
            </div>
          </div>
          <div className="py-9 flex flex-col md:flex-row justify-between">
            <div className="text-white">
              Copyright© 2024 All Rights Reserved.
            </div>
            <div className="text-white md:text-sm text-xs">
              Designed By{" "}
              <span
                className="text-red-400 cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/sejal-vatta-557641205/",
                    "_blank"
                  );
                }}
              >
                Sejal
              </span>
              , Developed By{" "}
              <span
                className="text-red-400 cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/mahaboobshaik-developer/",
                    "_blank"
                  );
                }}
              >
                Mahaboob
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

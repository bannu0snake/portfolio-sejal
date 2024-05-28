import React, { useEffect, useState } from "react";
import Arrow from "../../assets/svgs/Arrow.svg";
import FiveIconsCircle from "./FiveIconsCircle.jsx";
import upRight from "../../assets/svgs/upRight.svg";
import filled from "../../assets/svgs/filled.svg";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import About from "../about/About.jsx";
import Work from "../work/Work.jsx";
import { FaBehanceSquare, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Project from "../project/Project.jsx";
import HamburgerMenu from "../../components/HamburgerMenu";
const fonts = ["font-play", "font-pecita", "font-pinyon"];
const Info = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      // Update the value every second
      const prevValue = value;
      const newValue = (prevValue + 1) % fonts.length;
      console.log("prevValue, newValue: ", prevValue, newValue);
      setValue(newValue);
    }, 1000);
  }, [value]);
  return (
    <div>
      <div className="flex flex-col md:flex-row ml-4 md:ml-24 mt-12 md:my-24">
        <div className="basis-1/2">
          <div className="font-pecita text-4xl md:text-6xl text-stone-200 ">
            Hey!
          </div>
          <div className="my-8">
            <span className="text-stone-200 text-xl md:text-5xl font-semibold font-openSans leading-4">
              This is{" "}
            </span>
            <span className="text-red-400 text-xl md:text-5xl font-semibold font-openSans leading-4">
              Sejal
            </span>
            <span className="text-stone-200 text-xl md:text-5xl font-semibold font-openSans">
              , a{" "}
            </span>
            <span
              className={`text-stone-200 font-normal ${fonts[value]} leading-4 text-5xl hidden md:inline-block`}
            >
              <div className="w-48 hidden md:inline-block">{`Designer`}</div>
            </span>
            <span
              className={`text-stone-200 font-normal ${fonts[value]} leading-4 text-xl inline-block md:hidden`}
            >
              <div className="w-20 md:hidden inline-block">{`Designer`}</div>
            </span>
            <span className="text-stone-200 text-xl md:text-5xl font-semibold font-font-openSans">
              {" "}
              on a mission to make your online presence stand out in a crowded
              digital landscape.
            </span>
          </div>
          <div className="mt-4 md:mt-20 hidden md:block">
            {/* <Link to="#work"> */}
            <div
              className="w-fit pl-3 h-12 relative bg-red-400 rounded-full flex justify-end items-center gap-2 cursor-pointer"
              onClick={() => {
                window.scrollBy({
                  top: window.innerHeight,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              <div className="text-white text-lg font-semibold font-openSans mx-auto">
                View My Work
              </div>
              <div className="w-11 h-11 bg-violet-50 rounded-full mr-1 flex justify-center items-center">
                <div className="w-2 h-2">
                  <img src={Arrow} alt="" srcset="" />
                </div>
              </div>
            </div>
            {/* </Link> */}
          </div>
        </div>
        <div className="mx-auto flex md:items-end scale-75 md:scale-100">
          <FiveIconsCircle />
        </div>
      </div>
      <div className="text-center md:text-right italic font-openSans md:text-xl text-stone-200 font-semibold mb-20 text-base mr-1 md:mr-12">
        A designer by degree and choice
      </div>

      <div id="work">
        <Work />
      </div>
    </div>
  );
};
const Landing = () => {
  const navigate = useNavigate();
  const openPdf = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1exxL5ke3vikNP2TMVwfK3Vy_OIBpiSGY/view"; // Replace with your PDF URL
    window.open(pdfUrl, "_blank");
  };
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between mx-4 md:mx-24 md:mt-10 mt-5 py-1">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="flex flex-row gap-3 cursor-pointer"
        >
          <div className="bg-white w-[5rem] h-8 rounded-r-full"></div>
          <div className="flex flex-col text-white items-start justify-start leading-[80%] gap-1 text-base font-semibold font-openSans">
            <p>Sejal</p>
            <p>Vatta</p>
          </div>
        </div>
        <div className="text-white hidden md:flex justify-end gap-2 md:gap-10 font-openSans md:text-base text-xs font-semibold">
          <div className="cursor-pointer ">
            <a href="/">Home</a>
          </div>
          <div className="">
            <a href="/about">About</a>
          </div>
          {/* <div>Blog</div> */}
          <div onClick={openPdf} className="cursor-pointer ">
            Resume
          </div>
        </div>
        <div className="block md:hidden">
          <HamburgerMenu />
        </div>
      </div>

      <Routes>
        <Route path="*" element={<Info />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <div className="hidden md:block">
        <div className="flex flex-col bg-zinc-800 rounded-t-xl px-24">
          <div className="flex justify-between items-center border-b-[1px] py-12 border-gray-600">
            <div className="text-white text-[4rem]">Lets Connect </div>
            <div>
              {/* <div className="px-5 py-2.5 bg-red-400 rounded-[60px] justify-center items-center inline-flex">
              <div className="text-white text-2xl font-medium font-openSans">
                Hire me
              </div>
              <div className="w-[42px] h-[42px]">
                <img src={upRight} alt="" srcset="" />
              </div>
            </div>{" "} */}
            </div>
          </div>
          <div className="py-9 flex border-b-[1px] border-gray-600">
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
                <div className="text-white">Home</div>
                <div className="text-white">About Me</div>
                <div className="text-white">Resume</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-red-400 text-xl mb-2">Contact</div>
                <div className="text-white">sejalvatta7@gmail.com</div>
                <div className="text-white">www.sejal-portfolio.in</div>
              </div>
              <div className="flex flex-row h-fit">
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
          <div className="py-9 flex justify-between">
            <div className="text-white">
              Copyright© 2024 All Rights Reserved.
            </div>
            <div className="text-white">
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
    </div>
  );
};

export default Landing;

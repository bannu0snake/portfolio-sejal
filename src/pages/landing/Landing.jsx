import React, { useEffect, useState } from "react";
import Arrow from "../../assets/svgs/Arrow.svg";
import FiveIconsCircle from "./FiveIconsCircle.jsx";
import upRight from "../../assets/svgs/upRight.svg";
import filled from "../../assets/svgs/filled.svg";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "../about/About.jsx";
import Work from "../work/Work.jsx";
import { FaBehanceSquare, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Project from "../project/Project.jsx";
const fonts = ["font-play", "font-pecita", "font-pinyon"];
const Info = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
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
      <div className="flex flex-row ml-24 my-24">
        <div className="basis-1/2">
          <div className="font-pecita text-6xl text-stone-200 ">Hey!</div>
          <div className="my-8">
            <span className="text-stone-200 text-5xl font-semibold font-openSans leading-4">
              This is{" "}
            </span>
            <span className="text-red-400 text-5xl font-semibold font-openSans leading-4">
              Sejal
            </span>
            <span className="text-stone-200 text-5xl font-semibold font-openSans">
              , a{" "}
            </span>
            <span
              className={`text-stone-200 text-5xl font-normal ${fonts[value]} leading-4`}
            >
              <div className="w-48 inline-block">{`Designer`}</div>
            </span>
            <span className="text-stone-200 text-5xl font-semibold font-font-openSans">
              {" "}
              on a mission to make your online presence stand out in a crowded
              digital landscape.
            </span>
          </div>
          <div className="mt-20">
            <div
              className="w-fit pl-3 h-12 relative bg-red-400 rounded-full flex justify-end items-center gap-2 cursor-pointer"
              onClick={() => {
                navigate("/work");
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
          </div>
        </div>
        <div className="mx-auto">
          <FiveIconsCircle />
        </div>
      </div>
      <div className="text-right italic font-openSans text-xl text-stone-200 font-semibold mr-20 mb-20">
        A designer by degree and choice
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
    <div className="flex flex-col">
      <div className="flex flex-row justify-between mx-24 mt-10 py-1">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="flex flex-row gap-3 cursor-pointer"
        >
          <div className="bg-white w-[5rem] h-full rounded-r-full"></div>
          <div className="flex flex-col text-white items-start justify-start leading-[80%] gap-1 text-base font-semibold font-openSans">
            <p>Sejal</p>
            <p>Vatta</p>
          </div>
        </div>
        <div className="text-white flex justify-end gap-10 font-openSans text-base font-semibold">
          <div>
            <a href="/work">Work</a>
          </div>
          <div>
            <a href="/about">About</a>
          </div>
          {/* <div>Blog</div> */}
          <div onClick={openPdf} className="cursor-pointer">
            Resume
          </div>
        </div>
      </div>

      <Routes>
        <Route path="*" element={<Info />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/resume" element={<Work />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <div className="flex flex-col bg-zinc-800 rounded-t-xl px-24">
        <div className="flex justify-between items-center border-b-[1px] py-12 border-gray-600">
          <div className="text-white text-[4rem]">Lets Connect </div>
          <div>
            <div className="px-5 py-2.5 bg-red-400 rounded-[60px] justify-center items-center inline-flex">
              <div className="text-white text-2xl font-medium font-openSans">
                Hire me
              </div>
              <div className="w-[42px] h-[42px]">
                <img src={upRight} alt="" srcset="" />
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="py-9 flex border-b-[1px] border-gray-600">
          <div className="basis-1/2 text-white text-xl">
            Got a project? Let’s Talk
            <div className="flex my-2 gap-4">
              <FaLinkedin className="h-8 w-8" />
              <FaBehanceSquare className="h-8 w-8" />
              <MdMail className="h-8 w-8" />
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
          <div className="text-white">Copyright© 2024 All Rights Reserved.</div>
          <div className="text-white">
            Designed By <span className="text-red-400">Sejal</span>, Developed
            By <span className="text-red-400">Mahaboob</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

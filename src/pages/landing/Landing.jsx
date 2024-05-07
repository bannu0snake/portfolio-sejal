import React, { useEffect, useState } from "react";
import Arrow from "../../assets/svgs/Arrow.svg";
import FiveIconsCircle from "./FiveIconsCircle.jsx";
const fonts = ["font-play", "font-pecita", "font-pinyon"];
const Landing = () => {
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
    <div className="flex flex-col gap-24 pb-8">
      <div className="flex flex-row justify-between mx-24 mt-10 py-1">
        <div className="flex flex-row gap-3">
          <div className="bg-white w-[5rem] h-full rounded-r-full"></div>
          <div className="flex flex-col text-white items-start justify-start leading-[80%] gap-1 text-base font-semibold font-openSans">
            <p>Sejal</p>
            <p>Vatta</p>
          </div>
        </div>
        <div className="text-white flex justify-end gap-10 font-openSans text-base font-semibold">
          <div>Work</div>
          <div>About</div>
          <div>Blog</div>
          <div>Resume</div>
        </div>
      </div>
      <div className="flex flex-row ml-24">
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
            <div className="w-40 h-12 relative bg-red-400 rounded-full flex justify-end items-center">
              <div className="text-white text-lg font-semibold font-openSans mx-auto">
                Lorme
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

export default Landing;

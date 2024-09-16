import React from "react";
import Icon1 from "../../assets/svgs/bi_laptop-fill.svg";
import Icon2 from "../../assets/svgs/material-symbols-light_work.svg";
import Icon3 from "../../assets/svgs/mdi_location.svg";
import Icon4 from "../../assets/svgs/vaadin_office.svg";
import Icon5 from "../../assets/svgs/wpf_like.svg";
import Sejal from "../../assets/images/Subject 1.png";
const FiveIconsCircle = () => {
  const ICONS = [
    {
      icon: Icon1,
      ctx: "2+ years of experience",
      position: "right-2 bottom-6 absolute",
    },
    {
      icon: Icon4,
      ctx: "MIT Institute of Design (B. Des in UX)",
      position: "top-0 mx-auto",
    },
    {
      icon: Icon2,
      ctx: "Signzy",
      position: "left-2 bottom-6 absolute",
    },
    {
      icon: Icon3,
      ctx: "Bengaluru",
      position: "right-0 top-24 absolute",
    },
    {
      icon: Icon5,
      ctx: "UX Research",
      position: "left-0 top-24 absolute",
    },
  ];
  return (
    <div className="relative">
      <div
        className={`w-14 h-14 ${ICONS[0].position} transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300`}
      >
        <div className="relative group">
          <div className="whitespace-nowrap  absolute bottom-full mb-2 hidden w-fit bg-gray-800 text-white text-xs rounded py-2 px-3 group-hover:block">
            {ICONS[0].ctx}
          </div>
          {/* <Tooltip text="2+ years of experience"> */}
          <img src={ICONS[0].icon} alt="" srcset="" />
          {/* </Tooltip> */}
        </div>
      </div>
      <div
        className={`w-14 h-14 ${ICONS[1].position} transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300`}
      >
        <div className="relative group">
          <div className="whitespace-nowrap absolute bottom-full mb-2 hidden w-fit bg-gray-800 text-white text-xs rounded py-2 px-3 group-hover:block">
            {ICONS[1].ctx}
          </div>
          {/* <Tooltip text="2+ years of experience"> */}
          <img className="w-16 h-16" src={ICONS[1].icon} alt="" srcset="" />
          {/* </Tooltip> */}
        </div>
      </div>
      <div
        className={`w-14 h-14 ${ICONS[2].position} transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300`}
      >
        <div className="relative group">
          <div className="whitespace-nowrap absolute bottom-full mb-2 hidden w-fit bg-gray-800 text-white text-xs rounded py-2 px-3 group-hover:block">
            {ICONS[2].ctx}
          </div>
          {/* <Tooltip text="2+ years of experience"> */}
          <img className="w-16 h-16" src={ICONS[2].icon} alt="" srcset="" />
          {/* </Tooltip> */}
        </div>
      </div>
      <div
        className={`w-14 h-14 ${ICONS[3].position} transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300`}
      >
        <div className="relative group">
          <div className="whitespace-nowrap  absolute bottom-full mb-2 hidden w-fit bg-gray-800 text-white text-xs rounded py-2 px-3 group-hover:block">
            <div>{ICONS[3].ctx}</div>
          </div>
          {/* <Tooltip text="2+ years of experience"> */}
          <img src={ICONS[3].icon} alt="" srcset="" />
          {/* </Tooltip> */}
        </div>
      </div>
      <div
        className={`w-14 h-14 ${ICONS[4].position} transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300`}
      >
        <div className="relative group">
          <div className="whitespace-nowrap absolute bottom-full mb-2 hidden w-fit bg-gray-800 text-white text-xs rounded py-2 px-3 group-hover:block">
            {ICONS[4].ctx}
          </div>
          {/* <Tooltip text="2+ years of experience"> */}
          <img src={ICONS[4].icon} alt="" srcset="" />
          {/* </Tooltip> */}
        </div>
      </div>
      <div className="m-10 h-56 w-56 md:h-72 md:w-72  bg-[#CACACA] rounded-full mt-12 mx-12 relative">
        <img
          className="mx-auto h-56 md:h-[19rem]"
          src={Sejal}
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};

export default FiveIconsCircle;

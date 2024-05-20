import React from "react";
import Icon1 from "../../assets/svgs/bi_laptop-fill.svg";
import Icon2 from "../../assets/svgs/material-symbols-light_work.svg";
import Icon3 from "../../assets/svgs/mdi_location.svg";
import Icon4 from "../../assets/svgs/vaadin_office.svg";
import Icon5 from "../../assets/svgs/wpf_like.svg";
import Sejal from "../../assets/images/Subject 1.png";
const FiveIconsCircle = () => {
  return (
    <div className="relative">
      <div className="w-14 h-14 right-2 bottom-0 absolute transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        <div className="relative group">
          <div className="absolute bottom-full mb-2 hidden w-[156px] bg-gray-800 text-white text-xs rounded py-2 px-3 group-hover:block">
            2+ years of experience
          </div>
          {/* <Tooltip text="2+ years of experience"> */}
          <img src={Icon1} alt="" srcset="" />
          {/* </Tooltip> */}
        </div>
      </div>
      <div className="w-14 h-14 top-0 mx-auto transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        <div className="relative group">
          <div className="absolute bottom-full mb-2 hidden w-[156px] bg-gray-800 text-white text-xs rounded py-2 px-3 group-hover:block">
            MIT Institute of Design (B. Des in UX)
          </div>
          {/* <Tooltip text="2+ years of experience"> */}
          <img className="w-16 h-16" src={Icon4} alt="" srcset="" />
          {/* </Tooltip> */}
        </div>
      </div>
      <div className="w-14 h-14 left-2 bottom-0 absolute transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        <div className="relative group">
          <div className="absolute bottom-full mb-2 hidden w-fit bg-gray-800 text-white text-xs rounded py-2 px-3 group-hover:block">
            Signzy
          </div>
          {/* <Tooltip text="2+ years of experience"> */}
          <img className="w-16 h-16" src={Icon2} alt="" srcset="" />
          {/* </Tooltip> */}
        </div>
      </div>
      <div className="w-14 h-14 right-2 top-28 absolute transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        <div className="relative group">
          <div className="absolute bottom-full mb-2 hidden w-fit bg-gray-800 text-white text-xs rounded py-2 px-3 group-hover:block">
            Bengaluru
          </div>
          {/* <Tooltip text="2+ years of experience"> */}
          <img src={Icon3} alt="" srcset="" />
          {/* </Tooltip> */}
        </div>
      </div>
      <div className="w-14 h-14 left-2 top-28 absolute transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        <div className="relative group">
          <div className="absolute bottom-full mb-2 hidden w-28  bg-gray-800 text-white text-xs rounded py-2 px-3 group-hover:block">
            {"UX Research"}
          </div>
          {/* <Tooltip text="2+ years of experience"> */}
          <img src={Icon5} alt="" srcset="" />
          {/* </Tooltip> */}
        </div>
      </div>
      <div className="m-20 h-80 w-80 bg-[#CACACA] rounded-full mt-16 relative">
        <img className="mx-auto" src={Sejal} alt="" srcset="" />
      </div>
    </div>
  );
};

export default FiveIconsCircle;

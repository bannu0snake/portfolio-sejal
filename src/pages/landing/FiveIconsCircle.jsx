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
      <div className="w-14 h-14 right-2 bottom-0 absolute">
        <img src={Icon1} alt="" srcset="" />
      </div>
      <div className="w-14 h-14 top-0 mx-auto">
        <img src={Icon4} alt="" srcset="" />
      </div>
      <div className="w-14 h-14 left-2 bottom-0 absolute">
        <img className="w-16 h-16" src={Icon2} alt="" srcset="" />
      </div>
      <div className="w-14 h-14 right-2 top-28 absolute">
        <img src={Icon3} alt="" srcset="" />
      </div>
      <div className="w-14 h-14 left-2 top-28 absolute">
        <img src={Icon5} alt="" srcset="" />
      </div>
      <div className="m-20 h-80 w-80 bg-[#CACACA] rounded-full mt-16 relative">
        <img className="mx-auto" src={Sejal} alt="" srcset="" />
      </div>
    </div>
  );
};

export default FiveIconsCircle;

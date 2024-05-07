import React from "react";
import signzy from "../../assets/svgs/Group 224.svg";
import samsung from "../../assets/svgs/image 1.svg";
import company3 from "../../assets/svgs/image 2.svg";
import company4 from "../../assets/svgs/image 3.svg";
import Arrow from "../../assets/svgs/Arrow.svg";
// import signzy from "../../assets/svgs/image 1.svg";
const Work = () => {
  const Project = ({ title, desc }) => (
    <div className="text-white flex flex-col gap-3 border-b-[1px] border-stone-700 px-10 py-5 min-h-28">
      <div className="text-xl font-semibold font-openSans">{title}</div>
      <div className="text-stone-300 text-xs font-normal font-openSans">
        {desc}
      </div>
    </div>
  );
  const data = [
    {
      title: "Hidden Layers (Live Project) ",
      desc: "Hidden Layers- The project is a joint research initiative of five leading German art and design schools that aims at sustainably anchoring the teaching of AI topics in the field of design.",
    },
    {
      title: "Subscription Management",
      desc: "To design a subscription management interface that allows users to readily pay for all their subscriptions and maintain a history of the same in the easiest and the simplest way possible at a single place while giving them insights and suggestions based on their usage.",
    },
    {
      title: "Redesigning Onedrive",
      desc: "Redesigning OneDrive- Creating a better version of the file sharing app",
    },
    {
      title: "Dermatology- Case Study",
      desc: "In a growing field like this still internet interventions have some drawbacks. It has been observed that people have and are becoming tech savvy rapidly. Though, there are still many advancements required so as to diagnose the disease efficiently. In this project, we’ ve tried to come up with concepts which solves the problems of the patient and helps to make the process easier for the doctor as well.",
    },
    {
      title: "Waste Management",
      desc: "Lorem ipsum dolor sit amet consectetur. Imperdiet nulla molestie sit proin suspendisse tempus quam semper amet.",
    },
  ];
  return (
    <div>
      <div className="text-center text-stone-200 text-[4rem] font-normal font-pecita">
        Work Experience
      </div>
      <div className="flex justify-center gap-16 py-36">
        <img src={signzy} alt="" srcset="" />
        <img src={samsung} alt="" srcset="" />
        <img src={company3} alt="" srcset="" />
        <img src={company4} alt="" srcset="" />
      </div>
      <div className="flex">
        <div className="basis-1/2 bg-white"></div>
        <div className="basis-1/2 flex flex-col pt-5">
          <div className="text-stone-200 text-[64px] px-10 font-normal font-pecita">
            Work
          </div>
          {data.map(({ title, desc }) => (
            <Project title={title} desc={desc} />
          ))}
          <div>
            <div className="flex justify-end my-10 mr-10">
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
        </div>
      </div>
    </div>
  );
};

export default Work;

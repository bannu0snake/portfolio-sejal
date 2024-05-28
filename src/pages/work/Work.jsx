import React, { useState } from "react";
import signzy from "../../assets/svgs/Group 224.svg";
import Arrow1 from "../../assets/svgs/Group.svg";
import samsung from "../../assets/svgs/image 1.svg";
import company3 from "../../assets/svgs/image 2.svg";
import company4 from "../../assets/svgs/image 3.svg";
import Arrow from "../../assets/svgs/Arrow.svg";
import { useNavigate } from "react-router-dom";
import Project1 from "../ProjectOveriviews/Project1";
import Project2 from "../ProjectOveriviews/Project2";
import Project3 from "../ProjectOveriviews/Project3";
import Project4 from "../ProjectOveriviews/Project4";
import Project5 from "../ProjectOveriviews/Project5";
// import signzy from "../../assets/svgs/image 1.svg";
const Work = () => {
  const [selected, setSelected] = useState("");
  const Project = ({ title, desc, id }) => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);

    return (
      <div
        onMouseEnter={() => {
          setIsActive(true);
          setSelected(id);
        }}
        onMouseLeave={() => {
          setIsActive(false);
          setSelected("");
        }}
        onClick={() => {
          navigate("/project", { state: { project: id } });
        }}
      >
        {isActive ? (
          <div className="bg-stone-700 px-10 flex items-center h-36 justify-between">
            <div className="font-semibold font-openSans text-lg text-red-400">
              {title}
            </div>
            <img src={Arrow1} alt="" srcset="" className="text-white" />
          </div>
        ) : (
          <div className="text-white flex flex-col gap-3 border-b-[1px] border-stone-700 px-10 py-5 h-fit md:h-36">
            <div className="text-xl font-semibold font-openSans">{title}</div>
            <div className="text-stone-300 text-xs font-normal font-openSans">
              {desc}
            </div>{" "}
          </div>
        )}
      </div>
    );
  };
  const data = [
    {
      title: "Hidden Layers (Live Project) ",
      key: "HIDDEN_LAYERS",
      desc: "Hidden Layers- The project is a joint research initiative of five leading German art and design schools that aims at sustainably anchoring the teaching of AI topics in the field of design.",
    },
    {
      title: "Subscription Management",
      key: "SUB_SPACE",
      desc: "To design a subscription management interface that allows users to readily pay for all their subscriptions and maintain a history of the same in the easiest and the simplest way possible at a single place while giving them insights and suggestions based on their usage.",
    },
    {
      title: "Redesigning Onedrive",
      key: "ONEDRIVE_REDISIGN",
      desc: "Redesigning OneDrive- Creating a better version of the file sharing app",
    },
    {
      title: "Dermatology- Case Study",
      key: "DOCTALK",
      desc: "In a growing field like this still internet interventions have some drawbacks. It has been observed that people have and are becoming tech savvy rapidly. Though, there are still many advancements required so as to diagnose the disease efficiently. In this project, we’ ve tried to come up with concepts which solves the problems of the patient and helps to make the process easier for the doctor as well.",
    },
    {
      title: "Waste Management",
      key: "WASTE_MANAGEMENT",
      desc: "Design a solution to reduce the complexity of waste management in today's time and make new generation learn the waste segregation in a more interesting manner.",
    },
  ];
  return (
    <div className="mt-2">
      <div className="flex h-fit">
        {!selected ? (
          <div className="basis-1/2 bg-zinc-900 justify-center items-center text-white text-xl font-openSans hidden md:flex">
            Hover on a project to view.
          </div>
        ) : (
          <div className="basis-1/2  hidden md:block">
            {selected === "HIDDEN_LAYERS" && <Project1 />}
            {selected === "SUB_SPACE" && <Project2 />}
            {selected === "ONEDRIVE_REDISIGN" && <Project3 />}
            {selected === "DOCTALK" && <Project4 />}
            {selected === "WASTE_MANAGEMENT" && <Project5 />}
          </div>
        )}
        <div className="md:basis-1/2 flex flex-col pt-5">
          <div className="text-stone-200 text-5xl px-10 font-normal font-openSans pb-4">
            My Work
          </div>
          {data.map(({ title, desc, key }) => (
            <Project title={title} desc={desc} id={key} />
          ))}
        </div>
      </div>
      <div className="">
        <div className="text-center text-stone-200 text-xl md:text-[3rem] font-normal font-openSans mt-8 md:mt-16">
          Where I've Worked
        </div>
        <div className="">
          <div className="flex justify-center items-center gap-2 md:gap-16 py-8 md:py-36 mx-4 md:mx-16">
            <img
              src={signzy}
              alt=""
              srcset=""
              className="h-16 w-16 md:h-full md:w-full"
            />
            <img
              src={samsung}
              alt=""
              srcset=""
              className="h-16 w-16 md:h-full md:w-full"
            />
            <img
              src={company3}
              alt=""
              srcset=""
              className="h-16 w-16 md:h-full md:w-full"
            />
            <img
              src={company4}
              alt=""
              srcset=""
              className="h-16 w-16 md:h-full md:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

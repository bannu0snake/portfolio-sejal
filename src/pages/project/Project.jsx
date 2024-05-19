import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const projects = {
  HIDDEN_LAYERS: {
    title: "Hidden Layers",
    tags: [
      "Experience Design",
      "Live Project",
      "Group Project",
      "Duration : 12 weeks",
    ],
    comp1: {
      key: "WHAT?",
      desc: "Hidden Layers- The project is a joint research initiative of five leading German art and design schools that aims at sustainably anchoring the teaching of AI topics in the field of design.",
    },
    comp2: {
      key: "WHY?",
      desc: "The event/ conference gathered a diverse group of experts from across the globe to collectively discuss and learn about artificial intelligence in design.",
    },
    comp3: {
      key: "HOW?",
      desc: [
        "The project began by defining the scope, building a timeline, formation of teams within group and conducting research in the domain.",
        "After defining the needs and goals of speakers and attendees of the conference- the process followed with designing website, posters, and other social media assets.",
        "The process followed by then converting the designs into a live website.",
        "Deploy- The website was launched to the audience.",
        "The conference was held at Köln International School of Design, Germany from 19 July 2022 to 2uly 2022. Each day had a theme for the speakers and the workshops.",
      ],
    },
    bgColor: "bg-yellow-300",
    textColor: "black",
  },
  SUB_SPACE: {
    title: "Subspace",
    tags: [
      "Interaction Design",
      "Classroom Project",
      "Group Project",
      "Duration : 3 weeks",
    ],
    comp1: {
      key: "WHAT?",
      desc: "To design a subscription management interface that allows users to readily pay for all their subscriptions and maintain a history of the same in the easiest and the simplest way possible at a single place while giving them insights and suggestions based on their usage.",
    },
    comp2: {
      key: "WHY?",
      desc: "As the new era of subscriptions is entering every sector of the market, users need a way to efficiently manage and organize their subscriptions from the moment they subscribe till the day they cancel. So we thought that having a single platform where the user could manage and discover all such services with a few simple taps would be really timely and helpful.",
    },
    comp3: {
      key: "HOW?",
      desc: [
        "The project began by understanding the problem space and defining the project goals.",
        "After defining the problem statement, the research phase started by doing secondary/ desk research and then moving on to the primary research.",
        "The research phase continued with using the methods like literature review, contextual inquiry, user interviews, competitive analysis, user surveys and questionnaires.",
        "The ideation phase followed with creating personas, scenarios and information architecture",
        "Further, the usability testing was conducted to test the user satisfaction of the application.",
      ],
    },
    bgColor: "bg-slate-500",
    textColor: "white",
  },
  ONEDRIVE_REDISIGN: {
    title: "Onedrive Redesign",
    tags: [
      "User Experience",
      "Classroom Project",
      "Group Project",
      "Duration : 2 weeks",
    ],
    comp1: {
      key: "WHAT?",
      desc: "Redesigning OneDrive- Creating a better version of the file sharing app",
    },
    comp2: {
      key: "WHY?",
      desc: "The advent of cloud storage means more users today are turning to apps that provide all in one solutions for document sharing, file storage and backup. Unfortunately the OneDrive app experience is convoluted and possesses a steep learning curve for the novice user. The usability of the app is hindered by redundant elements, confusing structure and features that the average user might seldom use.",
    },
    comp3: {
      key: "HOW?",
      desc: [
        "he project began by identifying the problems in the current application by doing",
        "Based on qualitative and quantitative research, we gathered insights, analysed and formulated the specific problem statements..",
        "The process followed by then making user personas, journey maps, mind map where we made a list of the problems that we found while going through the app and what we think could be worked on keeping in mind the insights gained from the users.",
        "Card sorting- open and closed was performed to identify how the users associate the various features to their functionality. Closed sort helped us to better understand how users actually interpret the features and how they use them.",
        "From this, we went onto further coming down to specific problems and features that we think need to change and made the information architecture as per that.",
        "Further, the moodboard and the wireframes were made.",
        "Then we did usability testing for the prototype.",
      ],
    },
    bgColor: "bg-blue-400",
    textColor: "white",
  },
  DOCTALK: {
    title: "Dermatology- Case Study",
    tags: [
      "User Experience",
      "Classroom Project",
      "Group Project",
      "Duration : 3 weeks",
    ],
    comp1: {
      key: "WHAT? AND WHY ?",
      desc: "Dermatology is a very crucial field in healthcare and almost 90% of people face issues regarding skin once in a lifetime. In a growing field like this still internet interventions have some drawbacks. It has been observed that people have and are becoming tech savvy rapidly. Though, there are still many advancements required so as to diagnose the disease efficiently. In this project, we’ ve tried to come up with concepts which solves the problems of the patient and helps to make the process easier for the doctor as well.",
    },
    comp2: {
      key: "MY ROLE",
      desc: "Research (primary and secondary), analysis, conceptualisation, pilot study.",
    },
    comp3: {
      key: "HOW?",
      desc: [
        "The project began by defining the scope, building a timeline, formation of teams within group and conducting research in the domain.",
        "After defining the needs and goals of speakers and attendees of the conference- the process followed with designing website, posters, and other social media assets.",
        "The process followed by then converting the designs into a live website.",
        "Deploy- The website was launched to the audience.",
        "The conference was held at Köln International School of Design, Germany from 19 July 2022 to 2uly 2022. Each day had a theme for the speakers and the workshops.",
      ],
    },
    bgColor: "bg-cyan-600",
    textColor: "white",
  },
};
const Tag = ({ tag, bgColor, textColor }) => {
  const background = bgColor;
  const color = "text-" + textColor;
  return <div className={`rounded-full p-2 ${background} ${color}`}>{tag}</div>;
};
const Project = () => {
  const location = useLocation();
  const { project } = location.state || {};
  console.log(location);
  const data = projects[project];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="flex flex-col my-8 items-center mx-40">
        <div className="text-white text-5xl leading-10 font-bold font-rubik">
          {data.title}
        </div>
        <div className="flex gap-4 mt-6">
          {data.tags.map((tag) => {
            console.log(data.bgColor, data.textColor);
            return (
              <Tag
                tag={tag}
                bgColor={data.bgColor}
                textColor={data.textColor}
              />
            );
          })}
        </div>
        <div className="flex my-16">
          <div className="basis-1/2 flex flex-col pr-16 border-r-[1px] border-zinc-600">
            <div className="border-b-[1px] border-zinc-600">
              <div className={`pb-5 font-medium text-2xl text-${data.bgColor}`}>
                {data.comp1.key}
              </div>
              <div className="text-white pb-16">{data.comp1.desc}</div>
            </div>
            <div>
              <div
                className={`text-${data.bgColor} pt-16 pb-5 font-medium text-2xl`}
              >
                {data.comp2.key}
              </div>
              <div className="text-white">{data.comp2.desc}</div>
            </div>
          </div>
          <div className="basis-1/2 ml-16 ">
            <div className={`font-medium text-2xl text-${data.bgColor} pb-5`}>
              {data.comp3.key}
            </div>
            {data.comp3.desc.map((item) => (
              <div className="flex gap-2 text-white font-extrabold">
                <div>{"•"}</div>
                <div className="text-white text-base font-normal font-rubik leading-relaxed ">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-white text-sm font-normal font-rubik underline text-right mx-40 mb-16 cursor-pointer">
        <span>{"Click to view full case study"}</span> <span>{"->"}</span>
      </div>
    </div>
  );
};

export default Project;

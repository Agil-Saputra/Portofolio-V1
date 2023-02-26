import React from "react";
import Tooltip from "./tooltip";
import { SiJavascript, SiTypescript, SiRedux, SiSass, SiBootstrap, SiTailwindcss, SiReact, SiNextdotjs} from "react-icons/si";

// import all animation
import { motion } from "framer-motion";
import { container, set, item } from "../utils/motion";

const skills = () => {
  const size = 40;
  const icons = [
    {
      icon: <SiJavascript size={size} />,
      title: "Javascript",
    },
    {
      icon: <SiTypescript size={size} />,
      title: "Typescript",
    },
    {
      icon: <SiBootstrap size={size} />,
      title: "Bootstrap",
    },
    {
      icon: <SiTailwindcss size={size} />,
      title: "Tailwind",
    },
    {
      icon: <SiRedux size={size} />,
      title: "Redux",
    },
    {
      icon: <SiSass size={size} />,
      title: "Sass",
    },
    {
      icon: <SiReact size={size} />,
      title: "React",
    },
    {
      icon: <SiNextdotjs size={size} />,
      title: "NextJS",
    },
  ];


  return (
    <section>
      <motion.div variants={container} {...set} className="grid w-full bg-red-200 rounded-lg p-4 border-solid border-[3px] border-black place-items-center shadow-xl">
        <motion.p variants={item(0.5)} className="text-xl font-bold mb-[10px]">Few technologies I’ve been working with recently:</motion.p>
        <motion.div variants={item(0.7)} className="grid grid-flow-col gap-4 overflow-x-auto overscroll-contain md:w-[60%] w-[80%] ">
        {icons.map(icon => <Tooltip key={icon.title} children={icon.icon} title={icon.title}/>)}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default skills;

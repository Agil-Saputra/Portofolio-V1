import React from "react";
import { GrReactjs } from "react-icons/gr";
import { SiJavascript, SiTypescript, SiRedux, SiSass, SiBootstrap, SiNodedotjs, SiTailwindcss } from "react-icons/si";

const skills = () => {
  const size = 40;
  return (
    <section>
      <div className="grid w-full bg-red-200 rounded-lg p-4 border-solid border-[3px] border-black place-items-center shadow-xl">
        <p className="text-xl font-bold mb-[10px]">Few technologies I’ve been working with recently:</p>
        <div className="grid grid-flow-col gap-4 overflow-x-auto overscroll-contain md:w-[60%] w-[80%] ">
          <GrReactjs size={size} title='React'/>
          <SiRedux size={size} title='Redux'/>
          <SiSass size={size} title='Sass'/>
          <SiJavascript size={size} title='Javascript'/>
          <SiTypescript size={size} title='Typescript'/>
          <SiBootstrap size={size} title='Bootstrap'/>
          <SiNodedotjs size={size} title='NodeJS'/>
          <SiTailwindcss size={size} title='Tailwind'/>
        </div>
      </div>
    </section>
  );
};

export default skills;

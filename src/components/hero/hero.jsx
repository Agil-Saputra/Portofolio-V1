import React from "react";
import { SiLinkedin} from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const hero = () => {
  return (
    <section className="md:py-[5.5em] py-[3rem] h-full" id="Home">
    <div className="md:leading-[7rem] leading-[3rem]">
      <p className="text-xl font-medium">Hi, my name is</p>
      <p className="md:text-[7rem] text-[3rem] font-bold text-green-500 ">Agil Saputra.</p>
      <p className="md:text-[7rem] text-[3rem] font-bold text-green-400 " >
        Front End Developer
      </p>
      <p className="text-xl font-medium">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at</p>
    </div>
    <div className="flex items-center gap-4 mt-4">
    <a className="btn shadow-2xl" href="mailto:ragelyusuf752@gmail.com" target='_blank'>
      <span className="button_top">Email Me<MdEmail size={20}/>
      </span>
      </a>
      <a href="https://www.linkedin.com/in/agil-saputra07" target='_blank' className="transition duration-200 ease-in-out rounded-[50%] link-hover"><SiLinkedin size={35}/></a>
      <a href="https://github.com/Agil-Saputra" target='_blank' className="transition duration-200 ease-in-out rounded-[50%] link-hover"><BsGithub size={35}/></a>
     </div>
    
    </section>
  );
};

export default hero;

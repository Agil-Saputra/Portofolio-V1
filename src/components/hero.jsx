import React from "react";
import { SiLinkedin} from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const hero = () => {
  return (
    <div className="m-[5.5rem]">
    <div className="leading-[7rem]">
      <p className="text-xl font-medium">Hi, my name is</p>
      <p className="text-[112px] font-bold text-green-500">Agil Saputra.</p>
      <p className="text-[112px] font-bold text-green-400" >
        Front End Developer
      </p>
      <p className="text-xl font-medium">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at</p>
    </div>
    <div className="flex gap-4 items-center mt-4">
    <a className="btn" href="" target='_blank'>
      <span class="button_top">Email Me<MdEmail size={20}/>
      </span>
      </a>
      <a href="#" target='_blank'><SiLinkedin size={30}/></a>
      <a href="#" target='_blank'><BsGithub size={30}/></a>
     </div>
    </div>
  );
};

export default hero;

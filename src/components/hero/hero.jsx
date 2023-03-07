import React from "react";
import { SiLinkedin} from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

// import all animation
import { motion } from "framer-motion";
import { container, set, item } from "../utils/motion";

const hero = ({data}) => {

  return (
    <section  className="md:py-[5.5em] py-[3rem] h-full max-md:text-center" id="Home">
    <motion.div {...set} variants={container} className="md:leading-[7rem] leading-[4rem]">
      <motion.p variants={item(0.2)} className="text-xl font-medium">Hi, my name is</motion.p>
      <motion.p variants={item(0.3)} className="md:text-[7rem] text-[4rem] font-bold text-green-500 ">Agil Saputra</motion.p>
      <motion.p variants={item(0.4)} className="md:text-[7rem] text-[4rem] font-bold text-green-400 " >
        {data.role}
      </motion.p>
      <motion.p variants={item(0.9)} className="text-xl font-medium">{data.summary}</motion.p>
    </motion.div>
    <motion.div variants={container} {...set} className="flex items-center gap-4 mt-4">
    <motion.a variants={item(1)} className="btn shadow-2xl" href="mailto:ragelyusuf752@gmail.com" target='_blank'>
      <span className="button_top">Email Me<MdEmail size={20}/>
      </span>
      </motion.a>
      <motion.a variants={item(1.1)} whileHover={{scale: 1.3}} href="https://www.linkedin.com/in/agil-saputra07" target='_blank' className="rounded-[50%] link-hover"><SiLinkedin size={35}/></motion.a>
      <motion.a variants={item(1.2)} whileHover={{scale: 1.3}} href="https://github.com/Agil-Saputra" target='_blank' className="rounded-[50%] link-hover"><BsGithub size={35}/></motion.a>
     </motion.div>
    
    </section>
  );
};

export default hero;

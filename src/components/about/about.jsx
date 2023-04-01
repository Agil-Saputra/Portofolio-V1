import React from "react";

// import all animation
import { motion } from "framer-motion";
import { container, set, item, image } from "../utils/motion";

const about = ({data}) => {
  const profileSrc = data.profile?.fields.file.url

  return (
    <section className="md:my-[6rem] my-[3rem] flex max-md:flex-col gap-4 items-center justify-between" id="About">
    <motion.div variants={container} {...set}>
  <motion.h1 variants={item(0.2)} className="title my-4">About Me</motion.h1>
        <motion.p variants={item(0.3)} className="mt-4 paraf" dangerouslySetInnerHTML={{__html: data.about}}>
        </motion.p>
    </motion.div>
        <motion.img
        {...set}
        variants={image(100)}
        whileHover={{y: -10}}
        width={300} 
        height={300} 
        src={'https:' + profileSrc}
        className='w-[300px] border-solid border-[7px] border-title shadow-xl rounded-[50%] object-cover' 
        alt="Agil's Profile Photo"
        />
   
    </section>
  );
};

export default about;

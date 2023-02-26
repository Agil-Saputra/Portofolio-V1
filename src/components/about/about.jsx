import React from "react";

// import all animation
import { motion } from "framer-motion";
import { container, set, item, image } from "../utils/motion";

const about = () => {
  return (
    <section className="my-[4rem] flex max-md:flex-col gap-4 items-center" id="About">
    <motion.div variants={container} {...set} >
  <motion.h1 variants={item(0.5)} className="text-[3rem] text-green-400 font-bold ">About Me</motion.h1>
        <motion.p variants={item(0.7)} className="mt-4 text-xl font-medium">
          Hello! My name is Agil and I enjoy creating things that live on
          the <span>internet.</span> My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about <strong>HTML & CSS</strong>!
          Fast-forward to today, and I’ve had the privilege of working at a
        </motion.p>
    </motion.div>
        <motion.img
        {...set}
        variants={image(100)}
        whileHover={{y: -10}}
        width={300} 
        height={300} 
        src="https://ik.imagekit.io/tmfvonaed/Group_9__3_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676996451119" 
        className='w-[300px] border-solid border-[7px] border-title shadow-xl rounded-[50%] object-cover' 
        alt="Agil's Profile Photo"
        />
   
    </section>
  );
};

export default about;

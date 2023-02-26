import React from 'react'
import { MdEmail } from "react-icons/md";

// import all animation
import { motion } from "framer-motion";
import { container, set, item } from "../utils/motion";

const contact = () => {
  return (
    <motion.div {...set} variants={container} className='grid text-center place-items-center mt-[4rem]' id='Contact'>
        <motion.h1 variants={item(0.4)} className='text-[3rem] text-green-400 font-bold ' >Get in Touch</motion.h1>
        <motion.p variants={item(0.6)} className='md:w-[70%] w-full '>
        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </motion.p>
        <motion.a variants={item(0.8)} className="btn my-[2rem] shadow-2xl" href="mailto:ragelyusuf752@gmail.com" target='_blank'>
      <span className="button_top">Say Hello<MdEmail size={20}/>
      </span>
      </motion.a>
    </motion.div>
  )
}

export default contact
import React from 'react'
import { MdEmail } from "react-icons/md";
import Button from '../ui/button';

// import all animation
import { motion } from "framer-motion";
import { container, set, item } from "../utils/motion";

const contact = ({data}) => {
  return (
    <motion.div {...set} variants={container} className='grid text-center place-items-center mt-[4rem]' id='Contact'>
        <motion.h1 variants={item(0.3)} className='title' >Get in Touch</motion.h1>
        <motion.p variants={item(0.4)} className='md:w-[70%] w-full '>
        {data.contact}
        </motion.p>
        <motion.div variants={item(0.5)} className='my-6 flex'>
     <Button title="Say Hello" icon={<MdEmail size={20}/>} link="mailto:ragelyusuf752@gmail.com" />
      </motion.div>
    </motion.div>
  )
}

export default contact
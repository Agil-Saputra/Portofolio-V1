import React from 'react'
import { motion, useScroll } from 'framer-motion'

const scrollProgressBar = () => {
    const { scrollYProgress } = useScroll();
  return (
    <motion.div className='fixed top-0 left-[-10px] right-0 h-[7px] bg-green-400 origin-[0%] z-10' style={{ scaleX: scrollYProgress }} /> 
  )
}

export default scrollProgressBar
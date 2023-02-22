import React from 'react'
import { motion } from 'framer-motion'

const inView = ({children}) => {
  return (
    <motion.div 
    whileInView={{opacity: 1, translateY: -20}}
    >{children}</motion.div>
  )
}

export default inView
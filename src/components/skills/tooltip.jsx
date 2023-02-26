import React, {forwardRef} from 'react'
import Tippy from '@tippyjs/react';
import {animateFill, followCursor} from "tippy.js"
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/animations/scale.css'

import { motion } from 'framer-motion';

const tooltip = ({title, children}) => {

  const Icon = forwardRef((props, ref) => {
    return <motion.div whileHover={{scale: 0.95}} ref={ref} className="hover:text-white smooth">{children}</motion.div>
  });

  return (
    <Tippy 
    content={title}
    placement="bottom"
    theme='light'
    animateFill={true}
    animation="scale"
    plugins={[animateFill, followCursor]}
    followCursor={true}

    >
    <Icon/>
  </Tippy>
  )
}

export default tooltip
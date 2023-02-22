import React from 'react'
import { MdEmail } from "react-icons/md";

const contact = () => {
  return (
    <div className='grid text-center place-items-center mt-[4rem]' id='Contact'>
        <h1 className='text-[3rem] text-green-400 font-bold ' >Get in Touch</h1>
        <p className='md:w-[70%] w-full '>
        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </p>
        <a className="btn my-[2rem] shadow-2xl" href="mailto:ragelyusuf752@gmail.com" target='_blank'>
      <span className="button_top">Say Hello<MdEmail size={20}/>
      </span>
      </a>
    </div>
  )
}

export default contact
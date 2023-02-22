import React, { useState } from 'react'
import logo from '../../assets/Group 1.svg'
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";



const navbar = () => {
const lists = ['Home', 'About', 'Projects',  'Contact']
const items = lists.map(item => <a href={"#"+item} key={item} className="transition duration-300 ease-in-out cursor-pointer md:my-0 my-[4rem] hover:bg-green-300 px-[10px] py-[5px] hover:-translate-y-1 rounded-xl hover:text-slate-600">{item}</a>)
const [showNav, setShowNav] = useState(false)
function handleClick() {
setShowNav(!showNav)
}

  return (
    <header className='flex items-center justify-between m-4 md:m-8 '>
         <img src={logo} alt="Agil's Logo" width={40} height={40}/>
         <nav onClick={showNav ? handleClick : null} className={(showNav ? "right-0 shadow-[0_0_0_10000px_rgba(0,0,0,0.5)]" : "-right-full") + " z-20 md:flex flex-col md:flex-row md:gap-[3rem] font-medium max-md:fixed right-0 top-0 h-[100%] max-md:w-[50%] text-center max-md:bg-slate-50 transition-all duration-300 ease-in-out"}
         >
         {items}
         </nav>
         <div className='flex items-center gap-4'>
         <a className="btn shadow-2xl" href="https://drive.google.com/file/d/171__TG4CLfvQCuEwzSTk5EV-vb6zuHiW/view" target='_blank'>
      <span className="button_top">
      Resume
      <BsFillArrowUpRightCircleFill />
      </span>
      </a>
       {!showNav ? <FaBars size={30} className="z-30 block md:hidden cursor-pointer" onClick={handleClick}/> : <CgClose size={30} className="z-30 block md:hidden cursor-pointer" onClick={handleClick}/>}
         </div>
    </header>
  )
}

export default navbar
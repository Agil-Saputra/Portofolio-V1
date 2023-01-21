import React, { useState } from 'react'
import logo from '../assets/Group 1.svg'
import { FiDownload } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";



const navbar = () => {
const lists = ['Home', 'About', 'Projects',  'Contact']
const items = lists.map(item => <li key={item} className="transition duration-300 ease-in-out cursor-pointer md:my-0 my-[4rem] hover:bg-green-300 px-[10px] py-[5px] hover:-translate-y-1 rounded-xl hover:text-slate-600"><a href={"#"+item}>{item}</a></li>)
const [showNav, setShowNav] = useState(false)
function handleClick() {
setShowNav(!showNav)
}

  return (
    <nav className='flex items-center justify-between m-4 md:m-8'>
         <img src={logo}/>
         <ul className={(showNav ? "right-0" : "-right-full") + " md:flex flex-col md:flex-row md:gap-[3rem] font-medium max-md:fixed right-0 top-0 h-[100%] max-md:w-[50%] text-center max-md:shadow-md shadow-slate-600 max-md:bg-slate-50"}
         >
         {items}
         </ul>
         <div className='flex items-center gap-4'>
         <a className="btn " href="" target='_blank'>
      <span className="button_top">Resume<FiDownload />
      </span>
      </a>
       {!showNav ? <FaBars size={30} className="z-10 block md:hidden cursor-pointer" onClick={handleClick}/> : <CgClose size={30} className="z-10 block md:hidden cursor-pointer fixed right-4" onClick={handleClick}/>}
         </div>
    </nav>
  )
}

export default navbar
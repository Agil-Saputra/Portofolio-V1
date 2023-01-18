import React from 'react'
import logo from '../assets/Group 1.svg'
import { FiDownload } from "react-icons/fi";

const navbar = () => {
const lists = ['Home', 'About', 'Projects',  'Contact']
const items = lists.map(item => <li key={item} className="cursor-pointer  transition duration-1000 ease-in-out
 group-hover:p-[10px]"><a href='#'>{item}</a></li>)
  return (
    <nav className='flex justify-between m-8 items-center'>
         <img src={logo}/>
         <ul className='flex gap-[3rem] font-medium'>
         {items}
         </ul>
         <a className="btn" href="" target='_blank'>
      <span class="button_top">Resume<FiDownload />
      </span>
      </a>
    </nav>
  )
}

export default navbar
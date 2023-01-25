import React from 'react'
import { BsGithub, BsArrowUpRightCircle } from "react-icons/bs";
import { TiArrowForward } from "react-icons/ti"

const projects = (props) => {
  const {img, title, description, techs, github, live} = props
  const listTech = techs.map(tech => <p className='flex items-center font-bold text-xl' key={tech}><TiArrowForward />{tech}</p>)

  return (
    <div className='mt-[1rem] mx-6 py-12 ' id='Projects'>
    <div className='grid lg:grid-cols-4 grid-cols-1 items-start'>

    <div className='text-left p-4 '>
    <p className='font-bold text-green-600 text-2xl mb-4'>About Project</p>
      <p className='font-medium '><strong className='font-bold text-xl text-title'>{title}</strong> {description}</p>
          </div>
          
    <div className='w-full col-span-2 rounded-lg shadow-xl'>
      <img src={img} className='h-full rounded-lg w-full object-cover shadow-lg' alt='Project Preview'/>
    </div>


    <div className='text-left p-4'>
      <h2 className='font-bold text-green-600 text-2xl mb-4'>Technologies That I’ve use:</h2>
      {listTech}
      <div className='md:mt-8 mt-0 flex gap-4 '>
          <a className="btn my-[1rem] shadow-2xl" href={github} target='_blank'>
      <span className="button_top">View Code<BsGithub size={30}/>
      </span>
      </a>
          <a className="btn my-[1rem] shadow-2xl" href={live} target='_blank'>
      <span className="button_top">Live Site<BsArrowUpRightCircle size={30}/>
      </span>
      </a>
    </div>
    </div>

    </div>
    </div>
  )
}

export default projects
import React from 'react'


const projects = () => {
  return (
    <div className='mt-[4rem]' id='Projects'>
    <h1 className='text-[3rem] font-bold text-green-400'>Some Things I’ve Built</h1>
    <div className='grid grid-flow-col gap-12 p-4 overflow-x-auto overscroll-contain'>
    <div className='w-[27rem] bg-red-600 h-[30rem] spcl-shadow rounded-xl'></div>
    <div className='w-[27rem] bg-red-500 h-[30rem] spcl-shadow rounded-xl'></div>
    <div className='w-[27rem] bg-red-400 h-[30rem] spcl-shadow rounded-xl'></div>
    <div className='w-[27rem] bg-red-300 h-[30rem] spcl-shadow rounded-xl'></div>
    </div>
    </div>
  )
}

export default projects
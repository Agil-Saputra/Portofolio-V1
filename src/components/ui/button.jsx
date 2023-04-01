import React from 'react'

export default function button({icon, title, link}) {
  return (
    <a className="btn my-[1rem] shadow-xl md:shadow-2xl max-md:text-[13px]" href={link} target='_blank'>
    <span className="button_top">{title}{icon}
    </span>
    </a>
  )
}

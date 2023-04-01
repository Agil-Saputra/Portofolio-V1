import React from 'react'

export default function button({icon, title, link}) {
  return (
    <a className="btn my-[1rem] shadow-md md:shadow-lg max-md:text-[13px]" href={link} target='_blank'>
    <span className="button_top">{title}{icon}
    </span>
    </a>
  )
}

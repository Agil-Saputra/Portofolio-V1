import React from "react";
import profile from "../assets/Group 9.webp"

const about = () => {
  return (
    <section className="my-[2.5rem] flex max-md:flex-col gap-4 items-center" id="About">
    <div>
  <p className="text-[3rem] text-green-400 font-bold">About Me</p>
        <p className="mt-4 text-xl font-medium">
          Hello! My name is Agil and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about <strong>HTML & CSS</strong>!
          Fast-forward to today, and I’ve had the privilege of working at a
        </p>
    </div>
        <img width={300} height={300} src={profile} className='w-[300px] transition duration-200 ease-in-out border-solid border-[7px] border-title shadow-xl rounded-[50%] hover:-translate-y-3 object-cover' alt="Agil's Profile Photo"/>
    </section>
  );
};

export default about;

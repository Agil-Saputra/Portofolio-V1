import React from "react";
import Project from "./projects";

import Slider from "react-slick";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import bookmark from "../../assets/projects/Frame 1.webp"

const projectApp = () => {
  
  function SampleNextArrow({ onClick }) {
    return (
      <div className="arrow arrow-right" onClick={onClick}>
        <BsArrowRightCircleFill size={30} className="shadow-lg rounded-[50%] hover"/>
      </div>
    );
  }

  function SamplePrevArrow({ onClick }) {
    return (
      <div className="arrow arrow-left" onClick={onClick}>
        <BsArrowLeftCircleFill size={30} className="shadow-lg rounded-[50%] hover"/>
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
        <h1 className='text-[3rem] font-bold text-green-400 md:mt-24 mt-12'>Some Things I’ve Built</h1>
    <Slider {...settings} >
      <Project
      img="https://ik.imagekit.io/tmfvonaed/Frame_1.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676996418729"
      title="Simple Bookmark Landing Page"
      description="this landing page allows user to interact with incredible animations and interactive components while get the information from this website, this kind of landing page is perfect for bussiness or organizations purpose."
      techs={["React", "Tailwind CSS", "Framer Motion", "Vitejs"]}
      github="https://github.com/Agil-Saputra/Bookmark-Landing-Page"
      live="https://simplebookmarkextension.netlify.app/"
      />
      <Project 
      img="https://images.unsplash.com/photo-1674231313303-ab9bd1196390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
      title="Project 2"
      description="But be aware slick-carousel has a peer-dependancy on jQuery which you, or your colleagues may not like to see in your console output, so you can always grab the CSS from there and convert it into any CSS in JS solution that you might be using."
      techs={["React", "Firebase", "Sass"]}
      github="/"
      live="/"
      />
      <Project 
      img="https://images.unsplash.com/photo-1674231313303-ab9bd1196390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
      title="Project 3"
      description="But be aware slick-carousel has a peer-dependancy on jQuery which you, or your colleagues may not like to see in your console output, so you can always grab the CSS from there and convert it into any CSS in JS solution that you might be using."
      techs={["React", "Firebase", "Sass"]}
      github="/"
      live="/"
      />
      
    </Slider>
    </>
  );
};

export default projectApp;


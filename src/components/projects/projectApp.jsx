import Project from "./projects";

import Slider from "react-slick";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import { motion } from "framer-motion";
import { item } from "../utils/motion";

const projectApp = ({data}) => {
  
  function NextArrow({ onClick }) {
    return (
      <motion.div {...hover} className="arrow arrow-right" onClick={onClick}>
        <BsArrowRightCircleFill {...icon}/>
      </motion.div>
    );
  }

  function PrevArrow({ onClick }) {
    return (
      <motion.div {...hover} className="arrow arrow-left" onClick={onClick}>
        <BsArrowLeftCircleFill {...icon}/>
      </motion.div>
    );
  }

  const hover ={
    whileHover: {scale: 1.4},
    whileTap: {scale: 1}
  }

  const icon = {
    size:30,
    className:"shadow-lg rounded-[50%]"
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    lazyLoad: "onDemand",
  };

const datas = data.items

  return (
    <>
        <h1 className='text-[3rem] font-bold text-green-400 md:mt-24 mt-12'>Some Things I’ve Built</h1>
    <Slider {...settings} >
{datas?.map((item, i) => {
  return (
    <Project
      images={item.fields.previews}
      title={item.fields.title}
      description={item.fields.desc}
      techs={item.fields.techStack}
      github={item.fields.github}
      live={item.fields.live}
      key={i}
      /> 
  )
})}   
  </Slider>
    </>
  );
};

export default projectApp;
// ["https://ik.imagekit.io/tmfvonaed/Frame_1.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676996418729", "https://images.unsplash.com/photo-1674231313303-ab9bd1196390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"]

// masok?.map(item => item.map(item2 => (["https:" + item2.fields.file.url])))
// import all necessary iconss
import { BsGithub, BsArrowUpRightCircle } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import { TiArrowForward} from "react-icons/ti";

// import all animations
import { motion } from "framer-motion";
import { container, set, itemUp } from "../utils/motion";

// import slider from slick 
import Slider from "react-slick";

import Button from "../ui/button";

const projects = ({images, title, description, techs, github, live}) => {
  const listTech = techs.map(tech => <motion.p variants={itemUp(0.4)} className='flex items-center font-bold text-xl' key={tech}><TiArrowForward />{tech}</motion.p>)

  function NextArrow({ onClick }) {
    return (
      <motion.div {...hover} className="arrow arrow-right-img " onClick={onClick}>
        <IoIosArrowForward {...icon}/>
      </motion.div>
    );
  }

  function PrevArrow({ onClick }) {
    return (
      <motion.div {...hover} className="arrow arrow-left-img" onClick={onClick}>
        <IoIosArrowBack {...icon}/>
      </motion.div>
    );
  }

  const hover = {
    whileHover: {scale: 1.4, },
    whileTap: {scale: 1}
  }

  const icon = {
    size: 25,
    className: 'bg-white rounded-[30px] hover:bg-green-300'
  }

  const settings ={
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 100,
    autoplayspeed: 50,
    draggable: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    lazyLoad: "onDemand",
  }

  return (
    <div className='mt-[1rem] md:mx-6 mx-2 md:py-12 cursor-grab active:cursor-grabbing' id='Projects'>
    <div className='grid lg:grid-cols-4 grid-cols-1 items-start'>

    <motion.div {...set} variants={container} className='text-left py-4 md:px-4'>
    <motion.p variants={itemUp(0.2)} className='font-bold text-green-600 text-2xl mb-4'>About Project</motion.p>
    <motion.p variants={itemUp(0.3)} className='font-medium'>
    <span className='font-bold text-xl text-title'>{title} </span> 
    <span  dangerouslySetInnerHTML={{__html: description}}></span>
    </motion.p>
    </motion.div>
          
    <motion.div {...set} variants={itemUp(0.5)} className='w-full col-span-2 rounded-lg shadow-xl'>
    <Slider {...settings}  >
    {images.map((img, i) =>  {
      return( 
      <img
      width={500} 
      height={280} 
      src={"https:" + img.fields.file.url} 
      className='md:h-[350px] 2xl:h-full rounded-lg w-full object-cover shadow-lg' 
      alt='Project Preview' 
      key={i}
      />)
    })}
     
      </Slider>
    </motion.div>


    <motion.div {...set} variants={container} className='text-left py-4 md:px-4'>
      <motion.h2 variants={itemUp(0.5)} className='font-bold text-green-600 text-2xl mb-4'>Technologies That I’ve use:</motion.h2>
      {listTech}
      <motion.div variants={itemUp(0.6)} className='md:mt-8 mt-0 flex gap-4 '>
      <Button title='View Code' icon={<BsGithub size={30} />} link={github}/>
      <Button title='Live Site' icon={<BsArrowUpRightCircle size={30}/>} link={live}/>
    </motion.div>
    </motion.div>

    </div>
    </div>
  )
}

export default projects


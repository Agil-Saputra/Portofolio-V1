// import all necessary iconss
import { BsGithub, BsArrowUpRightCircle } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import { TiArrowForward} from "react-icons/ti";

// import all animations
import { motion } from "framer-motion";
import { container, set, itemUp } from "../utils/motion";

// import slider from slick 
import Slider from "react-slick";

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
    <div className='mt-[1rem] mx-6 py-12 cursor-grab active:cursor-grabbing' id='Projects'>
    <div className='grid lg:grid-cols-4 grid-cols-1 items-start'>

    <motion.div {...set} variants={container} className='text-left p-4 '>
    <motion.p variants={itemUp(0.3)} className='font-bold text-green-600 text-2xl mb-4'>About Project</motion.p>
    <motion.p variants={itemUp(0.4)} className='font-medium '><span className='font-bold text-xl text-title'>{title}</span> {description}</motion.p>
    </motion.div>
          
    <motion.div {...set} variants={itemUp(0.5)} className='w-full col-span-2 rounded-lg shadow-xl'>
    <Slider {...settings}  >
    {images.map((img, i) =>  {
      {console.log(img)}
      return( 
      <img
      width={500} 
      height={280} 
      src={"https:" + img.fields.file.url} 
      className='h-[340px] rounded-lg w-full object-cover shadow-lg' 
      alt='Project Preview' 
      key={i}
      />)
    })}
     
      </Slider>
    </motion.div>


    <motion.div {...set} variants={container} className='text-left p-4'>
      <motion.h2 variants={itemUp(0.5)} className='font-bold text-green-600 text-2xl mb-4'>Technologies That I’ve use:</motion.h2>
      {listTech}
      <motion.div variants={itemUp(0.6)} className='md:mt-8 mt-0 flex gap-4 '>
          <a className="btn my-[1rem] shadow-2xl" href={github} target='_blank'>
      <span className="button_top">View Code<BsGithub size={30}/>
      </span>
      </a>
          <a className="btn my-[1rem] shadow-2xl" href={live} target='_blank'>
      <span className="button_top">Live Site<BsArrowUpRightCircle size={30}/>
      </span>
      </a>
    </motion.div>
    </motion.div>

    </div>
    </div>
  )
}

export default projects


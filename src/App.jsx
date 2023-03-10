import Navbar from "./components/header/navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projectApp";
import Contact from "./components/contact/contact";
import ProgressBar from "./components/ui/scrollProgressBar"
import Loading from "./components/ui/loading"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { useState, useEffect } from "react";
import { createClient } from "contentful";


const client = createClient({
  space: import.meta.env.VITE_APP_SPACE_ID,
  accessToken : import.meta.env.VITE_APP_ACCESS_TOKEN,
})

function App() {
const [content, setContent] = useState({})
const [projects, setProjects] = useState({})

useEffect(() => {
    client.getEntries({ content_type: 'content' })
      .then(res => setContent(res.items[0].fields));

    client.getEntries({ content_type: 'projects' })
      .then(res => setProjects(res))
}, [])

const loading = content.role

  return (
    <>
   {!loading ? <Loading/> : 
   <>
     <ProgressBar />
      <Navbar />
      <main className="md:px-[6.5rem] px-[1.5rem]">
        <Hero data={content}/>
        <About data={content}/>
        <Skills  />
        <Projects data={projects}/>
        <Contact data={content}/>
      </main>  
    </>
   }
    </>
  );
}

export default App;

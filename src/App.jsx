import Navbar from "./components/header/navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projectApp";
import Contact from "./components/contact/contact";
import ProgressBar from "./components/ui/scrollProgressBar"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
     <ProgressBar />
      <Navbar />
      <main className="md:px-[6.5rem] px-[1.5rem]">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact/>
      </main>  
    </>
  );
}

export default App;

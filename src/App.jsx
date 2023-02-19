import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projectApp";
import Contact from "./components/contact";
import ProgressBar from "./components/scrollProgressBar"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <ProgressBar />
      <Navbar />
      <main className="md:px-[6.5rem] px-[1.5rem]">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact/>
      </main>
     
    </div>
  );
}

export default App;

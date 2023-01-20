import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
function App() {
  return (
    <div className="">
      <Navbar />
      <main className="md:px-[8rem] px-[2.75rem]">
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

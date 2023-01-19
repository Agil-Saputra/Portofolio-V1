import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
function App() {
  return (
    <div className="">
      <Navbar />
      <main className="md:px-[5.5rem] px-[2.75rem]">
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;

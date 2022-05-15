import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience/>
      <Skills />
      <Projects />
      <Certifications />
    </div>
  );
}

export default App;

import "./assets/css/styles.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";
import Loader from "./components/Loader";

function App() {
  return (
    <><Loader />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
      <ScrollUp /> 
    </>
  );
}

export default App;

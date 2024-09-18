import { useEffect } from "react";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import Education from "./Components/Education/Education";
import WorkExp from "./Components/WorkExperience/WorkExp";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Services />
      <Projects />
      <WorkExp />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

//added comment

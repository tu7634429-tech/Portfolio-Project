import "./App.scss";
import useSmoothScroll from "./hooks/useSmoothScroll";

import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import Contact from "./sections/Contact/Contact";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import CaseStudies from "./sections/CaseStudies/CaseStudies";
import Experience from "./sections/Experience/Experience";
import Skills from "./sections/Skills/Skills";
import Services from "./sections/Services/Services";
import Testimonials from "./sections/Testimonials/Testimonials";

function App() {
  useSmoothScroll();

  return (
    <div className="app">
      <div className="app__bg app__bg--one" />
      <div className="app__bg app__bg--two" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <CaseStudies />
        <Experience />
        <Skills />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
import React from "react";
import Hero from "../sections/Hero";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <section id="home" className="">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </section>
  );
};

export default Home;

import React from "react";
import Hero from "../sections/Hero";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
// import Blogs from "../sections/Blogs";

const Home = () => {
  return (
    <section id="home" className="min-h-[calc(100vh-200px)]">
      <Hero />
      <Skills />
      <Projects />
      {/* <Blogs /> */}
      <Contact />
    </section>
  );
};

export default Home;

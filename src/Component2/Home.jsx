import React, { useEffect } from "react";
import WOW from "wowjs";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Header from "./Header/Header";
import NavBar from "./NavBar";

export default function Home() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <>
      <NavBar />
      <section id="header">
        <Header />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

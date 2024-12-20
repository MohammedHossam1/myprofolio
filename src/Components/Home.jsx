import About from "./About/About";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import NavBar from "./NavBar";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

export default function Home() {


  return (
    <>
      <section id="header">
        <NavBar />
      </section>
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

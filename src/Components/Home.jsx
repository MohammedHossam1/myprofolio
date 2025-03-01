import About from "./About/About";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import NavBar from "./NavBar";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

export default function Home() {
  return (
    <>
      <section>
        <NavBar />
      </section>
      <div className="container ">
        <section id="header">
          <Header />
        </section>
        <div className="space-y-20 lg:space-y-40">
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
        </div>
      </div>
    </>
  );
}

import { motion } from "framer-motion";
import "./Projects.css";

// Importing images
import imgBakery from "../../assets/projects/bakery.png";
import imgBookmarker from "../../assets/projects/bookmarker.png";
import imgEcommerce from "../../assets/projects/ecommercey.png";
import imgYoutube from "../../assets/projects/j.png";
import imgMeals from "../../assets/projects/meals.png";
import imgPortfolio from "../../assets/projects/protofolio.png";
import imgWeather from "../../assets/projects/weather.png";
import greenCar from "../../assets/projects/greencar.png";
import shgrade from "../../assets/projects/shgrade.png";

// Project data
const projects = [
  {
    title: "E-Commerce",
    imgSrc: imgEcommerce,
    codeLink: "https://e-commercy.vercel.app/",
    demoLink: "https://mohammedhossam1.github.io/ECommercy/",
  },
  {
    title: "Youtubeclone",
    imgSrc: imgYoutube,
    codeLink: "https://github.com/MohammedHossam1/Youtubeclone",
    demoLink: "https://amboba.vercel.app/",
  },
  {
    title: "Weather",
    imgSrc: imgWeather,
    codeLink: "https://github.com/MohammedHossam1/weather/",
    demoLink: "https://mohammedhossam1.github.io/weather/",
  },
  {
    title: "Portfolio",
    imgSrc: imgPortfolio,
    codeLink: "https://github.com/MohammedHossam1/DevFolio",
    demoLink: "https://mohammedhossam1.github.io/DevFolio/",
  },
  {
    title: "Meals",
    imgSrc: imgMeals,
    codeLink: "https://github.com/MohammedHossam1/Meals",
    demoLink: "https://mohammedhossam1.github.io/Meals/",
  },
  {
    title: "Bakery",
    imgSrc: imgBakery,
    codeLink: "https://github.com/MohammedHossam1/bakery",
    demoLink: "https://mohammedhossam1.github.io/bakery/",
  },
  {
    title: "BookMarker",
    imgSrc: imgBookmarker,
    codeLink: "https://github.com/MohammedHossam1/Bookmarker",
    demoLink: "https://mohammedhossam1.github.io/Bookmarker/",
  },
  {
    title: "GreenCar",
    imgSrc: greenCar,
    codeLink: null,
    demoLink: "https://greencar.app/",
  },
  {
    title: "Shgrade",
    imgSrc: shgrade,
    codeLink: null,
    demoLink: "https://shgrade.serv5.com.eg/",
  },
];

// Reusable Project Card Component
function ProjectCard({ title, imgSrc, codeLink, demoLink, delay }) {
  return (
    <motion.div
      className="col-lg-4 col-md-6 col-sm-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5}}
      viewport={{once:true}}
    >
      <div className="project-card rounded-2 h-100 position-relative">
        <div className="layer w-100 h-100 d-flex flex-column justify-content-center position-absolute">
          <h2 className="text-center fw-bold">{title}</h2>
          <div className="d-flex justify-content-center">
            {codeLink && (
              <a
                className="btn px-5 mx-1 codeBtn"
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                CODE
              </a>
            )}
            <a
              className="btn px-5 mx-1 demoBtn"
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              DEMO
            </a>
          </div>
        </div>
        <img src={imgSrc} className="w-100 rounded-3 h-100" alt={title} />
      </div>
    </motion.div>
  );
}

// Main Projects Component
export default function Projects() {
  return (
    <div className="projects my-lg-5 py-5" id="projects">
      <h1 className="position-absolute z-3 m-3 top-0 end-0 mobheadline text-center fw-bold fa-3x">
        <span className="proj-span">MY</span>PROJECTS
      </h1>
      <div className="my-4">
        <h1 className="bigheadline text-center my-5 fw-bold fa-3x">
          <span className="proj-span">MY</span>PROJECTS
        </h1>
        <div className="row g-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              delay={index * 0.3} // Set delay based on index
            />
          ))}
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import Modal from "./ProjectModal";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
// Importing images
import imgBakery from "../../assets/projects/bakery.png";
import imgBookmarker from "../../assets/projects/bookmarker.png";
import imgEcommerce from "../../assets/projects/ecommercey.png";
import greenCar from "../../assets/projects/greencar.png";
import imgYoutube from "../../assets/projects/j.png";
import imgMeals from "../../assets/projects/meals.png";
import imgPortfolio from "../../assets/projects/protofolio.png";
import shgrade from "../../assets/projects/shgrade.png";
import imgWeather from "../../assets/projects/weather.png";

// Project data
const projects = [
  {
    title: "E-Commerce",
    imgSrc: imgEcommerce,
    codeLink: "https://e-commercy.vercel.app/",
    demoLink: "https://mohammedhossam1.github.io/ECommercy/",
    description: "An advanced e-commerce platform for online shopping.",
    skills: ["HTML","CSS","JS","React", "Bootstrap", "JavaScript"],
  },
  {
    title: "Youtubeclone",
    imgSrc: imgYoutube,
    codeLink: "https://github.com/MohammedHossam1/Youtubeclone",
    demoLink: "https://amboba.vercel.app/",
    description: "A clone of YouTube with search and video playback features.",
    skills: ["HTML","CSS","JS","React","MUI", "YouTube API"],
  },
  {
    title: "Weather",
    imgSrc: imgWeather,
    codeLink: "https://github.com/MohammedHossam1/weather/",
    demoLink: "https://mohammedhossam1.github.io/weather/",
    description: "A weather app showing live forecasts.",
    skills: ["HTML","CSS","JS","React", "API Integration"],
  },
  {
    title: "Portfolio",
    imgSrc: imgPortfolio,
    codeLink: "https://github.com/MohammedHossam1/DevFolio",
    demoLink: "https://mohammedhossam1.github.io/DevFolio/",
    description: "A personal portfolio showcasing projects and skills.",
    skills: ["HTML", "CSS", "JavaScript","Bootstrap"],
  },
  {
    title: "Meals",
    imgSrc: imgMeals,
    codeLink: "https://github.com/MohammedHossam1/Meals",
    demoLink: "https://mohammedhossam1.github.io/Meals/",
    description: "A recipe app displaying popular meal ideas.",
    skills: ["HTML", "CSS", "JavaScript", "React","API Integration"],
  },
  {
    title: "Bakery",
    imgSrc: imgBakery,
    codeLink: "https://github.com/MohammedHossam1/bakery",
    demoLink: "https://mohammedhossam1.github.io/bakery/",
    description: "A landing page for a bakery business.",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "BookMarker",
    imgSrc: imgBookmarker,
    codeLink: "https://github.com/MohammedHossam1/Bookmarker",
    demoLink: "https://mohammedhossam1.github.io/Bookmarker/",
    description: "An app to manage and organize bookmarks.",
    skills: ["HTML","CSS","Bootstrap", "JavaScript"],
  },
  {
    title: "GreenCar",
    imgSrc: greenCar,
    codeLink: null,
    demoLink: "https://greencar.app/",
    description: "An application for car rentals.",
    skills: ["HTML","CSS","Tailwind", "JavaScript","Zod","React use form","Nextjs","UI Design", "Responsive Layout"],
  },
  {
    title: "Shgrade",
    imgSrc: shgrade,
    codeLink: null,
    demoLink: "https://shgrade.serv5.com.eg/",
    description: "An e-commerce store specializing in phones and electronics. It offers users a seamless shopping experience with several features that enhance convenience, including:Multiple Payment Gateways: To facilitate online payments through various methods.Product Filtering: Allowing users to filter products by category, price, brand, and more, making it easier to find the right item.Authentication System (Auth): Enabling users to register and log in to track their orders and manage their data.Shopping Cart: For adding products and adjusting quantities easily.Wishlist: Allowing users to save their favorite products for later review and more...",
    skills: ["HTML","CSS","Tailwind","JavaScript","Zod","React use form","Zustand","Next.js", "API Integration", "Teamwork"],
  },
];

// Main Projects Component
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

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
              onInfoClick={() => handleOpenModal(project)}
            />
          ))}
        </div>
      </div>
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </div>
  );
}

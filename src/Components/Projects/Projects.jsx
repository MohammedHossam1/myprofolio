import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Modal from "./ProjectModal";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projectsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().name || "Untitled Project",
          imgSrc: doc.data().url || "default-image-url.jpg",
          codeLink: doc.data().code || "",
          demoLink: doc.data().demo || "",
          description: doc.data().description || "...",
          best: doc.data().best || false, 
          Images: doc.data().Images || [], 
          skills: doc.data().skills || [], 
          video: doc.data().video || "",
        }));
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects my-lg-5 " id="projects">
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="m-3 mobheadline fw-bold"
      >
        <span className="proj-span">MY</span>PROJECTS
      </motion.h1>
      <div className="">
        <h1 className="bigheadline text-center my-3 fw-bold fa-3x">
          <span className="proj-span">MY</span>PROJECTS
        </h1>
        <div className="row g-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              delay={index * 0.3}
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

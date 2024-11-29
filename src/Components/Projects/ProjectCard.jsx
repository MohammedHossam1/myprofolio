import { motion } from "framer-motion";
import { FaInfoCircle } from "react-icons/fa";

export default function ProjectCard({
  title,
  imgSrc,
  codeLink,
  demoLink,
  delay,
  onInfoClick,
}) {
  return (
    <motion.div
      className=" col-lg-4 col-md-6 col-sm-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
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
        <FaInfoCircle
          className="info-icon  position-absolute text-white top-0 end-0 m-3"
          size={24}
          onClick={onInfoClick}
        />
      </div>
    </motion.div>
  );
}

import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

export default function Modal({ isOpen, onClose, project }) {
  // Only render the modal if it's open
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }} // Fade out when the modal is closing
          onClick={handleOverlayClick}
          transition={{ duration: 0.3 }} // Smoother fade-out transition
        >
          <motion.div
            className="modal-content"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: -50 }} // Slide up when closing
            transition={{ duration: 0.3 }} // Smoother slide-out transition
          >
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <h4>Skills Used:</h4>
            <ul className="d-flex gap-2 ms-0 flex-wrap">
              {project.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Close modal if clicked outside of it
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }
}

import { motion } from "framer-motion";
import { useState } from "react";
import ProjectDialog from "./ProjectDialog"; // استدعاء المكون الجديد

export default function ProjectCard({
  title,
  imgSrc,
  codeLink,
  demoLink,
  delay,
  best,
  description,
  Images,
  video,
  skills,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenDialog = () => setIsOpen(true);
  const handleCloseDialog = () => setIsOpen(false);

  return (
    <>
      <motion.div
        className="col-lg-4 col-md-6 col-sm-12 cursor-pointer transition-all duration-300 ease-in-out"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
        whileTap={{ scale: 0.98 }}
        onClick={handleOpenDialog}
        tabIndex={0}
        role="button"
        aria-label={`Open ${title} project details`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleOpenDialog();
        }}
      >
        <div className="project-card rounded-2 h-100 position-relative group hover:shadow-xl transition-shadow duration-300">
          <div className="absolute inset-0 bg-black/30 hidden group-hover:flex items-center justify-center" />
          {best && (
            <motion.div
              className="ribbon"
              role="banner"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.2, duration: 0.3 }}
            >
              <span className="font-bold text-white">Featured</span>
            </motion.div>
          )}
          <motion.img
            src={imgSrc}
            className="w-100 rounded-3 object-cover h-[250px] hover:opacity-90 transition-opacity duration-300"
            alt={`${title} project thumbnail`}
            loading="lazy"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + 0.1, duration: 0.4 }}
          />
        </div>
      </motion.div>

      {/* Reusable Dialog */}
      <ProjectDialog
        isOpen={isOpen}
        onClose={handleCloseDialog}
        title={title}
        description={description}
        skills={skills}
        codeLink={codeLink}
        demoLink={demoLink}
        Images={Images}
        video={video}
      />
    </>
  );
}

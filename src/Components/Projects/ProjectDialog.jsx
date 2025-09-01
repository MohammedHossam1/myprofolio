// components/ProjectDialog.jsx
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

export default function ProjectDialog({
  isOpen,
  onClose,
  title,
  description,
  skills,
  codeLink,
  demoLink,
  Images,
  video,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed   inset-0 !m-0 z-[1000] pt-2 md:flex items-center  bg-black/40 justify-center backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="dialog-title"
        >
          <motion.div
            className=" xl:overflow-hidden grid grid-cols-3 max-sm:max-w-screen-sm max-xl:max-w-[90vw] m-auto xl:flex-row gap-3 hide-scrollbar h-[90vh] w-full "
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 50, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left panel */}
            <div className="relative h-[50vh] xl:h-[90vh] col-span-3 xl:col-span-1 px-4 py-3 lg:p-8 bg-gradient-to-b from-gray-50 to-gray-100 border-r flex flex-col justify-between border-gray-200 rounded-xl">
              <motion.button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={onClose}
                aria-label="Close dialog"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes size={24} />
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="overflow-y-auto"
              >
                <h2 id="dialog-title" className="text-2xl font-bold mb-3 text-gray-800">{title}</h2>
                <p className="text-xs md:text-md text-gray-600 mb-2 md:mb-6 md:leading-relaxed  ">{description}</p>
                <div className="flex py-2 gap-2 overflow-x-auto hide-scrollbar " role="list" aria-label="Technologies used">
                  {skills && Array.isArray(skills) ? skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      role="listitem"
                      className="bg-gray-200 px-2 py-1 h-fit text-nowrap rounded-full text-xs md:text-sm text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  )) : <span className="text-sm text-gray-500">No skills listed</span>}
                </div>
              </motion.div>

              <motion.div
                className="flex justify-between items-center gap-2 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                {codeLink ? (
                  <motion.a
                    className="btn !flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 md:px-6 py-3 rounded-lg font-medium transition-colors duration-200 !text-black hover:!text-main max-md:!text-xs"
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub size={18} />
                    View Code
                  </motion.a>
                ) : (
                  <button className="text-gray-600 cursor-not-allowed flex items-center gap-2  max-md:!text-xs" disabled>
                    <FaGithub size={14} />
                    Private Code
                  </button>
                )}

                {demoLink && (
                  <motion.a
                    className="btn !flex items-center justify-center gap-2 max-md:!text-xs bg-main hover:bg-indigo-700 rounded-lg font-medium transition-colors duration-200 !text-black hover:!text-main"
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </motion.a>
                )}
              </motion.div>
            </div>

            {/* Right panel */}
            {(Images || video) && (
              <div className="overflow-y-auto h-[45vh] xl:h-[90vh] hide-scrollbar rounded-xl col-span-3 xl:col-span-2 ">
                <div className="grid grid-cols-1 gap-3 xl:gap-6">
                  {Images?.map((item, index) => (
                    <motion.div
                      key={index}
                      className="w-full h-full backdrop-blur-lg  rounded-lg p-2 xl:p-10"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    >
                      <motion.img
                        src={item}
                        alt={`${title} screenshot ${index + 1}`}
                        className="rounded-lg w-full h-auto shadow-md hover:shadow-xl transition-shadow duration-300"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}

                  {video && (
                    <motion.div
                      className="w-full h-full backdrop-blur-lg rounded-lg p-4 xl:!p-8 xl:pt-0"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      <motion.video
                        src={video}
                        controls
                        className="rounded-lg w-full shadow-md hover:shadow-xl transition-shadow duration-300"
                        preload="none"
                      />
                    </motion.div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

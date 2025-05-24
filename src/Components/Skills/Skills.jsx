import { motion } from "framer-motion";
import github from "../../assets/git.png";
import bootstrapIc from "../../assets/icons8-bootstrap-240.png";
import cssIc from "../../assets/icons8-css-240.png";
import htmlIc from "../../assets/icons8-html-240.png";
import jsIc from "../../assets/icons8-js-240.png";
import nextIc from "../../assets/icons8-nextjs-240.png";
import tsIc from "../../assets/icons8-typescript-240.png";
import jqIc from "../../assets/pngwing.com.png";
import reactIc from "../../assets/react-1-logo-png-transparent.png";
import sql from "../../assets/sql.webp";
import tailwindIc from "../../assets/tailwind.png";
import './Skills.css';

export default function Skills() {
  return (
    <div className="skills my-lg-5 lg:py-5">
      <motion.h1
        initial={{y:-40,opacity:0}}
        whileInView={{y:0,opacity:1}}
        viewport={{once:true}}
        transition={{duration: 1}}
        className="m-3 mobheadline fw-bold"
      >
        <span className="proj-span">MY</span>SKILLS
      </motion.h1>
      
      <h1 className="text-center bigheadline my-3 fw-bold fa-3x">
        <span className="skill-span">MY</span>SKILLS
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto px-4">
        {[
          { src: htmlIc, alt: "HTML5", label: "HTML5" },
          { src: cssIc, alt: "CSS3", label: "CSS3" },
          { src: jsIc, alt: "JavaScript", label: "JavaScript" },
          { src: bootstrapIc, alt: "Bootstrap", label: "Bootstrap" },
          { src: tailwindIc, alt: "Tailwind", label: "Tailwind" },
          { src: reactIc, alt: "React", label: "React JS" },
          { src: nextIc, alt: "Next.js", label: "Next JS" },
          { src: jqIc, alt: "jQuery", label: "jQuery" },
          { src: github, alt: "GitHub", label: "Git/GitHub" },
          { src: tsIc, alt: "TypeScript", label: "TypeScript" },
          { src: sql, alt: "SQL", label: "SQL Server" },
        ].map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            viewport={{once:true}}
            whileHover={{ scale: 1.1 }}
          >
            <div className="bg-gray-800/30 p-4 rounded-xl backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 w-full aspect-square flex items-center justify-center">
              <img 
                src={skill.src} 
                className="w-16 h-16 object-contain filter hover:brightness-110 transition-all duration-300" 
                alt={skill.alt}
              />
            </div>
            <h2 className="mt-3 text-sm font-medium text-gray-200">{skill.label}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

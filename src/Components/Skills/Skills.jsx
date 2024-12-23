import { motion } from "framer-motion";
import github from "../../assets/git.png";
import bootstrapIc from "../../assets/icons8-bootstrap-240.png";
import cssIc from "../../assets/icons8-css-240.png";
import htmlIc from "../../assets/icons8-html-240.png";
import jsIc from "../../assets/icons8-js-240.png";
import nextIc from "../../assets/icons8-nextjs-240.png";
import tsIc from "../../assets/icons8-typescript-240.png";
import photoshop from "../../assets/photoshop.png";
import jqIc from "../../assets/pngwing.com.png";
import reactIc from "../../assets/react-1-logo-png-transparent.png";
import sql from "../../assets/sql.webp";
import tailwindIc from "../../assets/tailwind.png";
import './Skills.css';

export default function Skills() {
  return (
    <div className="skills my-lg-5 py-5">
      <motion.h1
      initial={{y:-40,opacity:0}}
      whileInView={{y:0,opacity:1}}
      viewport={{once:true}}
      transition={{duration: 1 }}

      className="m-3 mobheadline  fw-bold ">
        <span className="proj-span">MY</span>SKILLS
      </motion.h1>
      <div className="my-5">
        <h1 className="text-center my-5 bigheadline fw-bold fa-3x">
          <span className="skill-span">MY</span>SKILLS
        </h1>

        <div className="row d-flex justify-content-center w-100">
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
            { src: photoshop, alt: "Photoshop", label: "Photoshop" }
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="col-lg-1 col-md-3 col-sm-4 col-6 d-flex justify-content-center flex-column align-items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.2 }}
              viewport={{once:true}}

            >
              <div className="border m-1 rounded-2 skill-icon">
                <img src={skill.src} className="w-100" alt={skill.alt} />
              </div>
              <h2 className="fa-1x">{skill.label}</h2>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

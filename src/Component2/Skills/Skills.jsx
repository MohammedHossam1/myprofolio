import React, { useEffect } from "react";
import WOW from "wowjs";
import bootstrapIc from "../../assets/icons8-bootstrap-240.png";
import htmlIc from "../../assets/icons8-html-240.png";
import cssIc from "../../assets/icons8-css-240.png";
import jsIc from "../../assets/icons8-js-240.png";
import jqIc from "../../assets/pngwing.com.png";
import reactIc from "../../assets/react-1-logo-png-transparent.png";
import nextIc from "../../assets/icons8-nextjs-240.png";
import tsIc from "../../assets/icons8-typescript-240.png";
import sassIc from "../../assets/icons8-sass-240.png";
import sql from "../../assets/sql.webp";
import photoshop from "../../assets/photoshop.png";
import github from "../../assets/git.png";
import dotnetIc from "../../assets/NET_Core_Logo.svg.png";
import csharpIc from "../../assets/cc.jpg";
import './Skills.css';

export default function Skills() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div className="skills my-lg-5 py-5">
      <h1 className="position-absolute wow slideInDown m-3 z-3 top-0 end-0 mobheadline text-center fw-bold fa-3x">
        <span className="proj-span">MY</span>SKILLS
      </h1>
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
            { src: reactIc, alt: "React", label: "React JS" },
            { src: nextIc, alt: "Next.js", label: "Next JS" },
            { src: jqIc, alt: "jQuery", label: "jQuery" },
            { src: github, alt: "GitHub", label: "Git/GitHub" },
            { src: tsIc, alt: "TypeScript", label: "TypeScript" },
            { src: sassIc, alt: "Sass", label: "Sass" },
            { src: sql, alt: "SQL", label: "SQL Server" },
            { src: dotnetIc, alt: ".NET", label: ".NET" },
            { src: csharpIc, alt: "C#", label: "C#" },
            { src: photoshop, alt: "Photoshop", label: "Photoshop" }
          ].map((skill, index) => (
            <div key={index} className="col-lg-1 col-md-3 col-sm-4 col-6 wow pulse d-flex justify-content-center flex-column align-items-center">
              <div className="border m-1 rounded-2 skill-icon">
                <img src={skill.src} className="w-100" alt={skill.alt} />
              </div>
              <h2 className="fa-1x">{skill.label}</h2>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

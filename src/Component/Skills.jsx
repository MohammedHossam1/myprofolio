import React from "react";
import bootstrapIc from "../assets/icons8-bootstrap-240.png";
import htmlIc from "../assets/icons8-html-240.png";
import cssIc from "../assets/icons8-css-240.png";
import jsIc from "../assets/icons8-js-240.png";
import jqIc from "../assets/pngwing.com.png";
import reactIc from "../assets/react-1-logo-png-transparent.png";
import nextIc from "../assets/icons8-nextjs-240.png";
import tsIc from "../assets/icons8-typescript-240.png";
import sassIc from "../assets/icons8-sass-240.png";
import sql from "../assets/sql.webp";

import photoshop from "../assets/photoshop.png";
import github from "../assets/git.png";
import WOW from 'wowjs'
import { useEffect } from 'react';
export default function Skills() {

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div className="skills py-5 ">
       <h1 className="position-absolute  m-3 z-3 top-0 end-0 mobheadline text-center fw-bold fa-3x ">
        <span className="proj-span">MY</span>SKILLS
      </h1>
      <div className=" my-5">
        <h1 className="text-center bigheadline fw-bold fa-3x">
          <span className="skill-span">MY</span>SKILLS
        </h1>
        <div className="row d-flex justify-content-center w-100">
          <div className= " col-md-2 wow pulse col-6  d-flex justify-content-center flex-column align-items-center">
            <div className="border m-1 rounded-2 ">
              <img src={htmlIc} className="w-100" alt="" />
            </div>
            <h2>HTML5</h2>

          </div>
          <div className="col-md-2 wow pulse col-6  d-flex justify-content-center flex-column align-items-center">
            <div className="border m-1 rounded-2">
              <img src={cssIc} className="w-100" alt="" />
            </div>
            <h2>CSS3</h2>
          </div>
          <div className="col-md-2 wow pulse col-6  d-flex justify-content-center flex-column align-items-center">
            <div className="border m-1 rounded-2">
              <img src={jsIc} className="w-100" alt="" />
            </div>
            <h2>JAVASCRIPT</h2>
          </div>
          <div className="col-md-2 wow pulse col-6  d-flex justify-content-center flex-column align-items-center">
            <div className="border m-1 rounded-2">
              <img src={bootstrapIc} className="w-100" alt="BOOTSTRAB" />
            </div>
            <h2>BOOTSTRAB</h2>
          </div>
          <div className="col-md-2 wow pulse col-6  d-flex justify-content-center flex-column align-items-center">
            <div className="border m-1 rounded-2">
              <img src={reactIc} className="w-100 rounded-5" alt="REACT" />
            </div>
            <h2>REACT JS</h2>
          </div>
          <div className="col-md-2 wow pulse col-6  d-flex justify-content-center flex-column align-items-center">
            <div className="border m-1 rounded-2">
              <img src={nextIc} className="w-100" alt="NEXT" />
            </div>
            <h2>NEXT JS</h2>
          </div>
        </div>
        <div className="row d-flex justify-content-center w-100">
        
          <div className="col-md-2 wow pulse col-6  d-flex justify-content-center flex-column align-items-center">
            <div className="border m-1 rounded-2">
              <img src={jqIc} className="w-100" alt="JQUERY" />
              
            </div>
            <h2>JQUERY</h2>
          </div>
          <div className="col-md-2 wow pulse col-6  d-flex justify-content-center flex-column align-items-center">
            <div className="border m-1 rounded-2">
              <img src={github} className="w-100" alt="GITHUB" />
            </div>
            <h2>GIT/GITHUB</h2>
          </div>
          <div className="col-md-2 wow pulse col-6  d-flex justify-content-center flex-column align-items-center">
            <div className="border m-1 rounded-2">
              <img src={tsIc} className="w-100" alt="TYPESCRIPT" />
            </div>
            <h2>TYPESCRIPT</h2>
          </div>
          <div className="col-md-2 wow pulse col-6  d-flex justify-content-center flex-column align-items-center">
            <div className="border m-1 rounded-2">
              <img src={sassIc} className="w-100" alt="SASS" />
            </div>
            <h2>SASS</h2>

          </div>
          <div className="col-md-2 wow pulse col-6  d-flex justify-content-center flex-column align-items-center">
            <div className="border m-1 rounded-2">
              <img src={sql} className="w-100" alt="sql" />
            </div>
            <h2>SQL SERVER</h2>

          </div>
          <div className="col-md-2 wow pulse col-6  d-flex justify-content-center flex-column align-items-center">
            <div className="border m-1 rounded-2">
              <img src={photoshop} className="w-100" alt="photoshop" />
            </div>
            <h2>PHOTOSHOP</h2>

          </div>
        </div>
        
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about  py-5">
      <div className="  text-center mt-3">
        <h2>
          ABOUT<span className="about-span">ME</span>
        </h2>
        <div className="row ">
          <div className="col-md-6   ms-auto ">
            <h4 className="text-start mt-5 fw-bold"> PERSONAL INFOS</h4>
            <div className="row">
              <div className="col-md-4 ">
                <div className="d-flex flex-column align-items-start">
                  <h5 className="my-3">
                    First name : <span>Mohammed</span>
                  </h5>
                  <h5 className="my-3">
                    Last name : <span>Hossam</span>
                  </h5>
                  <h5 className="my-3">
                    Age : <span>25</span>
                  </h5>
                  <h5 className="my-3">
                  Military : <span>Completed</span>
                  </h5>
                </div>
              </div>
              <div className="col-md-7 ">
                <div className="d-flex flex-column align-items-start">
                  <h5 className="my-3">
                    Address : <span>Egypt-Giza</span>
                  </h5>
                  <h5 className="my-3">
                    Phone : <span>+201125997082</span>
                  </h5>
                  <h5 className="my-3">
                    Email : <span>mohammedhossam199998@gmail</span>
                  </h5>
                </div>
              </div>
              <a download='Resume.pdf' class="bttn ps-3 my-4 w-auto d-flex justify-content-between rounded-5 align-items-center p-0" href="Resume.pdf">Download CV
              <div className="home-ic rounded-5 d-flex justify-content-center align-items-center ms-2 "><i className="fas  fa-2x  fa-arrow-right "></i></div>
            </a>
            </div>
          </div>
          <div className="col-md-5 text-start   ">
            <h4 className="text-start mt-5 fw-bold " >EDUCATION</h4>
         <h5 className="h3 mb-5 mt-3  text-white">- Faculty of Commerce <span className="text-secondary mx-2">2017-2020</span></h5>
         <h5 className="h3 my-5  text-white">- Fundemintal of programming <span className="text-secondary mx-2">Roote Academey</span></h5>
         <h5 className="h3 my-5  text-white">- Frontend  <span className="text-secondary mx-2">Roote Academey</span></h5>
         
          </div>
        </div>
      </div>
    </section>
  );
}

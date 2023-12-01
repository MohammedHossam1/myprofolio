import React, { useEffect, useState } from "react";
import WOW from "wowjs";
import mo from "../assets/bg.jpg";
import co from "../assets/image.png";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <section className="about  py-5">
      <h1 className="position-absolute mobheadline end-0 top-0 m-3" >
          ABOUT<span className=" about-span">ME</span>
        </h1>
      <div className="  text-center mt-3">
        <h1 className="bigheadline" >
          ABOUT<span className=" about-span">ME</span>
        </h1>
        <div className=" w-100 justify-content-center myimgcontainer  d-flex  align-items-center ">
          <div className=" myimg rounded-circle">
            <img
              src={isHovered ? co : mo}
              onMouseOver={() => setIsHovered(true)}
              onMouseOut={() => setIsHovered(false)}
              alt=""
              className="w-100  rounded-circle "
              id="myImage"
            />
          </div>
        </div>


        <div className="row position-relative ">
          <div className="col-md-7   ">
            <h4 className="text-start mt-5 fw-bold ps-3 "> PERSONAL INFOS</h4>
            <div className="row  ps-3">
              <div className="col-lg-5  ">
                <div className="d-flex flex-column align-items-start">
                  <h5 className="my-3">
                    First name : <span>Mohammed</span>
                  </h5>
                  <h5 className="my-3">
                    Address : <span>Egypt-Giza</span>
                  </h5>
                  <h5 className="my-3">
                    Age : <span>25</span>
                  </h5>
                  <h5 className="my-3">
                    Military : <span>Completed</span>
                  </h5>
           
                </div>
              </div>
              <div className="col-md-7">
                <div className="d-flex flex-column align-items-start">
                <h5 className="my-3">
                    Last name : <span>Hossam</span>
                  </h5>
                
                  <h5 className="my-3">
                    Phone : <span>+201125997082</span>
                  </h5>
                  <h5 className="my-3">
                  Marital status : <span>Single</span>
                  </h5>
                  <h5 className="my-3 d-flex flex-md-row flex-column text-start flex-wrap ">
                   <h5 className=""> Email :</h5>
                    <span className=""> mohammedhossam199998@gmail</span>
                  </h5>
                </div>
              </div>
              <a
                download="Resume.pdf"
                class="bttn ps-3 my-4 w-auto d-flex justify-content-between rounded-5 align-items-center p-0"
                href="Resume.pdf"
              >
                Download CV
                <div className="home-ic rounded-5 d-flex justify-content-center align-items-center ms-2 ">
                  <i className="fas  fa-2x  fa-arrow-right "></i>
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-5  education text-start  ps-3 ">
            <h4 className="text-start ps-3 mt-5 fw-bold ">EDUCATION</h4>
            <h5 className="h3 mb-5 mt-3  text-white">
              - Faculty of Commerce{" "}
              <span className="text-secondary mx-2">2017-2020</span>
            </h5>
            <h5 className="h3 my-5  text-white">
              - Fundemintal of programming{" "}
              <span className="text-secondary mx-2">Roote Academey</span>
            </h5>
            <h5 className="h3 my-5  text-white">
              - Frontend{" "}
              <span className="text-secondary mx-2">Roote Academey</span>
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useEffect } from "react";
import WOW from "wowjs";
import mo from "../../assets/bg.jpg";
import "./About.css";

export default function About() {
  //my age
  const birthDate = new Date("1998-03-05");
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthDate.getFullYear();

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <section className="about py-5 my-lg-5">
      <h1 className="position-absolute mobheadline end-0 top-0 m-3">
        ABOUT<span className="about-span">ME</span>
      </h1>
      <div className="text-center mt-3">
        <h1 className="bigheadline wow slideInDown">
          ABOUT<span className="about-span">ME</span>
        </h1>
        <div className="w-100 justify-content-center  d-flex align-items-center myimgcontainer">
          <div className="myimg  rounded-circle">
            <img
              src={mo}
              alt="Profile"
              className="w-100 rounded-circle"
              id="myImage"
            />
          </div>
        </div>
        <div className="row position-relative mt-5">
          <div className="col-lg-6 wow slideInLeft mb-5 mb-lg-0">
            <div className="row ps-3">
              <div className="text-start">
                <div className="notification personal-info">
                  <div className="notiglow"></div>
                  <div className="notiborderglow"></div>
                  <div className="notititle">Personal Information</div>
                  <div className="notibody">
                    <h5 className="">
                      First name: <span>Mohammed</span>
                    </h5>
                    <h5 className="my-3">
                      Last name: <span>Hossam</span>
                    </h5>
                    <h5 className="my-3">
                      Address: <span>Egypt-Giza</span>
                    </h5>
                    <h5 className="my-3">
                      Age: <span>{age}</span>
                    </h5>
                    <h5 className="my-3">
                      Phone: <span>+201125997082</span>
                    </h5>
                    <h5 className="my-3">
                      Military: <span>Completed</span>
                    </h5>
                  
                    <h5 className="my-3 ">
                      Email: <span className="text-break">
                        mohammedhossam199998@gmail.com
                      </span>
                    </h5>
                  </div>
                </div>
              </div>

             <a
                download
                className="download-btn  ms-3 w-50 d-flex justify-content-between align-items-center  rounded-5 mt-4"
                href="https://drive.google.com/uc?export=download&id=1AUXp5poMyns03IxS-kbj1pptqBetzMOk"
              >
                Download CV
                <div className="download-icon rounded-5 d-flex justify-content-center align-items-center ms-2">
                  <i className="fas fa-arrow-right fa-2x"></i>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-6 wow slideInRight education text-start ps-3">
            <div className="notification education">
              <div className="notiglow"></div>
              <div className="notiborderglow"></div>
              <div className="notititle">Education</div>
              <div className="notibody">
                <h5 className="h3 mb-5 text-white">
                   Faculty of Commerce{" "}
                  <span className="text-secondary mx-2">2016-2020</span>
                </h5>
                <h5 className="h3 my-5 text-white">
                   Fundamental of Programming{" "}
                  <span className="text-secondary mx-2">Roote Academy</span>
                </h5>
                <h5 className="h3 my-5 text-white">
                   Frontend{" "}
                  <span className="text-secondary mx-2">Roote Academy</span>
                </h5>
                <h5 className="h3 my-5 text-white">
                   Backend{" "}
                  <span className="text-secondary mx-2">Roote Academy</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import mo from "../assets/bg.jpg";
import { Link } from "react-router-dom";
import WOW from 'wowjs'
import { useEffect } from 'react';
export default function Home() {
  // const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    new WOW.WOW().init();
  }, []);


  return (
    <header className="home wow fadeIn w-100 vh-100">
      <div className="  h-100">
        <div className="row d-flex align-items-center h-100 ">
          <div className="  col-md-4 h-100 position-relative d-flex ">
            <div className=" opacity-50 d-flex align-items-center ">
              <div className="myimgdiv rounded-circle">
              </div>
            </div>
            <div className="  top-50 translate-middle-y  d-flex position-absolute align-items-center ">
              <div className=" myimg rounded-circle">
                
                <img src={mo}  
                 alt="" className="w-100 rounded-circle " id="myImage" />
              </div>
            </div>
          </div>
          <div className="col-md-7 ms-auto  p-md-5 ps-3  d-flex justify-content-center flex-column align-items-start">
            <h2 className="fw-bold home-h2 ">
              {" "}
              I'M Mohammed Hossam.{" "}
              <span className="text-white ">Frontend developer</span>
            </h2>
            <p className="home-p">
              I'm an Egyption based front-end developer focused on crafting clean
              & user-friendly experiences, I am passionate about building
              excellent software that improves the lives of those around me.
            </p>

            <Link
              class="bttn ps-3 d-flex justify-content-between rounded-5 align-items-center p-0"
              to="/about"
            >
              MORE ABOUT ME
              <div className="home-ic rounded-5 d-flex justify-content-center align-items-center ms-2 ">
                <i className="fas  fa-2x  fa-arrow-right "></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

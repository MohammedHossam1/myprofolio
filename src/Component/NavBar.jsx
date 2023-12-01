import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  

  return (
    <>
      <div className=" navBar ">
        <ul className=" me-4 mb-2 h-100 d-flex flex-md-column align-items-end justify-content-center ">
          <li className="  my-2 mx-1  ">
            <NavLink
              to=""
              className="d-flex nav-text rounded-5 justify-content-center align-items-center "
            >
              <h3 className="d-flex justify-content-end  h6 m-0">Home</h3>
              <div className="nav-ic shadow d-flex rounded-circle justify-content-center align-items-center">
                <i className="fas fa-home"></i>
              </div>
            </NavLink>
          </li>
          <li className="  my-2 mx-1  ">
            <NavLink
              to="about"
              className="d-flex nav-text rounded-5 justify-content-center align-items-center "
            >
              <h3 className="d-flex justify-content-end  h6 m-0">About</h3>
              <div className="nav-ic shadow d-flex rounded-circle justify-content-center align-items-center">
                <i class="fa-solid fa-user"></i>
              </div>
            </NavLink>
          </li>
          <li className="  my-2 mx-1  ">
            <NavLink
              to="projects"
              className="d-flex nav-text rounded-5 justify-content-center align-items-center "
            >
              <h3 className="d-flex justify-content-end  h6 m-0">Projects</h3>
              <div className="nav-ic shadow d-flex rounded-circle justify-content-center align-items-center">
                <i class="fa-solid fa-briefcase"></i>
              </div>
            </NavLink>
          </li>
          <li className="  my-2 mx-1  ">
            <NavLink
              to="skills"
              className="d-flex nav-text rounded-5 justify-content-center align-items-center "
            >
              <h3 className="d-flex justify-content-end  h6 m-0">Skills</h3>
              <div className="nav-ic shadow d-flex rounded-circle justify-content-center align-items-center">
                <i class="fa-solid fa-layer-group"></i>
              </div>
            </NavLink>
          </li>
          <li className="  my-2 mx-1  ">
            <NavLink
              to="contact"
              className="d-flex nav-text rounded-5 justify-content-center align-items-center "
            >
              <h3 className="d-flex justify-content-end  h6 m-0">Contact</h3>
              <div className="nav-ic shadow d-flex rounded-circle justify-content-center align-items-center">
                <i className="fas fa-message"></i>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="position-absolute  d-flex justify-content-between align-items-center px-md-3 top-0 start-0  p-2 pt-3 w-100">
        <div className="logo  ">
          <h2 class="button " data-text="Awesome">
            <span class="actual-text">&nbsp;FAYYAD&nbsp;</span>
            <span aria-hidden="true" class="hover-text">
              &nbsp;FAYYAD&nbsp;
            </span>
          </h2>
        </div>
        <div className="title-phone">
          {/* <h2 className="fw-bold fa-2x">{pathName}</h2> */}
        </div>
      </div>
    </>
  );
}

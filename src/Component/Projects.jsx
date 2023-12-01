import React from "react";
import ecommercey from "../assets/projects/ecommercey.png";
import Youtubeclone from "../assets/projects/j.png";
import weather from "../assets/projects/weather.png";
import protofolio from "../assets/projects/protofolio.png";
import meals from "../assets/projects/meals.png";
import bakery from "../assets/projects/bakery.png";
import bookmarker from "../assets/projects/bookmarker.png";

export default function Projects() {
  return (
    <div className="projects py-5">
      <h1 className="position-absolute z-3  m-3 top-0 end-0 mobheadline text-center fw-bold fa-3x ">
            <span className="proj-span">MY</span>PROJECTS
          </h1>
      <div className=" my-4">
        <div className="row g-3">
          <h1 className="bigheadline text-center fw-bold fa-3x ">
            <span className="proj-span">MY</span>PROJECTS
          </h1>
          <div className="col-md-4">
            <div className="rounded-2  position-relative">
              <div className="layer w-100 h-100 d-flex flex-column justify-content-center position-absolute ">
                <h2 className="text-center fw-bold">E-Commerce</h2>
                <div className=" d-flex  justify-content-center">
                  <a
                    className="btn px-5  mx-1  codeBtn"
                    href="https://e-commercy.vercel.app/"
                    target="_blank"
                  >
                    CODE
                  </a>
                  <a
                    className="btn px-5 mx-1 demoBtn"
                    href="https://mohammedhossam1.github.io/ECommercy/"
                    target="_blank"
                  >
                    DEMO
                  </a>
                </div>
              </div>
              <img src={ecommercey} className="w-100 rounded-3" alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="rounded-2 h-100 position-relative">
              <div className="layer w-100 h-100 d-flex flex-column justify-content-center position-absolute ">
                <h2 className="text-center fw-bold">Youtubeclone</h2>
                <div className=" d-flex  justify-content-center">
                  <a
                    className="btn px-5  mx-1  codeBtn"
                    href="https://github.com/MohammedHossam1/Youtubeclone"
                    target="_blank"
                  >
                    CODE
                  </a>
                  <a
                    className="btn px-5 mx-1 demoBtn"
                    href="https://amboba.vercel.app/"
                    target="_blank"
                  >
                    DEMO
                  </a>
                </div>
              </div>
              <img
                src={Youtubeclone}
                className="w-100 rounded-3 h-100"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="rounded-2 h-100 position-relative">
              <div className="layer w-100 h-100 d-flex flex-column justify-content-center position-absolute ">
                <h2 className="text-center fw-bold">weather</h2>
                <div className=" d-flex  justify-content-center">
                  <a
                    className="btn px-5  mx-1  codeBtn"
                    href="https://github.com/MohammedHossam1/weather/"
                    target="_blank"
                  >
                    CODE
                  </a>
                  <a
                    className="btn px-5 mx-1 demoBtn"
                    href="https://mohammedhossam1.github.io/weather/"
                    target="_blank"
                  >
                    DEMO
                  </a>
                </div>
              </div>
              <img src={weather} className="w-100 rounded-3 h-100" alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="rounded-2 h-100 position-relative">
              <div className="layer w-100 h-100 d-flex flex-column justify-content-center position-absolute ">
                <h2 className="text-center fw-bold">Protofolio</h2>
                <div className=" d-flex  justify-content-center">
                  <a
                    className="btn px-5  mx-1  codeBtn"
                    href="https://github.com/MohammedHossam1/DevFolio"
                    target="_blank"
                  >
                    CODE
                  </a>
                  <a
                    className="btn px-5 mx-1 demoBtn"
                    href="https://mohammedhossam1.github.io/DevFolio/"
                    target="_blank"
                  >
                    DEMO
                  </a>
                </div>
              </div>
              <img src={protofolio} className="w-100 rounded-3 h-100" alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="rounded-2 h-100 position-relative">
              <div className="layer w-100 h-100 d-flex flex-column justify-content-center position-absolute ">
                <h2 className="text-center fw-bold">Meals</h2>
                <div className=" d-flex  justify-content-center">
                  <a
                    className="btn px-5  mx-1  codeBtn"
                    href="https://github.com/MohammedHossam1/Meals"
                    target="_blank"
                  >
                    CODE
                  </a>
                  <a
                    className="btn px-5 mx-1 demoBtn"
                    href="https://mohammedhossam1.github.io/Meals/"
                    target="_blank"
                  >
                    DEMO
                  </a>
                </div>
              </div>
              <img src={meals} className="w-100 rounded-3 h-100" alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="rounded-2 h-100 position-relative">
              <div className="layer w-100 h-100 d-flex flex-column justify-content-center position-absolute ">
                <h2 className="text-center fw-bold">Bakery</h2>
                <div className=" d-flex  justify-content-center">
                  <a
                    className="btn px-5  mx-1  codeBtn"
                    href="https://github.com/MohammedHossam1/bakery"
                    target="_blank"
                  >
                    CODE
                  </a>
                  <a
                    className="btn px-5 mx-1 demoBtn"
                    href="https://mohammedhossam1.github.io/bakery/"
                    target="_blank"
                  >
                    DEMO
                  </a>
                </div>
              </div>
              <img src={bakery} className="w-100 rounded-3 h-100" alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="rounded-2 h-100 position-relative">
              <div className="layer w-100 h-100 d-flex flex-column justify-content-center position-absolute ">
                <h2 className="text-center fw-bold">Meals</h2>
                <div className=" d-flex  justify-content-center">
                  <a
                    className="btn px-5  mx-1  codeBtn"
                    href="https://github.com/MohammedHossam1/Bookmarker"
                    target="_blank"
                  >
                    CODE
                  </a>
                  <a
                    className="btn px-5 mx-1 demoBtn"
                    href="https://mohammedhossam1.github.io/Bookmarker/"
                    target="_blank"
                  >
                    DEMO
                  </a>
                </div>
              </div>
              <img
                src={bookmarker}
                className="w-100 rounded-3 h-100"
                alt="bookmarker"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

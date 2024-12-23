import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  //my age
  const birthDate = new Date("1998-03-05");
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthDate.getFullYear();

  return (
    <section className="about  my-lg-5">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className=" mobheadline  m-3"
        viewport={{ once: true }}

      >
        ABOUT<span className="about-span">ME</span>
      </motion.h1>
      <div className="text-center mt-3">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="bigheadline  "
        >
          ABOUT<span className="about-span">ME</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="w-100 justify-content-center  d-flex align-items-center myimgcontainer"
        >
          {/* <div className="  rounded-circle  border border-3"
          style={{width:"150px",height:"150px"}}
          >
            <img
              src={mo}
              alt="Profile"
              className="w-100 rounded-circle bg-red-900"
              id="myImage"
            />
          </div> */}
        </motion.div>
        <div className="row position-relative mt-2">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="col-lg-6   mb-5 mb-lg-0"
          >
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
                      Email:{" "}
                      <span className="text-break">
                        mohammedhossam199998@gmail.com
                      </span>
                    </h5>
                  </div>
                </div>
              </div>

              <a
                download
                className="download-btn  ms-3 w-50 d-flex justify-content-between align-items-center  rounded-5 mt-4"
                href="https://drive.google.com/uc?export=download&id=1OhzQ9pwoMy92ZZjb8tr9f_Xl-td16z0L"
              >
                Download CV
                <div className="download-icon rounded-5 d-flex justify-content-center align-items-center ms-2">
                  <i className="fas fa-arrow-right fa-2x"></i>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="col-lg-6   education text-start ps-3"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}

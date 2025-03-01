import { Link } from "react-router-dom";
import mo from "../../assets/bg.jpg";
import mainImage from "../../assets/main-image.jpg";
import mainImageHover from "../../assets/main-image-hover.jpg";
import "./Header.css";
import { motion } from "framer-motion";
export default function Header() {
  return (
    <header className="home  w-100  h-[90vh]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="h-100 container"
      >
        <div className="row d-flex align-items-center h-100">
          <div className="col-md-4 col-12 h-100 position-relative d-flex justify-content-center mb-3 mb-md-0">
            <div className="opacity-50 d-flex align-items-center">
              <div className="myimgdiv rounded-circle"></div>
            </div>
            <div className="top-50 cursor-pointer translate-middle-y d-flex position-absolute align-items-center">
              <div className="myimg  rounded-circle group">
                <motion.img
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  src={mainImage}
                  alt=""
                  className="object-cover group-hover:hidden object-bottom"
                  id="myImage"
                />
                <motion.img
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  src={mainImageHover}
                  alt=""
                  className="object-cover hidden group-hover:block object-bottom"
                  id="myImage"
                />
              </div>
            </div>
          </div>
          <div className="col-md-7 col-12 ms-auto p-md-5 ps-3 d-flex justify-content-center flex-column align-items-start text-start text-md-start">
            <h2 className="fw-bold home-h2">
              I'M Mohammed Hossam.{" "}
              <span className="text-white">Frontend developer</span>
            </h2>
            <p className="lh-lg">
              I'm an Egyptian based Frontend developer focused on crafting clean
              & user-friendly experiences, I am passionate about building
              excellent software that improves the lives of those around me.
            </p>
            <Link
              className="bttn ps-3 d-flex justify-content-between rounded-5 align-items-center p-0"
              to="/about"
            >
              MORE ABOUT ME
              <div className="home-ic rounded-5 d-flex justify-content-center align-items-center ms-2">
                <i className="fas fa-2x fa-arrow-right"></i>
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </header>
  );
}

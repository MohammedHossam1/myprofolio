    import { motion } from "framer-motion";
import { useState } from "react";
import mainImageHover from "../../assets/main-image-hover.jpg";
import mainImage from "../../assets/main-image.jpg";
import "./Header.css";
export default function Header() {
  const [showMore, setShowMore] = useState(false);
  return (
    <header className="home  w-100  py-10 xl:h-[90vh]">
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
                  alt="mohammed hossam profile"
                  className="object-cover group-hover:hidden object-bottom"
                  id="myImage"
                />
                <motion.img
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  src={mainImageHover}
                  alt="mohammed hossam profile"
                  className="object-cover hidden group-hover:block object-bottom"
                  id="myImage"
                />
              </div>
            </div>
          </div>
          <div className="col-md-7 col-12 ms-auto p-md-5 ps-3 d-flex justify-content-center flex-column align-items-start text-start text-md-start">
            <h1 className="fw-bold home-h2">
              {Array.from("I'M Mohammed Hossam. ").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    type: "spring",
                    damping: 10
                  }}
                >
                  {char}
                </motion.span>
              ))}
              <span className="text-white">
                {Array.from("Frontend developer").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 1 + (index * 0.05),
                      type: "spring",
                      damping: 10
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>
            <motion.p 
              className="lh-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              Iʼm Mohammed Hossam, a Front-End Developer with a strong focus on building user-centered, high
              performance web applications. Over the past few years, Iʼve contributed to a variety of projects — from
              responsive dashboards to e-commerce platforms — collaborating closely with designers, back-end
              developers, and product teams to turn ideas into seamless digital experiences.
              <motion.span
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: showMore ? 1 : 0, height: showMore ? "auto" : 0 }}
                className="block overflow-hidden"
              >
                My work goes beyond translating designs into code. I actively contribute to enhancing usability, optimizing 
                performance, and ensuring accessibility. I enjoy solving real-world problems with clean, maintainable code 
                and am always striving to grow — both technically and creatively.
                My goal is to be more than just a developer. I aim to be a team player who bridges the gap between design 
                and functionality, helping create products that are not only efficient but also delightful to use.
              </motion.span>
              <button 
                onClick={() => setShowMore(!showMore)}
                className="text-main hover:text-main-dark font-medium mt-2"
              >
                {showMore ? 'Read Less' : 'Read More'}
              </button>
            </motion.p>
            <a
              href="#about"
              className="bttn ps-3 d-flex justify-content-between rounded-5 align-items-center p-0"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              MORE ABOUT ME
              <div className="home-ic rounded-5 d-flex justify-content-center align-items-center ms-2">
                <i className="fas fa-2x fa-arrow-right"></i>
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </header>
  );
}

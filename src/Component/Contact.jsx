import React, { useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import WOW from "wowjs";
export default function Contact() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9iwsj35",
        "template_smnyzks",
        form.current,
        "1mJgzsdbgrEobslUK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="contact py-5">
        {/* title in mob*/}
        <h1 className=" position-absolute  fw-bold mobheadline end-0 top-0 m-3">
          GETIN<span className=" about-span">TOUCH</span>
        </h1>
        {/* title in bigscreen*/}
        <h1 className="text-center bigheadline wow slideInDown  my-4 fw-bold fa-3x">
          GETIN<span>TOUCH</span>{" "}
        </h1>
        {/* Left side contact*/}
        <div className="row ">
          <div className="col-md-4 wow slideInLeft ">
            <div className=" ms-md-5 mt-5 mb-3">
              <h2 className="fw-bold fa-md-2x">DON'T BE SHY !</h2>
              <p className="lead  ">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
              <div className="d-flex align-items-center">
                <i className="fas fa-message fa-lg "></i>
                <div className="mx-md-3  mx-2 ">
                  <h5 className="my-1 text-secondary  my-1 fa-1x">MAIL ME:</h5>
                  <h6 className="">mohammedhossam199998@gmail.com</h6>
                </div>
              </div>
              <div className="d-flex  align-items-center">
                <i className="fas fa-phone fa-lg"></i>
                <div className="m-md-3 mx-2">
                  <h5 className=" my-1 fa-1x text-secondary">CALL ME:</h5>
                  <h6 className="">+0201125997082</h6>
                </div>
              </div>
              <div className="social  mt-1 d-flex  align-items-center ">
                <a
                  href="https://www.facebook.com/muhamedhoss"
                  target="_blank"
                  className="rounded-circle d-flex justify-content-center align-items-center mx-2"
                >
                  <i className="fa-brands fa-larger text-white fa-facebook-f"></i>
                </a>
                <a
                  href="https://github.com/MohammedHossam1"
                  target="_blank"
                  className="rounded-circle d-flex justify-content-center align-items-center mx-2"
                >
                  <i className="fa-brands fa-larger text-white fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammed-hossam-459b68291/"
                  target="_blank"
                  className="rounded-circle d-flex justify-content-center align-items-center mx-2"
                >
                  <i className="fa-brands fa-larger text-white fa-linkedin-in"></i>
                </a>
                <a
                  href=""
                  target="_blank"
                  className="rounded-circle d-flex justify-content-center align-items-center mx-2"
                >
                  <i className="fa-brands fa-larger text-white fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
          {/* Right side */}
          {/* <div className=""></div> */}
          <div className="col-md-7 wow slideInRight mt-md-5 ">
            <form ref={form} onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-4">
                  <input
                    type="text"
                    className=" py-2 my-md-2 form-control rounded-5"
                    placeholder="name"
                    id="name"
                    name="name"
                  />
                </div>

                <div className="col-md-4">
                  <input
                    type="text"
                    className=" py-2 my-md-2 form-control rounded-5"
                    placeholder="email"
                    id="email"
                    name="email"
                  />
                </div>

                <div className="col-md-4">
                  <input
                    type="text"
                    className=" py-2 my-md-2 form-control rounded-5"
                    placeholder="subject"
                    id="subject"
                    name="subject"
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    className="form-control  rounded-5  p-md-3 my-2 my-md-4"
                    placeholder="Your message"
                    name="message"
                    cols="20"
                    rows="6"
                  ></textarea>
                </div>

                <button
                  class="bttn mx-2 w-auto ps-3 my-4  d-flex justify-content-between rounded-5 align-items-center p-0"
                  type="submit"
                >
                  SEND MESSAGE
                  <div className="home-ic   rounded-5 d-flex justify-content-center align-items-center ms-2 ">
                    <i className="fas text-white fa-2x  fa-arrow-right "></i>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

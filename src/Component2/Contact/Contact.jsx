import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import WOW from "wowjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

export default function Contact() {
  const form = useRef();

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  function sendEmail(e) {
    e.preventDefault();
    const formElements = form.current.elements;

    // Check if all fields are filled
    if (
      formElements.name.value &&
      formElements.email.value &&
      formElements.subject.value &&
      formElements.message.value
    ) {
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
            toast.success("Message Sent Successfully!", {
              position: "top-center",
              autoClose: 3000,
            });
            form.current.reset();
          },
          (error) => {
            console.log(error.text);
            toast.error("Failed to send message. Please try again.", {
              position: "top-center",
              autoClose: 3000,
            });
          }
        );
    } else {
      toast.error("Please fill in all fields correctly.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  }

  return (
    <div className="contact my-lg-5 py-5">
      <ToastContainer />
      {/* Title for mobile */}
      <h1 className="position-absolute fw-bold mobheadline end-0 top-0 m-3">
        GETIN<span className="about-span">TOUCH</span>
      </h1>
      {/* Title for large screens */}
      <h1 className="text-center bigheadline wow slideInDown my-4 fw-bold fa-3x">
        GETIN<span>TOUCH</span>
      </h1>
      {/* Contact Section */}
      <div className="container">
        <div className="row">
          {/* Left side contact info */}
          <div className="col-lg-4 col-md-6 wow slideInLeft">
            <div className="ms-lg-5 mt-5 mb-3">
              <h2 className="fw-bold fa-md-2x">DON'T BE SHY !</h2>
              <p className="lead">Feel free to get in touch with me.</p>
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-envelope fa-lg"></i>
                <div className="ms-3">
                  <h5 className="text-secondary mb-1">MAIL ME:</h5>
                  <h6 className="ContactEmail">mohammedhossam199998@gmail.com</h6>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-phone fa-lg"></i>
                <div className="ms-3">
                  <h5 className="text-secondary mb-1">CALL ME:</h5>
                  <h6>+201125997082</h6>
                </div>
              </div>
              <div className="social mt-1 d-flex align-items-center">
                <a
                  href="https://www.facebook.com/muhamedhoss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-circle d-flex justify-content-center align-items-center mx-2"
                >
                  <i className="fab fa-facebook-f text-white"></i>
                </a>
                <a
                  href="https://github.com/MohammedHossam1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-circle d-flex justify-content-center align-items-center mx-2"
                >
                  <i className="fab fa-github text-white"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammed-hossam-459b68291/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-circle d-flex justify-content-center align-items-center mx-2"
                >
                  <i className="fab fa-linkedin-in text-white"></i>
                </a>
                <a
                  href="https://wa.me/+201125997082"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-circle d-flex justify-content-center align-items-center mx-2"
                >
                  <i className="fab fa-whatsapp text-white"></i>
                </a>
              </div>
            </div>
          </div>
          {/* Right side form */}
          <div className="col-lg-8 col-md-6 wow slideInRight mt-md-5">
            <form ref={form} onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <input
                    type="text"
                    className="py-2 form-control rounded-5"
                    placeholder="Name"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <input
                    type="email"
                    className="py-2 form-control rounded-5"
                    placeholder="Email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <input
                    type="text"
                    className="py-2 form-control rounded-5"
                    placeholder="Subject"
                    id="subject"
                    name="subject"
                    required
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <textarea
                    className="form-control rounded-5 p-3"
                    placeholder="Your message"
                    name="message"
                    cols="20"
                    rows="6"
                    required
                  ></textarea>
                </div>
                <div className="col-md-12">
                  <button
                    className="btn btn-primary w-100 rounded-5 py-2"
                    type="submit"
                  >
                    SEND MESSAGE
                    <i className="fas fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

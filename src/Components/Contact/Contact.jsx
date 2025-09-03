import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

export default function Contact() {
  const form = useRef();

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
          "service_qkx513h",
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
    <motion.div
      className="contact my-lg-5  relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <ToastContainer />
      {/* Title for mobile */}
      <motion.h1
        className=" fw-bold mobheadline 1 end-0 top-0 m-3"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        GETIN<span className="about-span">TOUCH</span>
        <div className="text-sm">انا مبقتش فاهم حاجه ههه
          طب الحل اي دلوقتي 
          
           </div>
      </motion.h1>
      {/* Title for large screens */}
      <motion.h1
        className="text-center bigheadline my-3 fw-bold fa-3x"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        GETIN<span>TOUCH</span>
        <div className="text-sm">انا مبقتش فاهم حاجه ههه
          طب الحل اي دلوقتي 
          
           </div>

      </motion.h1>
      {/* Contact Section */}
      <div className="container">
        <div className="row">
          {/* Left side contact info */}
          <motion.div
            className="col-lg-4 col-md-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="ms-lg-5 lg:mt-5 mb-3">
              <h2 className="fw-bold fa-md-2x">DON'T BE SHY !</h2>
              <p className="lead">Feel free to get in touch with me.</p>
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-envelope fa-lg"></i>
                <div className="ms-3">
                  <h5 className="text-secondary max-lg:text-base mb-1">
                    MAIL ME:
                  </h5>
                  <h6 className="ContactEmail line-clamp-1">
                    mohammedhossam.dev@gmail.com
                  </h6>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-phone fa-lg"></i>
                <div className="ms-3">
                  <h5 className="text-secondary mb-1  max-lg:text-base">
                    CALL ME:
                  </h5>
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
                  href="https://www.linkedin.com/in/mohammedfayyad/"
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
          </motion.div>
          {/* Right side form */}
          <motion.div
            className="col-lg-8 col-md-6 mt-md-5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

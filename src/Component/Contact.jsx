import React from "react";

export default function Contact() {
  return (
    <div className="contact py-5">
       <h1 className="text-center my-4 fw-bold fa-4x">
        GETIN<span>TOUCH</span>{" "}
      </h1>
      <div className="row">
        <div className="col-md-4">
          <div className=" ms-5 mt-5">
            <h2 className="fw-bold">DON'T BE SHY !</h2>
            <p className="lead fa-1x ">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
            <div className="d-flex align-items-center">
              <i className="fas fa-message fa-2x "></i>
              <div className="mx-3">
                <h5 className="my-3 text-secondary my-1 fa-lg">MAIL ME:</h5>
                <h6 className="">mohammedhossam199998@mail.com</h6>
              </div>
            </div>
            <div className="d-flex  align-items-center">
              <i className="fas fa-phone fa-2x"></i>
              <div className=" m-3">
                <h5 className=" my-3 fa-lg text-secondary">CALL ME:</h5>
                <h6 className="">+0201125997082</h6>
              </div>
            </div>
            <div className="social d-flex  align-items-center my-3">
              <a
                href="https://www.facebook.com/muhamedhoss"
                target="_blank"
                className="rounded-circle d-flex justify-content-center align-items-center mx-2"
              >
                <i className="fa-brands fa-larger text-white fa-facebook-f"></i>
              </a>
              <a
                href=""
                target="_blank"
                className="rounded-circle d-flex justify-content-center align-items-center mx-2"
              >
                <i className="fa-brands fa-larger text-white fa-github"></i>
              </a>
              <a
                href=""
                target="_blank"
                className="rounded-circle d-flex justify-content-center align-items-center mx-2"
              >
                <i className="fa-brands fa-larger text-white fa-instagram"></i>
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
        <div className="col-md-7 mt-5">
          <div className="d-flex align-items-center justify-content-center">
            <input
              type="text"
              className="mx-2 py-2 form-control rounded-5"
              placeholder="NAME"
              name=""
              id=""
            />
            <input
              type="text"
              className="mx-2 py-2 form-control rounded-5"
              placeholder="EMAIL"
              name=""
              id=""
            />
            <input
              type="text"
              className="mx-2 p-2 form-control rounded-5"
              placeholder="SUBJECT"
              name=""
              id=""
            
            />
          </div>
          <textarea className="form-control mx-2 rounded-5 p-3 my-4" placeholder="Your message" cols="20" rows="6"></textarea>
          <a
            
            class="bttn mx-2 w-auto ps-3 my-4  d-flex justify-content-between rounded-5 align-items-center p-0"
            href="Resume.pdf"
          >
            Send
            <div className="home-ic   rounded-5 d-flex justify-content-center align-items-center ms-2 ">
              <i className="fas text-white fa-2x  fa-arrow-right "></i>
            </div>
          </a>
        </div>
      </div> 
    </div>
  );
}

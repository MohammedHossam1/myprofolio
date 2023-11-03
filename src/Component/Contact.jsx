import React, { useEffect } from "react";
import WOW from "wowjs";
import 'animate.css'

export default function Contact() {
  useEffect(() => {
    const wow = new WOW.WOW()
    wow.init();
  }, []);
  return (
    <div className="contact py-5">

       <h1 className="text-center wow fadeIn my-4 fw-bold fa-3x" data-wow-duration="2s" data-wow-delay="1s">
        GETIN<span>TOUCH</span>{" "}
      </h1>
      <div className="row">
        <div className="col-md-4">
          <div className=" ms-md-5 mt-md-5">
            <h2 className="fw-bold fa-md-2x">DON'T BE SHY !</h2>
            <p className="lead fa-1x ">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
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
            <div className="social wow bounceInUp mt-1 d-flex  align-items-center ">
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
        <div className="col-md-7 mt-2 mt-md-5 ">
          <div className="row">
            <div className="col-md-4">
            <input
              type="text"
              className=" py-2 my-2 form-control rounded-5"
              placeholder="NAME"
            />
          </div>

            <div className="col-md-4">

            <input
              type="text"
              className=" py-2 my-2 form-control rounded-5"
              placeholder="EMAIL"

            />
          </div>

            <div className="col-md-4">

            <input
              type="text"
              className=" py-2 my-2 form-control rounded-5"
              placeholder="SUBJECT"
      
              
            />
          </div>

<div className="col-md-12">
<textarea className="form-control  rounded-5  p-md-3 my-2 my-md-4" placeholder="Your message" cols="20" rows="6"></textarea>

</div>
          

          <a
            
            class="bttn mx-2 w-auto ps-3 my-4  d-flex justify-content-between rounded-5 align-items-center p-0"
            href="Resume.pdf"
          >
            SEND MESSAGE
            <div className="home-ic   rounded-5 d-flex justify-content-center align-items-center ms-2 ">
              <i className="fas text-white fa-2x  fa-arrow-right "></i>
            </div>
          </a>
        </div>
        </div>
      </div> 
    </div>
  );
}

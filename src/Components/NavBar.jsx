import { Link } from "react-router-dom";
import GoogleAuthPage from "./auth/google-auth";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NavBar() {
  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className="flex  w-full  p-3 items-center justify-between ">
      

      <Link to="#header" onClick={(e) => handleScroll(e, "header")}>
        <div className="flex justify-between items-center  ">
          <div className="logo">
            <h2 className="button" data-text="Awesome">
              <span className="actual-text">&nbsp;FAYYAD&nbsp;</span>
              <span aria-hidden="true" className="hover-text">
                &nbsp;FAYYAD&nbsp;
              </span>
            </h2>
          </div>
        </div>
      </Link>
      <div className=" ">
        {/* <GoogleAuthPage /> */}
      <ToastContainer />

      </div>
    </div>
  );
}
// test3

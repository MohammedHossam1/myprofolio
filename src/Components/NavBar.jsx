import { Link } from "react-router-dom";

export default function NavBar({ activeSection }) {
  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getIconClass = (section) => (
    activeSection === section ? "active-icon" : ""
  );

  return (
    <>
      <div className="navBar">
        <ul className="me-4 mb-2 h-100 d-flex flex-md-column align-items-end justify-content-center">
          <li className="my-2 mx-1">
            <Link
              to="#header"
              onClick={(e) => handleScroll(e, "header")}
              className={`d-flex nav-mid-shadow nav-text rounded-5 justify-content-center align-items-center ${getIconClass("header")}`}
            >
              <h3 className="d-flex justify-content-end h6 m-0">Home</h3>
              <div className={`nav-ic shadow d-flex rounded-circle justify-content-center align-items-center ${getIconClass("header")}`}>
                <i className="fas fa-home"></i>
              </div>
            </Link>
          </li>
          <li className="my-2 mx-1">
            <Link
              to="#about"
              onClick={(e) => handleScroll(e, "about")}
              className={`d-flex nav-text rounded-5 nav-mid-shadow justify-content-center align-items-center ${getIconClass("about")}`}
            >
              <h3 className="d-flex justify-content-end h6 m-0">About</h3>
              <div className={`nav-ic shadow d-flex rounded-circle justify-content-center align-items-center ${getIconClass("about")}`}>
                <i className="fa-solid fa-user"></i>
              </div>
            </Link>
          </li>
          <li className="my-2 mx-1">
            <Link
              to="#projects"
              onClick={(e) => handleScroll(e, "projects")}
              className={`d-flex nav-text rounded-5 nav-mid-shadow justify-content-center align-items-center ${getIconClass("projects")}`}
            >
              <h3 className="d-flex justify-content-end h6 m-0">Projects</h3>
              <div className={`nav-ic shadow d-flex rounded-circle justify-content-center align-items-center ${getIconClass("projects")}`}>
                <i className="fa-solid fa-briefcase"></i>
              </div>
            </Link>
          </li>
          <li className="my-2 mx-1">
            <Link
              to="#skills"
              onClick={(e) => handleScroll(e, "skills")}
              className={`d-flex nav-text rounded-5 nav-mid-shadow justify-content-center align-items-center ${getIconClass("skills")}`}
            >
              <h3 className="d-flex justify-content-end h6 m-0">Skills</h3>
              <div className={`nav-ic shadow d-flex rounded-circle justify-content-center align-items-center ${getIconClass("skills")}`}>
                <i className="fa-solid fa-layer-group"></i>
              </div>
            </Link>
          </li>
          <li className="my-2 mx-1">
            <Link
              to="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className={`d-flex nav-text rounded-5 nav-mid-shadow justify-content-center align-items-center ${getIconClass("contact")}`}
            >
              <h3 className="d-flex justify-content-end h6 m-0">Contact</h3>
              <div className={`nav-ic shadow d-flex rounded-circle justify-content-center align-items-center ${getIconClass("contact")}`}>
                <i className="fas fa-message"></i>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      <Link to="#header" onClick={(e) => handleScroll(e, "header")}>
        <div className="position-absolute d-flex justify-content-between align-items-center px-md-3 top-0 start-0 p-2 pt-3 w-100">
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
    </>
  );
}
// test3
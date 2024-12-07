import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import loading from "../src/assets/loadd.gif";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = 2400;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
          <img loading="lazy" className="inlineImage" src={loading} />
        </div>
      ) : (
        <BrowserRouter>
          <div className="container ">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/projects" exact element={<Projects />} />
              <Route path="/contact" exact element={<Contact />} />
              <Route path="/skills" exact element={<Skills />} />
            </Routes>
          </div>
          {/* <Footer/> */}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

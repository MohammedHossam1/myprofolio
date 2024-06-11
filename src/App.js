import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Component2/Home';
import About from './Component2/About/About';
import Projects from './Component2/Projects/Projects';
import Contact from './Component2/Contact/Contact';
import Skills from './Component2/Skills/Skills';
import loading from '../src/assets/loadd.gif'
import { useEffect, useState } from 'react';

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
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <img loading="lazy" className="inlineImage" src={loading} />
    
    </div>
      
      
    ) : (
      
    <BrowserRouter>
    <div className='container ' >
    <Routes>
      <Route path='/' exact element={<Home />}/>
      <Route path='/about' exact element={<About />}/>
      <Route path='/projects' exact element={<Projects />}/>
      <Route path='/contact' exact element={<Contact />}/>
      <Route path='/skills' exact element={<Skills />}/>
    </Routes>
    </div>
    {/* <Footer/> */}
    </BrowserRouter>
    )}
</div>





  );
}

export default App;

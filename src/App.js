import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Component/Home';
import NavBar from './Component/NavBar';
import About from './Component/About';
import Projects from './Component/Projects';
import Contact from './Component/Contact';
import Skills from './Component/Skills';
import { useEffect, useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const delay = 3000; 
  const timer = setTimeout(() => {
      setIsLoading(false);
  }, delay);
  return () => clearTimeout(timer);
}, []);

  return (
    <div>
    {isLoading ? (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <img loading="lazy" class="inlineImage" src="https://s.raseef22.com/storage/attachments/1083/979732.gif/r/800/image.jpg" alt/>
    
    </div>
      
      
    ) : (
      
    <BrowserRouter>
    <NavBar/>
    <div className='container ' >
    <Routes>
      <Route path='/' exact element={<Home />}/>
      <Route path='/about' exact element={<About />}/>
      <Route path='/projects' exact element={<Projects />}/>
      <Route path='/contact' exact element={<Contact />}/>
      <Route path='/skills' exact element={<Skills />}/>
    </Routes>
    </div>
    </BrowserRouter>
       
    )}
</div>





  );
}

export default App;

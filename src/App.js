import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Component/Home';
import NavBar from './Component/NavBar';
import About from './Component/About';
import Projects from './Component/Projects';
import Contact from './Component/Contact';
import Skills from './Component/Skills';

function App() {
  
   
  return (
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
  );
}

export default App;

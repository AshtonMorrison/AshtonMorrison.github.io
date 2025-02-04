import LandingPage from "./Pages/LandingPage";
import AboutMe from "./Pages/AboutMe";
import Projects from "./Pages/Projects";
import ContactMe from "./Pages/ContactMe";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";

import "./styles.css";


function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<ContactMe />} />
        </Routes>
      </div>
    </>
    )
}

export default App;

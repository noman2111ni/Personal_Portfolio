import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Skill from "./components/pages/Skill";
import Project from "./components/pages/Project";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      ></div>
      <BrowserRouter>
        <div className="w-screen mx-auto container relative z-10">
          <Header />
          <div className="w-full mx-auto container">
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/skills" element={<Skill />}></Route>
              <Route path="/projects" element={<Project />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
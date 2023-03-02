import React, { useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Mission from "./pages/Mission";
import Platform from "./pages/Platform";
import HomePage from "./pages/HomePage";

function App() {
  const platformRef = useRef(null); //represents main section
  const aboutRef = useRef(null); //represents about section
  const contactRef = useRef(null); //represents how to use section
  const missionRef = useRef(null); //represents how to use section

  return (
    <div className="test">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/platform" element={<Platform />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/mission" element={<Mission />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

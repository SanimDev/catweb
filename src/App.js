// import logo from './logo.svg';
import React from 'react';

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cats from "./pages/cats";
import Home from "./pages/home";
import { UploadPage } from "./pages/upload";
import About from "./pages/about";

function App() {
  return (

      <div>
        <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/cat" element={<Cats />}></Route>
        <Route exact path="/upload" element={<UploadPage />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
      </div>
 
  );
}

export default App;

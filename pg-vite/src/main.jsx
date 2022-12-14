import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./Header";
import Home from "./Home";
import Music from "./music";
import Web from "./web";
import "./css/Global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <BrowserRouter>
      <Header />
      <div className='page'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/web" element={<Web />} />
      </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
)

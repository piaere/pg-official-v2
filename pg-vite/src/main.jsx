import React from "react";
import ReactDOM from "react-dom/client";
// import Header from "./Header";
import Home from "./Home";
import Music from "./music";
// import Footer from "./Footer";
import Web from "./web";
import "./css/Global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

console.log("HELLO THERE ^^");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Header /> */}
      <div className="page">
        <Routes>
          <Route exact path="/music" element={<Music />} />
          <Route path="/" element={<Music />} />
          <Route path="/web" element={<Music />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./componenets/Navbar";
import Footer from "./componenets/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Causes from "./pages/Causes";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";

const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="logo">☰</div>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
        <div className={`nav-links ${isOpen ? "active" : ""}  `}>
          <a href="home">Home</a>
          <a href="about">About US</a>
          <a href="services">Services</a>
          <a href="contact">Contact</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

//import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <div className="logo">MyBrand</div>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to MyBrand</h1>
          <p>
            We provide the best solutions for your needs. Let’s create something
            amazing together.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>
    </div>
  );
}

export default App;


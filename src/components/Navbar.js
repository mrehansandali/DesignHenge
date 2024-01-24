import React from "react";
import "./styles.css";
import logo from "../assets/Vector Smart Object.png";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="banner">FREE SHIPPING when you order $75 or more !</div>
        <div className="MRcontainer container">
          <div className="MRlogo">
            <img src={logo} alt="" />
          </div>
          <div className="MRrightside">
            <div className="MRsearchbar">
              <input
                type="text"
                className="search"
                id="search-inp"
                placeholder="Search Products."
              />
              <button className="search-btn" id="search-inp-btn">
                <i className="fa-solid fa-magnifying-glass me-2"></i>Search
              </button>
            </div>
            <div className="icons">
              <div className="cart">
                <i className="fa-solid fa-lock"></i>
                <div className="cartnotification">02</div>
              </div>
              <div className="account">
                <i className="fa-solid fa-user"></i>
              </div>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a href="/" className="nav-link active" aria-current="page">
                    Kratom Powders
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link active">Kratom Capsules</a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link active" aria-current="page">
                    Liquid Kratom
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link active">Kratom Extracts</a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link active" aria-current="page">
                    Brands
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav me-0 mb-2 mb-lg-0">
                <li className="nav-item">
                  <a href="/" className="nav-link active" aria-current="page">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link active">Contact Us</a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link active" aria-current="page">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

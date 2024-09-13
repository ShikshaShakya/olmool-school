import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false); // State for managing navbar toggle

  // Function to toggle the navbar and overlay
  const toggleNavbar = () => {
    setIsNavActive(!isNavActive);
  };

  // Function to close the navbar when a link is clicked
  const closeNavbar = () => {
    setIsNavActive(false);
  };

  return (
    <>
      <header className={`header ${isNavActive ? "active" : ""}`} data-header>
        <div className="container">
          <img
            src="./olympic-games-svgrepo-com.svg"
            alt="Olympic Logo"
            className="logoimg"
          />
          <Link to="/" className="logo">
            Olmool<span className="span">.</span>
          </Link>

          <nav className={`navbar ${isNavActive ? "active" : ""}`} data-navbar>
            <button
              className="nav-toggle-btn"
              aria-label="Close menu"
              data-nav-toggler
              onClick={toggleNavbar}
            >
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>

            <ul className="navbar-list">
              <li className="navbar-item">
                <Link
                  to="/"
                  className="navbar-link"
                  data-nav-link
                  onClick={closeNavbar}
                >
                  Home
                </Link>
              </li>

              <li className="navbar-item">
                <a
                  href="/moreabout"
                  className="navbar-link"
                  data-nav-link
                  onClick={closeNavbar}
                >
                  About Us
                </a>
              </li>

              <li className="navbar-item">
                <Link
                  to="/team"
                  className="navbar-link"
                  data-nav-link
                  onClick={closeNavbar}
                >
                  Our Team
                </Link>
              </li>

              <li className="navbar-item">
                <Link
                  to="/events"
                  className="navbar-link"
                  data-nav-link
                  onClick={closeNavbar}
                >
                  Events
                </Link>
              </li>

              <li className="navbar-item">
                <Link
                  to="/calendar"
                  className="navbar-link"
                  data-nav-link
                  onClick={closeNavbar}
                >
                  Calendar
                </Link>
              </li>
            </ul>
          </nav>

          <Link to="/registration" className="btn btn-primary">
            Sign Up
          </Link>

          <button
            className="nav-toggle-btn"
            aria-label="Open menu"
            data-nav-toggler
            onClick={toggleNavbar}
          >
            <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
          </button>

          <div
            className={`overlay ${isNavActive ? "active" : ""}`}
            data-nav-toggler
            data-overlay
            onClick={closeNavbar}
          ></div>
        </div>
      </header>
    </>
  );
};

export default Header;

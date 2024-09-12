import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header" data-header>
        <div className="container">
          <img
            src="./olympic-games-svgrepo-com.svg"
            alt=""
            className="logoimg"
          />
          <a href="#" className="logo">
            {" "}
            Olmool<span className="span">.</span>{" "}
          </a>

          <nav className="navbar" data-navbar>
            <button
              className="nav-toggle-btn"
              aria-label="close menu"
              data-nav-toggler
            >
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>

            <ul className="navbar-list">
              <li className="navbar-item">
                <Link to="/" className="navbar-link" data-nav-link>
                  Home
                </Link>
              </li>

              <li className="navbar-item">
                <a href="/moreabout" className="navbar-link" data-nav-link>
                  About Us
                </a>
              </li>

              <li className="navbar-item">
                <Link to="/team" className="navbar-link" data-nav-link>
                  Our Team
                </Link>
              </li>

              <li className="navbar-item">
                <Link to="/events" className="navbar-link" data-nav-link>
                  Events
                </Link>
              </li>

              <li className="navbar-item">
                <Link to="/calendar" className="navbar-link" data-nav-link>
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
            aria-label="open manu"
            data-nav-toggler
          >
            <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
          </button>

          <div className="overlay" data-nav-toggler data-overlay></div>
        </div>
      </header>
    </>
  );
};

export default Header;

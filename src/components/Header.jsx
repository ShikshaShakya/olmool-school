import React from "react";

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
                <a href="#home" className="navbar-link" data-nav-link>
                  Home
                </a>
              </li>

              <li className="navbar-item">
                <a href="#about" className="navbar-link" data-nav-link>
                  About Us
                </a>
              </li>

              <li className="navbar-item">
                <a href="#course" className="navbar-link" data-nav-link>
                  Our Team
                </a>
              </li>

              <li className="navbar-item">
                <a href="#blog" className="navbar-link" data-nav-link>
                  Events
                </a>
              </li>

              <li className="navbar-item">
                <a href="#" className="navbar-link" data-nav-link>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          <a href="#" className="btn btn-primary">
            Sign Up
          </a>

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

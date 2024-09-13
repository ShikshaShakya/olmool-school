import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-top section">
        <div class="container">
          <div class="footer-list">
            <p class="footer-list-title">Subscribe Us</p>

            <p class="footer-list-text">
              Drop us a message. We’d love to hear from you!
            </p>

            <br></br>

            <a href="mailto:shikshashakya220@gmail.com">
              <button type="submit" class="btn btn-secondary">
                Let's get in touch <FaLocationArrow />
              </button>
            </a>
          </div>

          <ul class="footer-list">
            <li>
              <p class="footer-list-title">About Company</p>
            </li>

            <li>
              <Link to="/moreabout" class="footer-link">
                About us
              </Link>
            </li>

            <li>
              <Link to="moreabout#values" class="footer-link">
                Our Building Blocks
              </Link>
            </li>

            <li>
              <Link to="/values" class="footer-link">
                Our 3-Way Approach
              </Link>
            </li>

            <li>
              <Link to="/team" class="footer-link">
                Executive Board
              </Link>
            </li>

            <li>
              <Link to="team#mentors" class="footer-link">
                Our Mentors
              </Link>
            </li>
          </ul>

          <ul class="footer-list">
            <li>
              <p class="footer-list-title">Events & Calender</p>
            </li>

            <li>
              <Link to="/events" class="footer-link">
                Events
              </Link>
            </li>

            <li>
              <Link to="/calendar" class="footer-link">
                Sports Calender
              </Link>
            </li>

            {/* <li>
              <a href="#" class="footer-link">
                Terms & Conditions
              </a>
            </li>

            <li>
              <a href="#" class="footer-link">
                Customer Support
              </a>
            </li>

            <li>
              <a href="#" class="footer-link">
                Course FAQ’s
              </a>
            </li>

            <li>
              <a href="#" class="footer-link">
                Online Classes
              </a>
            </li> */}
          </ul>

          <ul class="footer-list">
            <li>
              <p class="footer-list-title">Opening Hours</p>
            </li>

            <li>
              <a href="#" class="footer-link">
                Mon-Fri: 9 AM – 6 PM
              </a>
            </li>

            <li>
              <a href="#" class="footer-link">
                Saturday: 9 AM – 4 PM
              </a>
            </li>

            <li>
              <a href="#" class="footer-link">
                Sunday: Closed
              </a>
            </li>

            <li>
              <p class="footer-list-title address-title">Location</p>
            </li>

            <li>
              <address class="address">
                address (street), <br />
                New Delhi, Delhi 10014
              </address>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <p class="copyright">
            &copy; 2024 &nbsp;
            <Link to="/" class="copyright-link">
              Olmool
            </Link>
          </p>

          <ul class="footer-bottom-list">
            <li class="footer-bottom-item">
              <a href="#" class="footer-bottom-link">
                Terms of Service
              </a>
            </li>

            <li class="footer-bottom-item">
              <a href="#" class="footer-bottom-link">
                Privacy Policy
              </a>
            </li>

            <li class="footer-bottom-item">
              <a href="#" class="footer-bottom-link">
                Sitemap
              </a>
            </li>

            <li class="footer-bottom-item">
              <a href="#" class="footer-bottom-link">
                Security
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

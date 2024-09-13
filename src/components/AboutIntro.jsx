import React from "react";
import { Link } from "react-router-dom";
import about1 from "../assets/about1.jpg";

const AboutIntro = () => {
  return (
    <section class="section about" aria-label="about" id="about">
      <div class="container">
        <div class="about-banner img-holder">
          <img
            src={about1}
            width="470"
            height="580"
            loading="lazy"
            alt="about banner"
            class="img-cover"
          />

          <Link to="/moreabout" class="btn btn-secondary">
            Learn More About Us
          </Link>
        </div>

        <div class="about-content">
          <p class="section-subtitle">10+ Mentors on Executive Board</p>

          <h2 class="h2 section-title">
            Esteemed guests, educators, students, and sports enthusiasts
          </h2>

          <p class="section-text">
            It is with great enthusiasm that SGO address you today on the
            occasion of unique mega sports event. This event symbolizes more
            than just competition it embodies the spirit of unity, perseverance,
            and excellence that sports bring into our lives.
          </p>

          <h3 class="about-h3">20+ Events</h3>

          <p class="section-text">
            Join us for an exciting journey at the School Games Olympiad,
            featuring over 20+ thrilling sports events where students showcase
            their talents, determination, and team spirit. Don't miss out on
            this incredible celebration of athletic excellence!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;

import React from "react";
import { Link } from "react-router-dom";

const AboutIntro = () => {
  return (
    <section class="section about" aria-label="about" id="about">
      <div class="container">
        <div class="about-banner img-holder">
          <img
            src="./assets/images/about-banner.jpg"
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
          <p class="section-subtitle">25+ Years Of Experience</p>

          <h2 class="h2 section-title">
            We have expert instructors for our students.
          </h2>

          <p class="section-text">
            Lorem Ipsum is simply dummy text the printing and typesetting
            standard dummy text ever since the 150 when an unknown printe
            specimen book has survived centuries.
          </p>

          <h3 class="about-h3">20+ Events</h3>

          <p class="section-text">
            Lorem Ipsum is simply dummy text the printing and typesetting
            standard dummy text ever since the 150 when an unknown printe
            specimen book has survived centuries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;

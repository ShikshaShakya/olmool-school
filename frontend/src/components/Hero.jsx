import React from "react";

const Hero = () => {
  return (
    <main>
      <article>
        <section className="section hero" aria-label="hero" id="home">
          <div className="container">
            <p className="hero-subtitle">inspire & empower</p>

            <h1 className="h1 hero-title">
              Shaping Future Leaders Through Sports.
            </h1>

            <p className="hero-text">
              Where Fair Play Meets Passion and Friendship
            </p>

            <a href="#" className="btn btn-secondary">
              Start Course
            </a>

            <div className="social-wrapper">
              <p className="social-title">Connect with us:</p>

              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-skype"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Hero;

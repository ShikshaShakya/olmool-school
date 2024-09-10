import React from "react";

const About = () => {
  return (
    <section className="section service" aria-label="service" data-section>
      <div className="container">
        <ul className="grid-list">
          <li>
            <div className="service-card">
              <div className="card-icon">
                <img
                  src="./assets/images/service-1.svg"
                  width="60"
                  height="60"
                  loading="lazy"
                  alt="Women’s Course"
                />
              </div>

              <h3 className="h3">
                <a href="#" class="card-title">
                  Mission
                </a>
              </h3>

              <p className="card-text">
                inspire and empower young students through sports, fostering the
                values of excellence, friendship, and respect.
              </p>

              <a href="#" class="btn btn-secondary">
                <ion-icon name="arrow-forward"></ion-icon>
              </a>
            </div>
          </li>

          <li>
            <div className="service-card active">
              <div className="card-icon">
                <img
                  src="./assets/images/service-2.svg"
                  width="60"
                  height="60"
                  loading="lazy"
                  alt="Basic Course"
                />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Executive Board
                </a>
              </h3>

              <p className="card-text">
                Comprised of experienced leaders, the board ensures the
                strategic direction, governance, and long-term success of our
                School Olympic Games.
              </p>

              <a href="#" class="btn btn-secondary">
                <ion-icon name="arrow-forward"></ion-icon>
              </a>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <img
                  src="./assets/images/service-3.svg"
                  width="60"
                  height="60"
                  loading="lazy"
                  alt="Men’s Course"
                />
              </div>

              <h3 className="h3">
                <a href="#" class="card-title">
                  Vision
                </a>
              </h3>

              <p className="card-text">
                The vision of School Olympic Games is to create a vibrant and
                inclusive sporting culture within educational institutions.
              </p>

              <a href="#" className="btn btn-secondary">
                <ion-icon name="arrow-forward"></ion-icon>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;

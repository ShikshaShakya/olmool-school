import React from "react";
import missionsvg from "./mission.svg";
import visionsvg from "./vision.svg";
import teamsvg from "./team.svg";
import { Link } from "react-router-dom";

const MissionVission = () => {
  return (
    <section className="section service" aria-label="service" id="service">
      <div className="container">
        <ul className="grid-list">
          <li>
            <div className="service-card">
              <div className="card-icon">
                <img
                  src={visionsvg}
                  width="50"
                  height="50"
                  loading="lazy"
                  alt="Our Mission"
                  className="mission-img"
                />
              </div>

              <h3 className="h3">
                <a href="#" class="card-title">
                  Mission
                </a>
              </h3>

              <p className="card-text">
                Inspire and empower young students through sports, fostering the
                values of excellence, friendship, and respect. These games aim
                to promote physical education, healthy competition, and
                teamwork, while encouraging students to develop a lifelong love
                for sports.
              </p>

              {/* <a href="#" class="btn btn-secondary">
                <ion-icon name="arrow-forward"></ion-icon>
              </a> */}
            </div>
          </li>

          <li>
            <div className="service-card active">
              <div className="card-icon">
                <img
                  src={teamsvg}
                  width="60"
                  height="60"
                  loading="lazy"
                  alt="Executive Board"
                  className="executive-img"
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
                School Olympic Games. The Executive Board plays a pivotal role
                in steering the vision and mission of the School Olympic Games.
              </p>

              <Link to="/team" class="btn btn-secondary">
                <ion-icon name="arrow-forward"></ion-icon>
              </Link>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <img
                  src={missionsvg}
                  width="60"
                  height="60"
                  loading="lazy"
                  alt="Our Vision"
                  className="vision-img"
                />
              </div>

              <h3 className="h3">
                <a href="#" class="card-title">
                  Vision
                </a>
              </h3>

              <p className="card-text">
                The vision of School Olympic Games is to create a vibrant and
                inclusive sporting culture within educational institutions,
                where every student has the opportunity to discover and develop
                their athletic potential.
              </p>

              {/* <a href="#" className="btn btn-secondary">
                <ion-icon name="arrow-forward"></ion-icon>
              </a> */}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MissionVission;

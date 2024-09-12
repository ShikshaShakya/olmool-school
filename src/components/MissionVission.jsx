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
                values of excellence, friendship, and respect. These games aim
                to promote physical education, healthy competition, and
                teamwork, while encouraging students to develop a lifelong love
                for sports. School Olympic Games seek to nurture talent, build
                character promote the Olympic spirit of unity and fair play,
                contributing to the holistic development of the next generation.
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
                School Olympic Games. The Executive Board plays a pivotal role
                in steering the vision and mission of our organization.
                Comprised of experienced leaders, the board ensures the
                strategic direction, governance, and long-term success of our
                School Olympic Games.
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
                inclusive sporting culture within educational institutions,
                where every student has the opportunity to discover and develop
                their athletic potential. Through these games, the vision is to
                cultivate future leaders who embody the Olympic ideals of
                excellence, respect, and global friendship, contributing to a
                more active, healthy, and united society.
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

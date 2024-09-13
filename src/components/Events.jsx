import React from "react";
import event1 from "../assets/100m.jpg";
import event2 from "../assets/200m.jpg";
import event3 from "../assets/400m.jpg";
import event4 from "../assets/100x400.jpg";
import event5 from "../assets/110m.jpg";
import event6 from "../assets/longjump.jpg";
import event7 from "../assets/tripplejump.jpg";
import event8 from "../assets/javelin.jpg";
import event9 from "../assets/discus.jpg";
import event10 from "../assets/archery.jpg";
import event11 from "../assets/badminton.jpg";
import event12 from "../assets/basketball.jpg";
import event13 from "../assets/boxing.jpg";
import event14 from "../assets/chess.jpg";
import event15 from "../assets/cricket.jpg";
import event16 from "../assets/football.jpg";
import event17 from "../assets/kabaddi.jpg";
import event18 from "../assets/karate.jpg";
import event19 from "../assets/khokho.jpeg";
import event20 from "../assets/shooting.jpg";
import event21 from "../assets/squash.jpeg";
import event22 from "../assets/swimming.jpg";
import event23 from "../assets/tabletennis.jpg";
import event24 from "../assets/tennis.jpg";
import event25 from "../assets/tugofwar.jpg";
import event26 from "../assets/volleyball.jpg";
import { FaRunning } from "react-icons/fa";
import { GiJumpAcross } from "react-icons/gi";
import { GiThrowingBall } from "react-icons/gi";
import { PiPersonSimpleThrow } from "react-icons/pi";
import { GiArcheryTarget } from "react-icons/gi";
import { GiShuttlecock } from "react-icons/gi";
import { TbPlayBasketball } from "react-icons/tb";
import { PiBoxingGloveBold } from "react-icons/pi";
import { FaChess } from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";
import { IoFootballSharp } from "react-icons/io5";
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { TbKarate } from "react-icons/tb";
import { LiaRunningSolid } from "react-icons/lia";
import { FaGun } from "react-icons/fa6";
import { MdOutlineSportsTennis } from "react-icons/md";
import { FaPersonSwimming } from "react-icons/fa6";
import { FaTableTennis } from "react-icons/fa";
import { GiTennisRacket } from "react-icons/gi";
import { GiVolleyballBall } from "react-icons/gi";

const Events = () => {
  return (
    <section className="section course" aria-label="course" id="events">
      <div className="container">
        <div className="title-wrapper">
          <p className="section-subtitle">20+ Events Available</p>

          <h2 className="h2 section-title">Our Events</h2>
        </div>

        <ul className="grid-list">
          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src={event1}
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Children Nutrition and Cooking"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="98">
                  <FaRunning />
                </data>

                {/* <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Ryan Patterson</span>
                  </a>
                </p> */}

                <h3 className="h3">
                  <p className="card-title">100m</p>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT8H20M">Speed</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">Power</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src={event2}
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Introduction to Food and Health."
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="72">
                  <FaRunning />
                </data>

                {/* <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Dr. Pankaj Dubey</span>
                  </a>
                </p> */}

                <h3 className="h3">
                  <p className="card-title">200m</p>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H25M">Endurance</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">Speed</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src={event3}
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Nutrition and Lifestyle in Pregnancy"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  <FaRunning />
                </data>

                {/* <p className="card-author">
                  <a href="#" class="card-link">
                    <>Dr. Udham Singh</>
                  </a>
                </p> */}

                <h3 className="h3">
                  <p className="card-title">400m</p>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT3H38M">Stamina</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">Oxygenation</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src={event4}
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Expertise on Fitness, Nutrition and Health"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="98">
                  <FaRunning />
                </data>

                {/* <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Dr. Pankaj Pandey</span>
                  </a>
                </p> */}

                <h3 className="h3">
                  <p className="card-title">100X400m</p>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT2H16M">Coordination</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">Efficiency</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src={event5}
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Hacking exercise for health new science of fitness"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="72">
                  <FaRunning />
                </data>

                {/* <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Mr. Animesh Gupta</span>
                  </a>
                </p> */}

                <h3 className="h3">
                  <p className="card-title">110m</p>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT6H12M">Agility</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">Reflexes</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src={event6}
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  <GiJumpAcross />
                </data>

                {/* <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Selina Benton</span>
                  </a>
                </p> */}

                <h3 className="h3">
                  <p className="card-title">Long Jump</p>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">Power</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">Explosiveness</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src={event7}
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  <GiJumpAcross />
                </data>

                {/* <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Mr. Shubham</span>
                  </a>
                </p> */}

                <h3 className="h3">
                  <p className="card-title">Tripple Jump</p>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">Elasticity</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">Strength</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src={event8}
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  <GiThrowingBall />
                </data>

                {/* <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Mr. Shubham</span>
                  </a>
                </p> */}

                <h3 className="h3">
                  <p className="card-title">Javelin Throw</p>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">Strength</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">Precision</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src={event9}
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  <PiPersonSimpleThrow />
                </data>

                {/* <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Mr. Shubham</span>
                  </a>
                </p> */}

                <h3 className="h3">
                  <p className="card-title">Discus Throw</p>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">Power</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">Stability</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src={event10}
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  <GiArcheryTarget />
                </data>

                {/* <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Mr. Shubham</span>
                  </a>
                </p> */}

                <h3 className="h3">
                  <p className="card-title">Archery</p>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">Focus</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">Precision</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src={event11}
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  <GiShuttlecock />
                </data>

                {/* <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Mr. Shubham</span>
                  </a>
                </p> */}

                <h3 className="h3">
                  <p className="card-title">Badminton</p>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">Agility</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">Endurance</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src={event12}
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  <TbPlayBasketball />
                </data>

                {/* <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Mr. Shubham</span>
                  </a>
                </p> */}

                <h3 className="h3">
                  <p className="card-title">Basketball</p>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">Stamina</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">Agility</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src={event13}
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  <PiBoxingGloveBold />
                </data>

                {/* <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Mr. Shubham</span>
                  </a>
                </p> */}

                <h3 className="h3">
                  <p className="card-title">Boxing</p>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">Strength</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">Endurance</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src={event14}
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  <FaChess />
                </data>

                {/* <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Mr. Shubham</span>
                  </a>
                </p> */}

                <h3 className="h3">
                  <p className="card-title">Chess</p>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">Focus</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">Strategy</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src={event15}
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  <MdSportsCricket />
                </data>

                {/* <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Mr. Shubham</span>
                  </a>
                </p> */}

                <h3 className="h3">
                  <p className="card-title">Cricket</p>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">Agility</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">Reflexes</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src={event16}
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  <IoFootballSharp />
                </data>

                {/* <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Mr. Shubham</span>
                  </a>
                </p> */}

                <h3 className="h3">
                  <p className="card-title">Football</p>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">Endurance</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">Agility</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src={event17}
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  <MdOutlineSportsKabaddi />
                </data>

                {/* <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Mr. Shubham</span>
                  </a>
                </p> */}

                <h3 className="h3">
                  <p className="card-title">Kabaddi</p>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">Power</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">Agility</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src={event18}
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  <TbKarate />
                </data>

                {/* <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Mr. Shubham</span>
                  </a>
                </p> */}

                <h3 className="h3">
                  <p className="card-title">Karate</p>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">Strength</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">Power</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src={event19}
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  <LiaRunningSolid />
                </data>

                {/* <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Mr. Shubham</span>
                  </a>
                </p> */}

                <h3 className="h3">
                  <p className="card-title">Kho-Kho</p>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">Agility</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">Speed</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src={event20}
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  <FaGun />
                </data>

                {/* <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Mr. Shubham</span>
                  </a>
                </p> */}

                <h3 className="h3">
                  <p className="card-title">Shooting</p>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">Focus</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">Precision</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src={event21}
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  <MdOutlineSportsTennis />
                </data>

                {/* <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Mr. Shubham</span>
                  </a>
                </p> */}

                <h3 className="h3">
                  <p className="card-title">Squash</p>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">Endurance</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">Agility</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src={event22}
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  <FaPersonSwimming />
                </data>

                {/* <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Mr. Shubham</span>
                  </a>
                </p> */}

                <h3 className="h3">
                  <p className="card-title">Swimming</p>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">Stamina</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">Endurance</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src={event23}
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  <FaTableTennis />
                </data>

                {/* <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Mr. Shubham</span>
                  </a>
                </p> */}

                <h3 className="h3">
                  <p className="card-title">Table Tennis</p>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">Reflexes</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">Agility</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src={event24}
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  <GiTennisRacket />
                </data>

                {/* <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Mr. Shubham</span>
                  </a>
                </p> */}

                <h3 className="h3">
                  <p className="card-title">Tennis</p>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">Stamina</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">Speed</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src={event25}
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  <MdOutlineSportsKabaddi />
                </data>

                {/* <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Mr. Shubham</span>
                  </a>
                </p> */}

                <h3 className="h3">
                  <p className="card-title">Tug of War</p>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">Strength</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">Power</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src={event26}
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  <GiVolleyballBall />
                </data>

                {/* <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Mr. Shubham</span>
                  </a>
                </p> */}

                <h3 className="h3">
                  <p className="card-title">Volleyball</p>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">Agility</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">Power</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Events;

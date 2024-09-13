import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import president from "../assets/president.jpg";
import { Link } from "react-router-dom";

const ExecutiveBoard = () => {
  const { hash } = useLocation();

  // Scroll to the section if hash exists
  useEffect(() => {
    if (hash) {
      const section = document.getElementById(hash.substring(1)); // Remove the '#' from the hash
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <section className="section course" aria-label="course" id="team">
      <div className="container">
        <div className="title-wrapper">
          <p className="section-subtitle">100+ Courses Available</p>

          <h2 className="h2 section-title">Executive Board</h2>
        </div>

        {/* <ul className="grid-list">
          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/courses-1.jpg"
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Children Nutrition and Cooking"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="98">
                  $98
                </data>

                <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Ryan Patterson</span>
                  </a>
                </p>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    President
                  </a>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT8H20M">08 hr 20 mins</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">28 Lectures</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/courses-2.jpg"
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Introduction to Food and Health."
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="72">
                  $72
                </data>

                <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Dr. Pankaj Dubey</span>
                  </a>
                </p>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Vice President
                  </a>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H25M">09 hr 25 mins</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">16 Lectures</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/courses-3.jpg"
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Nutrition and Lifestyle in Pregnancy"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  $68
                </data>

                <p className="card-author">
                  <a href="#" class="card-link">
                    <>Dr. Udham Singh</>
                  </a>
                </p>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Vice President
                  </a>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT3H38M">03 hr 38 mins</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">18 Lectures</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/courses-4.jpg"
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Expertise on Fitness, Nutrition and Health"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="98">
                  $98
                </data>

                <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Dr. Pankaj Pandey</span>
                  </a>
                </p>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Secretary
                  </a>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT2H16M">02 hr 16 mins</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">14 Lectures</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/courses-5.jpg"
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Hacking exercise for health new science of fitness"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="72">
                  $72
                </data>

                <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Mr. Animesh Gupta</span>
                  </a>
                </p>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Treasurer
                  </a>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT6H12M">06 hr 12 mins</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">35 Lectures</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/courses-6.jpg"
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  $68
                </data>

                <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Selina Benton</span>
                  </a>
                </p>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Legal Adviser
                  </a>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">09 hr 34 mins</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">28 Lectures</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/courses-6.jpg"
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  $68
                </data>

                <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Mr. Shubham</span>
                  </a>
                </p>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    IT Adviser
                  </a>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">09 hr 34 mins</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">28 Lectures</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul> */}
        <ul className="grid-list">
          <li>
            <div className="service-card2">
              <div className="card-icon2">
                <img
                  src={president}
                  width="50"
                  height="50"
                  loading="lazy"
                  alt="Our Mission"
                  className="member-img"
                />
              </div>

              <h3 className="h3">
                <a href="#" class="card-title">
                  Mr. XYZ
                </a>
              </h3>

              <p className="card-text">President</p>

              {/* <a href="#" class="btn btn-secondary">
                <ion-icon name="arrow-forward"></ion-icon>
              </a> */}
            </div>
          </li>

          <li>
            <div className="service-card2 active">
              <div className="card-icon2">
                <img
                  src={president}
                  width="60"
                  height="60"
                  loading="lazy"
                  alt="Executive Board"
                  className="member-img"
                />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Dr. Pankaj Dubey
                </a>
              </h3>

              <p className="card-text">Vice President</p>

              {/* <Link to="/team" class="btn btn-secondary">
                <ion-icon name="arrow-forward"></ion-icon>
              </Link> */}
            </div>
          </li>

          <li>
            <div className="service-card2">
              <div className="card-icon2">
                <img
                  src={president}
                  width="60"
                  height="60"
                  loading="lazy"
                  alt="Our Vision"
                  className="member-img"
                />
              </div>

              <h3 className="h3">
                <a href="#" class="card-title">
                  Dr. Udham Singh
                </a>
              </h3>

              <p className="card-text">Vice President</p>

              {/* <a href="#" className="btn btn-secondary">
                <ion-icon name="arrow-forward"></ion-icon>
              </a> */}
            </div>
          </li>
          <li>
            <div className="service-card2">
              <div className="card-icon2">
                <img
                  src={president}
                  width="50"
                  height="50"
                  loading="lazy"
                  alt="Our Mission"
                  className="member-img"
                />
              </div>

              <h3 className="h3">
                <a href="#" class="card-title">
                  Dr. Pankaj Pandey
                </a>
              </h3>

              <p className="card-text">Secretary</p>

              {/* <a href="#" class="btn btn-secondary">
                <ion-icon name="arrow-forward"></ion-icon>
              </a> */}
            </div>
          </li>
          <li>
            <div className="service-card2">
              <div className="card-icon2">
                <img
                  src={president}
                  width="50"
                  height="50"
                  loading="lazy"
                  alt="Our Mission"
                  className="member-img"
                />
              </div>

              <h3 className="h3">
                <a href="#" class="card-title">
                  Mr. Animesh Gupta
                </a>
              </h3>

              <p className="card-text">Treasurer</p>

              {/* <a href="#" class="btn btn-secondary">
                <ion-icon name="arrow-forward"></ion-icon>
              </a> */}
            </div>
          </li>
          <li>
            <div className="service-card2">
              <div className="card-icon2">
                <img
                  src={president}
                  width="50"
                  height="50"
                  loading="lazy"
                  alt="Our Mission"
                  className="member-img"
                />
              </div>

              <h3 className="h3">
                <a href="#" class="card-title">
                  Mr. XY
                </a>
              </h3>

              <p className="card-text">Legal Adviser</p>

              {/* <a href="#" class="btn btn-secondary">
                <ion-icon name="arrow-forward"></ion-icon>
              </a> */}
            </div>
          </li>
          <li>
            <div className="service-card2">
              <div className="card-icon2">
                <img
                  src={president}
                  width="50"
                  height="50"
                  loading="lazy"
                  alt="Our Mission"
                  className="member-img"
                />
              </div>

              <h3 className="h3">
                <a href="#" class="card-title">
                  Mr. Shubham
                </a>
              </h3>

              <p className="card-text">IT Adviser</p>

              {/* <a href="#" class="btn btn-secondary">
                <ion-icon name="arrow-forward"></ion-icon>
              </a> */}
            </div>
          </li>
        </ul>
        <br></br>
        <br></br>
        <p className="section-subtitle">Our Mentors</p>
        <br></br>
        <br></br>
        {/* <ul className="grid-list" id="mentors">
          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/courses-1.jpg"
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Children Nutrition and Cooking"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="98">
                  $98
                </data>

                <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Ex. Captain Ranji trophy , U.P.</span>
                    <span>Match Referee</span>
                  </a>
                </p>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Dr. Rohit Prakash
                  </a>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT8H20M">08 hr 20 mins</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">28 Lectures</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/courses-2.jpg"
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Introduction to Food and Health."
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="72">
                  $72
                </data>

                <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Former Ranji trophy player</span>
                    <span>Former coach UP cricket team</span>
                  </a>
                </p>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Mr. Prashant Malviya
                  </a>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H25M">09 hr 25 mins</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">16 Lectures</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/courses-3.jpg"
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Nutrition and Lifestyle in Pregnancy"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  $68
                </data>

                <p className="card-author">
                  <a href="#" class="card-link">
                    <>Former U.P. Ranji trophy player</>
                  </a>
                </p>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Mr. Pradeep Yadav
                  </a>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT3H38M">03 hr 38 mins</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">18 Lectures</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/courses-4.jpg"
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Expertise on Fitness, Nutrition and Health"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="98">
                  $98
                </data>

                <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Sports Officer, GBU</span>
                  </a>
                </p>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Dr. Pradeep Yadav
                  </a>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT2H16M">02 hr 16 mins</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">14 Lectures</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/courses-5.jpg"
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Hacking exercise for health new science of fitness"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="72">
                  $72
                </data>

                <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Handball Expert</span>
                  </a>
                </p>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Dr. Pankaj Dubey
                  </a>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT6H12M">06 hr 12 mins</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">35 Lectures</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/courses-6.jpg"
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  $68
                </data>

                <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Sports officer, Gr. Noida</span>
                  </a>
                </p>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Mr. Anendra Chauhan
                  </a>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">09 hr 34 mins</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">28 Lectures</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/courses-6.jpg"
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  $68
                </data>

                <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Squash Expert</span>
                  </a>
                </p>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Mr. Gyan Prakash
                  </a>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">09 hr 34 mins</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">28 Lectures</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/courses-6.jpg"
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  $68
                </data>

                <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Gymnastic expert</span>
                  </a>
                </p>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Dr. Prakhar Rathore
                  </a>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">09 hr 34 mins</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">28 Lectures</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/courses-6.jpg"
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  $68
                </data>

                <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Handball Expert</span>
                  </a>
                </p>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Dr. Pushpendra Narwaria
                  </a>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">09 hr 34 mins</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">28 Lectures</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/courses-6.jpg"
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  $68
                </data>

                <p className="card-author">
                  <a href="#" className="card-link">
                    <span>International Athlete</span>
                  </a>
                </p>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Dr. Pankaja Pandey
                  </a>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">09 hr 34 mins</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">28 Lectures</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/courses-6.jpg"
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  $68
                </data>

                <p className="card-author">
                  <a href="#" className="card-link">
                    <span>Cricket Expert</span>
                  </a>
                </p>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Dr. Siddharth Sharma
                  </a>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">09 hr 34 mins</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">28 Lectures</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/courses-6.jpg"
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  $68
                </data>

                <p className="card-author">
                  <a href="#" className="card-link">
                    <span>District Sports Officer</span>
                  </a>
                </p>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Mr. Anurag Srivastava
                  </a>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">09 hr 34 mins</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">28 Lectures</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/courses-6.jpg"
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  $68
                </data>

                <p className="card-author">
                  <a href="#" className="card-link">
                    <span>P.E.T, DPS</span>
                  </a>
                </p>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Mr. Amit Anand
                  </a>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">09 hr 34 mins</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">28 Lectures</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="course-card">
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/courses-6.jpg"
                  width="350"
                  height="300"
                  loading="lazy"
                  alt="Designing Your Personal Weight Loss Plan"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <data className="card-price" value="68">
                  $68
                </data>

                <p className="card-author">
                  <a href="#" className="card-link">
                    <span>P.E.T</span>
                  </a>
                </p>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Mr. Shambhu Nath
                  </a>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time datetime="PT9H34M">09 hr 34 mins</time>
                  </li>

                  <li className="card-meta-item">
                    <p className="card-meta-text">28 Lectures</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul> */}
        <ul className="grid-list">
          <li>
            <div className="service-card2">
              <div className="card-icon2">
                <img
                  src={president}
                  width="50"
                  height="50"
                  loading="lazy"
                  alt="Our Mission"
                  className="member-img"
                />
              </div>

              <h3 className="h3">
                <a href="#" class="card-title">
                  Dr. Rohit Prakash
                </a>
              </h3>

              <p className="card-text">
                Ex. Captain Ranji trophy , U.P. <br></br>Match Referee
              </p>

              {/* <a href="#" class="btn btn-secondary">
                <ion-icon name="arrow-forward"></ion-icon>
              </a> */}
            </div>
          </li>

          <li>
            <div className="service-card2 active">
              <div className="card-icon2">
                <img
                  src={president}
                  width="60"
                  height="60"
                  loading="lazy"
                  alt="Executive Board"
                  className="member-img"
                />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Mr. Prashant Malviya
                </a>
              </h3>

              <p className="card-text">
                Former Ranji trophy player <br></br>
                Former coach UP cricket team
              </p>

              {/* <Link to="/team" class="btn btn-secondary">
                <ion-icon name="arrow-forward"></ion-icon>
              </Link> */}
            </div>
          </li>

          <li>
            <div className="service-card2">
              <div className="card-icon2">
                <img
                  src={president}
                  width="60"
                  height="60"
                  loading="lazy"
                  alt="Our Vision"
                  className="member-img"
                />
              </div>

              <h3 className="h3">
                <a href="#" class="card-title">
                  Mr. Pradeep Yadav
                </a>
              </h3>

              <p className="card-text">Former U.P. Ranji trophy player</p>

              {/* <a href="#" className="btn btn-secondary">
                <ion-icon name="arrow-forward"></ion-icon>
              </a> */}
            </div>
          </li>
          <li>
            <div className="service-card2">
              <div className="card-icon2">
                <img
                  src={president}
                  width="60"
                  height="60"
                  loading="lazy"
                  alt="Our Vision"
                  className="member-img"
                />
              </div>

              <h3 className="h3">
                <a href="#" class="card-title">
                  Mr. Pradeep Yadav
                </a>
              </h3>

              <p className="card-text">Former U.P. Ranji trophy player</p>

              {/* <a href="#" className="btn btn-secondary">
                <ion-icon name="arrow-forward"></ion-icon>
              </a> */}
            </div>
          </li>
          <li>
            <div className="service-card2">
              <div className="card-icon2">
                <img
                  src={president}
                  width="60"
                  height="60"
                  loading="lazy"
                  alt="Our Vision"
                  className="member-img"
                />
              </div>

              <h3 className="h3">
                <a href="#" class="card-title">
                  Dr. Pradeep Yadav
                </a>
              </h3>

              <p className="card-text">Sports Officer, GBU</p>

              {/* <a href="#" className="btn btn-secondary">
                <ion-icon name="arrow-forward"></ion-icon>
              </a> */}
            </div>
          </li>
          <li>
            <div className="service-card2">
              <div className="card-icon2">
                <img
                  src={president}
                  width="60"
                  height="60"
                  loading="lazy"
                  alt="Our Vision"
                  className="member-img"
                />
              </div>

              <h3 className="h3">
                <a href="#" class="card-title">
                  Dr. Pankaj Dubey
                </a>
              </h3>

              <p className="card-text">Handball Expert</p>

              {/* <a href="#" className="btn btn-secondary">
                <ion-icon name="arrow-forward"></ion-icon>
              </a> */}
            </div>
          </li>
          <li>
            <div className="service-card2">
              <div className="card-icon2">
                <img
                  src={president}
                  width="60"
                  height="60"
                  loading="lazy"
                  alt="Our Vision"
                  className="member-img"
                />
              </div>

              <h3 className="h3">
                <a href="#" class="card-title">
                  Mr. Anendra Chauhan
                </a>
              </h3>

              <p className="card-text">Sports officer, Gr. Noida</p>

              {/* <a href="#" className="btn btn-secondary">
                <ion-icon name="arrow-forward"></ion-icon>
              </a> */}
            </div>
          </li>
          <li>
            <div className="service-card2">
              <div className="card-icon2">
                <img
                  src={president}
                  width="60"
                  height="60"
                  loading="lazy"
                  alt="Our Vision"
                  className="member-img"
                />
              </div>

              <h3 className="h3">
                <a href="#" class="card-title">
                  Mr. Gyan Prakash
                </a>
              </h3>

              <p className="card-text">Squash Expert</p>

              {/* <a href="#" className="btn btn-secondary">
                <ion-icon name="arrow-forward"></ion-icon>
              </a> */}
            </div>
          </li>
          <li>
            <div className="service-card2">
              <div className="card-icon2">
                <img
                  src={president}
                  width="60"
                  height="60"
                  loading="lazy"
                  alt="Our Vision"
                  className="member-img"
                />
              </div>

              <h3 className="h3">
                <a href="#" class="card-title">
                  Dr. Prakhar Rathore
                </a>
              </h3>

              <p className="card-text">Gymnastic expert</p>

              {/* <a href="#" className="btn btn-secondary">
                <ion-icon name="arrow-forward"></ion-icon>
              </a> */}
            </div>
          </li>
          <li>
            <div className="service-card2">
              <div className="card-icon2">
                <img
                  src={president}
                  width="60"
                  height="60"
                  loading="lazy"
                  alt="Our Vision"
                  className="member-img"
                />
              </div>

              <h3 className="h3">
                <a href="#" class="card-title">
                  Dr. Pushpendra Narwaria
                </a>
              </h3>

              <p className="card-text">Handball Expert</p>

              {/* <a href="#" className="btn btn-secondary">
                <ion-icon name="arrow-forward"></ion-icon>
              </a> */}
            </div>
          </li>
          <li>
            <div className="service-card2">
              <div className="card-icon2">
                <img
                  src={president}
                  width="60"
                  height="60"
                  loading="lazy"
                  alt="Our Vision"
                  className="member-img"
                />
              </div>

              <h3 className="h3">
                <a href="#" class="card-title">
                  Dr. Pankaja Pandey
                </a>
              </h3>

              <p className="card-text">International Athlete</p>

              {/* <a href="#" className="btn btn-secondary">
                <ion-icon name="arrow-forward"></ion-icon>
              </a> */}
            </div>
          </li>
          <li>
            <div className="service-card2">
              <div className="card-icon2">
                <img
                  src={president}
                  width="60"
                  height="60"
                  loading="lazy"
                  alt="Our Vision"
                  className="member-img"
                />
              </div>

              <h3 className="h3">
                <a href="#" class="card-title">
                  Dr. Siddharth Sharma
                </a>
              </h3>

              <p className="card-text">Cricket Expert</p>

              {/* <a href="#" className="btn btn-secondary">
                <ion-icon name="arrow-forward"></ion-icon>
              </a> */}
            </div>
          </li>
          <li>
            <div className="service-card2">
              <div className="card-icon2">
                <img
                  src={president}
                  width="60"
                  height="60"
                  loading="lazy"
                  alt="Our Vision"
                  className="member-img"
                />
              </div>

              <h3 className="h3">
                <a href="#" class="card-title">
                  Mr. Anurag Srivastava
                </a>
              </h3>

              <p className="card-text">Mr. Anurag Srivastava</p>

              {/* <a href="#" className="btn btn-secondary">
                <ion-icon name="arrow-forward"></ion-icon>
              </a> */}
            </div>
          </li>
          <li>
            <div className="service-card2">
              <div className="card-icon2">
                <img
                  src={president}
                  width="60"
                  height="60"
                  loading="lazy"
                  alt="Our Vision"
                  className="member-img"
                />
              </div>

              <h3 className="h3">
                <a href="#" class="card-title">
                  Mr. Amit Anand
                </a>
              </h3>

              <p className="card-text">P.E.T, DPS</p>

              {/* <a href="#" className="btn btn-secondary">
                <ion-icon name="arrow-forward"></ion-icon>
              </a> */}
            </div>
          </li>
          <li>
            <div className="service-card2">
              <div className="card-icon2">
                <img
                  src={president}
                  width="60"
                  height="60"
                  loading="lazy"
                  alt="Our Vision"
                  className="member-img"
                />
              </div>

              <h3 className="h3">
                <a href="#" class="card-title">
                  Mr. Shambhu Nath
                </a>
              </h3>

              <p className="card-text">P.E.T</p>

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

export default ExecutiveBoard;

import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const MoreAbout = () => {
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
    <>
      <br></br>
      <br></br>
      <section class="section about" aria-label="about" id="moreabout">
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
              President
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

      <section class=" blog" aria-label="blog" id="values">
        <div class="container">
          <div class="title-wrapper">
            {/* <p class="section-subtitle">Our Values</p> */}

            <h2 class="h2 section-title values-h2">Our Building Blocks</h2>
          </div>

          <ul class="grid-list">
            <li>
              <div class="blog-card">
                <div class="wrapper">
                  <time class="publish-date" datetime="2022-02-24">
                    <span class="span">1</span> block
                  </time>

                  <div>
                    <div class="card-author">
                      <a href="#" class="card-link">
                        By: <span class="span">Maddie Rife</span>
                      </a>
                    </div>

                    <ul class="card-meta-list">
                      <li class="card-meta-item">
                        <p class="item-text">87 Likes</p>
                      </li>

                      <li class="card-meta-item">
                        <p class="item-text">58 Share</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">
                    Our Mission: Shaping the Future Through Sports Excellence
                  </a>
                </h3>

                <p class="card-text">
                  inspire and empower young students through sports, fostering
                  the values of excellence, friendship, and respect. These games
                  aim to promote physical education, healthy competition, and
                  teamwork, while encouraging students to develop a lifelong
                  love for sports. School Olympic Games seek to nurture talent,
                  build character promote the Olympic spirit of unity and fair
                  play, contributing to the holistic development of the next
                  generation.
                </p>
              </div>
            </li>

            <li>
              <div class="blog-card">
                <div class="wrapper">
                  <time class="publish-date" datetime="2022-02-24">
                    <span class="span">2</span> block
                  </time>

                  <div>
                    <div class="card-author">
                      <a href="#" class="card-link">
                        By: <span class="span">Maddie Rife</span>
                      </a>
                    </div>

                    <ul class="card-meta-list">
                      <li class="card-meta-item">
                        <p class="item-text">87 Likes</p>
                      </li>

                      <li class="card-meta-item">
                        <p class="item-text">58 Share</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">
                    Vision: A World Where Youth Thrive Through Sports
                  </a>
                </h3>

                <p class="card-text">
                  The vision of School Olympic Games is to create a vibrant and
                  inclusive sporting culture within educational institutions,
                  where every student has the opportunity to discover and
                  develop their athletic potential. Through these games, the
                  vision is to cultivate future leaders who embody the Olympic
                  ideals of excellence, respect, and global friendship,
                  contributing to a more active, healthy, and united society.
                </p>
              </div>
            </li>

            <li>
              <div class="blog-card">
                <div class="wrapper">
                  <time class="publish-date" datetime="2022-02-24">
                    <span class="span">3</span> block
                  </time>

                  <div>
                    <div class="card-author">
                      <a href="#" class="card-link">
                        By: <span class="span">Maddie Rife</span>
                      </a>
                    </div>

                    <ul class="card-meta-list">
                      <li class="card-meta-item">
                        <p class="item-text">87 Likes</p>
                      </li>

                      <li class="card-meta-item">
                        <p class="item-text">58 Share</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">
                    Our Values: What We Stand For
                  </a>
                </h3>

                <p class="card-text">
                  At Olmool, our values of excellence, friendship, respect, and
                  teamwork drive everything we do. We are committed to fostering
                  a culture of healthy competition, unity, and inclusivity,
                  where every student has the opportunity to thrive. Through
                  sports, we aim to nurture talent, build character, and promote
                  the Olympic spirit of fair play and global friendship,
                  contributing to the holistic development of the next
                  generation and shaping future leaders who embody these ideals.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default MoreAbout;

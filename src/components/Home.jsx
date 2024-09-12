import React from "react";
import Hero from "./Hero";
import MissionVission from "./MissionVission";
import AboutIntro from "./AboutIntro";
import CarouselSlider from "./CarouselSlider";
import Approach from "./Approach";
import AssociatePartners from "./AssociatePartners";
import EventCalendar from "./EventCalendar";

const Home = () => {
  return (
    <>
      <Hero />
      <MissionVission />
      <AboutIntro />
      <CarouselSlider />
      <Approach />
      <AssociatePartners />
    </>
  );
};

export default Home;

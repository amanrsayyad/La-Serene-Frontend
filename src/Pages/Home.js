import React from "react";
import Caro from "../Component/Caro/Caro";
import Section from "../Component/Section/Section";
import Services from "../Component/Services/Services";
import Features from "../Component/Features/Features";
import Room from "../Component/Room/Room";
import Footer from "../Component/Footer/Footer";
import Contactus from "../Component/Contact Us/Contactus";
import MainSlider from "../Component/Review/MainSlider";
import RatingBar from "../Component/Review/RatingBar";

const Home = () => {
  return (
    <>
      <Caro />
      <RatingBar />
      <MainSlider />
      <Services />
      <Section />
      <Room />
      <Features />
      <Contactus />
      <Footer />
    </>
  );
};

export default Home;

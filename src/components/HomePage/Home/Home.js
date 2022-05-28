import React from "react";
import Banner from "../Banner/Banner";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MeetCeo from "../MeetCeo/MeetCeo";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <MeetCeo></MeetCeo>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
};

export default Home;

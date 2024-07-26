import React from "react";
import Banner from "./Banner";
import NavBar from "../component/NavBar";
import TopRatted from "./TopRatted";
import Popular from "./Popular";
import Footer from "../component/Footer";
import Trending from "./Trending";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <TopRatted />
      <Popular />
      <Trending />
      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import SingleMovieDta from "./SingleMovieDta";
import Cast from "./Cast";
import Similar from "./Similar";
import Recommendations from "./Recommendations";
import Footer from "../component/Footer";

const SinglePage = () => {
  return (
    <div>
      <SingleMovieDta />
      <Cast />
      <Similar />
      <Recommendations />
      <Footer />
    </div>
  );
};

export default SinglePage;

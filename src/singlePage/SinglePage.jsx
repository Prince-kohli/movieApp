import React from "react";
import SingleMovieDta from "./SingleMovieDta";
import Cast from "./Cast";
import Similar from "./Similar";
import Recommendations from "./Recommendations";
import Footer from "../component/Footer";
// import Official from "./Official";

const SinglePage = () => {
  return (
    <div>
      <SingleMovieDta />
      <Cast />
      {/* <Official /> */}
      <Similar />
      <Recommendations />
      <Footer />
    </div>
  );
};

export default SinglePage;

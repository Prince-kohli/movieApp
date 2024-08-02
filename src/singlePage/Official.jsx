import React from "react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const Official = () => {
  const data = useSelector((state) => state.url.data);
  const url = useSelector((state) => state.url.url);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel responsive={responsive}>
        <div class="card">
          <Link to="/singlemoviedata">
            <img
              src=""
              class="card-img-top"
              alt="..."
              style={{ height: 300 }}
            />
          </Link>
          <div class="card">
            <h6 class="card-title"></h6>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Official;

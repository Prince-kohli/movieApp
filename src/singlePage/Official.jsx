import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Official = () => {
  const data = useSelector((state) => state.url.data);
  const url = useSelector((state) => state.url.url);

  const [video, setVideo] = useState([]);

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${data.id}/videos`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmFhZjNkOGQ0MjIxYjFlNDU5ZGJiMDE0NGU5NDQ2ZCIsIm5iZiI6MTcyMjQ5OTQyMS4yOTM1MjksInN1YiI6IjY2YTA3OWNmMWM2MjY4NTFjOTQwMzc3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tpi_Du61YRwflfK5fVTjazHEGNk6mKqVUNXbObm-HsA",
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log("videos", response.data);
        // setVideo(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [data]);
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
    <div className="container   ">
      <h1 style={{ marginTop: 30, color: "white", fontFamily: "fantasy" }}>
        Official videos
      </h1>

      <Carousel responsive={responsive}>
        <div class="card4" style={{ height: 100, width: 100 }}>
          <Link to="/singlemoviedata">
            <img
              src=""
              class="card-img-top"
              alt="..."
              style={{ height: 300 }}
            />
          </Link>
          {/* <div class="card">
            <h6 class="card-title"></h6>
          </div> */}
        </div>
      </Carousel>
    </div>
  );
};

export default Official;

import React, { useEffect, useState } from "react";
import "./style.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getData, getMore } from "../store/UrlSlice";
import { Link } from "react-router-dom";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const url = useSelector((state) => state.url.url);
  //   console.log("path", url.backdrop);
  const dispatch = useDispatch();

  // console.log("trending", trending);

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/all/day",
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmFhZjNkOGQ0MjIxYjFlNDU5ZGJiMDE0NGU5NDQ2ZCIsIm5iZiI6MTcyMTg4NDg3MC43MTc2NjEsInN1YiI6IjY2YTA3OWNmMWM2MjY4NTFjOTQwMzc3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k-RiiY4LkGhSCBdLxMDJxftQTCmjxELex95tigoYNfk",
    },
  };
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
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setTrending(response?.data?.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const data = (num) => {
    dispatch(getData(num));
  };

  const handleMore = (trending) => {
    console.log("trending", trending);
    dispatch(getMore(trending));
  };

  return (
    <div>
      <div className="container ">
        <div className="more">
          <div>
            {" "}
            <h1
              style={{
                color: "white",
                fontFamily: "fantasy",
              }}
            >
              Trending
            </h1>
          </div>
          <div>
            {" "}
            <Link to="/movieall">
              <div className="button">
                <h6
                  type="button"
                  onClick={() => handleMore(trending)}
                  style={{
                    marginTop: 0,
                    color: "white",
                    fontFamily: "fantasy",
                  }}
                >
                  view more
                </h6>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: 20 }}>
        <Carousel responsive={responsive}>
          {trending.map((num) => (
            <div class="card" onClick={() => data(num)}>
              <Link to="/singlemoviedata">
                <img
                  src={url.backdrop + num?.poster_path}
                  class="card-img-top"
                  alt="..."
                  style={{ height: 300 }}
                />
              </Link>
              <div class="card">
                <div className="circleRating" style={{ height: 30, width: 50 }}>
                  <CircularProgressbar
                    value={num?.vote_average}
                    maxValue={10}
                    text={num?.vote_average.toFixed(1)}
                    styles={buildStyles({
                      pathColor:
                        num?.vote_average < 5
                          ? "red"
                          : num?.vote_average < 7
                          ? "orange"
                          : "green",
                    })}
                  />
                </div>
                {!num?.original_title ? (
                  <h5 class="card-title" style={{ marginTop: 20 }}>
                    {num?.original_name}
                  </h5>
                ) : (
                  <h5 class="card-title" style={{ marginTop: 20 }}>
                    {num?.original_title}
                  </h5>
                )}

                {!num?.release_date ? (
                  <h5 class="card-title">{num?.first_air_date}</h5>
                ) : (
                  <h5 class="card-title">{num?.release_date}</h5>
                )}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      ;
    </div>
  );
};

export default Trending;

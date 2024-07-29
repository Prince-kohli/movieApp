import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useDispatch } from "react-redux";
import { getData, getMore } from "../store/UrlSlice";
import { Link } from "react-router-dom";

const TopRatted = () => {
  const [topRated, setTopRated] = useState([]);
  const url = useSelector((state) => state.url.url);

  const dispatch = useDispatch();

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/tv/top_rated",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmFhZjNkOGQ0MjIxYjFlNDU5ZGJiMDE0NGU5NDQ2ZCIsIm5iZiI6MTcyMTg4NDg3MC43MTc2NjEsInN1YiI6IjY2YTA3OWNmMWM2MjY4NTFjOTQwMzc3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k-RiiY4LkGhSCBdLxMDJxftQTCmjxELex95tigoYNfk",
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setTopRated(response?.data?.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
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

  const getdata = (num) => {
    // console.log("num", num);
    dispatch(getData(num));
  };

  const handleMore = (topRated) => {
    // console.log("trending", trending);
    dispatch(getMore(topRated));
  };

  return (
    <div className="container">
      <div>
        <h1 style={{ marginTop: 30, color: "white", fontFamily: "fantasy" }}>
          Top Rated
        </h1>
        <Link to="/movieall">
          <div className="button">
            <h6
              type="button"
              onClick={() => handleMore(topRated)}
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
      <div className="container" style={{ marginTop: 20 }}>
        <Carousel responsive={responsive}>
          {topRated?.map((num) => (
            <div class="card" onClick={() => getdata(num)}>
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
                <h5 class="card-title NavLink " style={{ marginTop: 20 }}>
                  {num?.original_name}
                </h5>
                <h6 class="card-title">{num?.first_air_date}</h6>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TopRatted;

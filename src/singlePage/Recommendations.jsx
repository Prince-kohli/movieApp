import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-multi-carousel/lib/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Carousel from "react-multi-carousel";
import "react-circular-progressbar/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/UrlSlice";
import { Link } from "react-router-dom";
const Recommendations = () => {
  const [recomend, setRecomend] = useState([]);
  // console.log("rec", recomend);
  const dispatch = useDispatch();
  const url = useSelector((state) => state.url.url);
  const data = useSelector((state) => state.url.data);
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${data.id}/recommendations`,
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmFhZjNkOGQ0MjIxYjFlNDU5ZGJiMDE0NGU5NDQ2ZCIsIm5iZiI6MTcyMjIyNzEyOS4yMzU3ODUsInN1YiI6IjY2YTA3OWNmMWM2MjY4NTFjOTQwMzc3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1IOBABlORL1Ouu-jRkyZ1wxsDgISFKgVZI-j5FZFfuw",
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        // console.log("recomd", response.data);
        setRecomend(response?.data?.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const options1 = {
    method: "GET",
    url: `https://api.themoviedb.org/3/tv/${data.id}/recommendations`,
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmFhZjNkOGQ0MjIxYjFlNDU5ZGJiMDE0NGU5NDQ2ZCIsIm5iZiI6MTcyMjQxMTI3Ni4zNzUyNTQsInN1YiI6IjY2YTA3OWNmMWM2MjY4NTFjOTQwMzc3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R66cgEuUFr_EbRgCphQ79rXkb6UbMCp4sUzZFwTyrzs",
    },
  };
  useEffect(() => {
    axios
      .request(options1)
      .then(function (response) {
        // console.log("resp", response.data);
        setRecomend(response.data.results);
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
  return (
    <div>
      <div className="container">
        <h1 style={{ marginTop: 30, color: "white", fontFamily: "fantasy" }}>
          Recommendations
        </h1>
      </div>
      <div className="container" style={{ marginTop: 20 }}>
        <Carousel responsive={responsive}>
          {recomend?.map((num) => (
            <div class="card" onClick={() => getdata(num)}>
              <Link to="/singlemoviedata">
                {!num?.poster_path ? (
                  <img
                    src="https://movix-peach-ten.vercel.app/assets/no-poster-DjFr0uax.png"
                    class="card-img-top"
                    alt="..."
                    height={300}
                  />
                ) : (
                  <img
                    src={url.backdrop + num?.poster_path}
                    class="card-img-top"
                    alt="..."
                    height={300}
                  />
                )}
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
                  <h5 class="card-title nav-link" style={{ marginTop: 20 }}>
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
    </div>
  );
};

export default Recommendations;

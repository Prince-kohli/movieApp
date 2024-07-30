import React, { useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { getData } from "../store/UrlSlice";

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const url = useSelector((state) => state.url.url);
  const [pageNumber, setPageNumber] = useState(1);

  const dispatch = useDispatch();
  console.log("movi", movie);

  const loadMore = () => {
    setPageNumber(pageNumber + 1);
  };
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=0baaf3d8d4221b1e459dbb0144e9446d&page=${pageNumber}`,
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      // page: pageNumber,
      sort_by: "popularity.desc",
    },
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
        console.log("res", response.data);
        setMovie([...movie, response.data.results]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [pageNumber]);

  return (
    <div>
      <NavBar />
      <div className="container" style={{ marginTop: 100 }}>
        {movie[pageNumber]?.map((num, i) => (
          <div class="card card2" key={i}>
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
                  text={num?.vote_average}
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
      </div>
      <button onClick={loadMore} style={{ marginTop: 500 }}>
        Load More
      </button>
      s
    </div>
  );
};

export default Movies;

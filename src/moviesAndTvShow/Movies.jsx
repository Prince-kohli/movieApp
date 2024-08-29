import React, { useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { getData } from "../store/UrlSlice";
import Footer from "../component/Footer";
const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [genre, setgenre] = useState([]);
  const [moviegenre, setMovieGenre] = useState([]);
  const url = useSelector((state) => state.url.url);
  const [pageNumber, setPageNumber] = useState(1);

  const dispatch = useDispatch();
  console.log("movi", movie);
  console.log("genre", genre);

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
      sort_by: genre,
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
        setMovie((prev) => [...prev, ...response?.data.results]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [pageNumber]);

  const getdata = (num) => {
    // console.log("num", num);
    dispatch(getData(num));
  };

  const options1 = {
    method: "GET",
    url: `https://api.themoviedb.org/3/genre/movie/list`,
    params: { language: "en" },
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
        // console.log(response.data);
        setgenre(response.data.genres);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const action = () => {
    const id = movie.filter((num) => num.genre_ids[0] === 28);

    setMovieGenre(id);
  };

  const adventure = () => {
    const id = movie.filter((num) => num.genre_ids[0] === 12);
    setMovieGenre(id);
  };
  const animation = () => {
    const id = movie.filter((num) => num.genre_ids[0] === 16);
    setMovieGenre(id);
  };
  const comedy = () => {
    const id = movie.filter((num) => num.genre_ids[0] === 35);
    setMovieGenre(id);
  };
  const Crime = () => {
    const id = movie.filter((num) => num.genre_ids[0] === 80);
    setMovieGenre(id);
  };
  const documentary = () => {
    const id = movie.filter((num) => num.genre_ids[0] === 99);
    setMovieGenre(id);
  };
  const family = () => {
    const id = movie.filter((num) => num.genre_ids[0] === 10751);
    setMovieGenre(id);
  };
  const history = () => {
    const id = movie.filter((num) => num.genre_ids[0] === 36);
    setMovieGenre(id);
  };
  const horro = () => {
    const id = movie.filter((num) => num.genre_ids[0] === 26);
    setMovieGenre(id);
  };
  const sciencefiction = () => {
    const id = movie.filter((num) => num.genre_ids[0] === 26);
    setMovieGenre(id);
  };
  const war = () => {
    const id = movie.filter((num) => num.genre_ids[0] === 10752);
    setMovieGenre(id);
  };
  const thriller = () => {
    const id = movie.filter((num) => num.genre_ids[0] === 53);
    setMovieGenre(id);
  };
  const mystery = () => {
    const id = movie.filter((num) => num.genre_ids[0] === 9648);
    setMovieGenre(id);
  };

  return (
    <div>
      <NavBar />
      <div className="container" style={{ marginTop: 100 }}>
        <div className="row">
          <div className="col-sm-6" style={{ color: "white" }}></div>
          <div className="col-sm-6">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filter Movies
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" onClick={action}>
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" onClick={adventure}>
                    adventure
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" onClick={animation}>
                    animation
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" onClick={comedy}>
                    Comedy
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" onClick={Crime}>
                    Crime
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" onClick={documentary}>
                    Documentary
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" onClick={family}>
                    family
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" onClick={history}>
                    History
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" onClick={horro}>
                    Horro
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" onClick={sciencefiction}>
                    Science Fiction
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" onClick={war}>
                    War
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" onClick={thriller}>
                    Thriller
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" onClick={mystery}>
                    Mystery
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container cards" style={{ marginTop: 20 }}>
        {moviegenre.length === 0
          ? movie?.map((num) => (
              <div class="card card2" onClick={() => getdata(num)}>
                <Link to="/singlemoviedata">
                  {!num?.poster_path ? (
                    <img
                      src="https://movix-peach-ten.vercel.app/assets/no-poster-DjFr0uax.png"
                      class="card-img-top"
                      alt="..."
                      style={{ height: 300 }}
                    />
                  ) : (
                    <img
                      src={url.backdrop + num?.poster_path}
                      class="card-img-top"
                      alt="..."
                      style={{ height: 300 }}
                    />
                  )}
                </Link>
                <div class="card">
                  <div
                    className="circleRating"
                    style={{ height: 30, width: 50 }}
                  >
                    <CircularProgressbar
                      value={num?.vote_average}
                      maxValue={10}
                      text={num?.vote_average?.toFixed(1)}
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
            ))
          : moviegenre?.map((num) => (
              <div class="card card2" onClick={() => getdata(num)}>
                <Link to="/singlemoviedata">
                  <img
                    src={url.backdrop + num?.poster_path}
                    class="card-img-top"
                    alt="..."
                    style={{ height: 300 }}
                  />
                </Link>
                <div class="card">
                  <div
                    className="circleRating"
                    style={{ height: 30, width: 50 }}
                  >
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

      <div class="container vertical" style={{ marginTop: 50 }}>
        <div className="vertical">
          <div class="vertical-center">
            <button type="button" class="btn btn-danger" onClick={loadMore}>
              Load More
            </button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 250 }}></div>
      <Footer />
    </div>
  );
};

export default Movies;

import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getData, getMore } from "../store/UrlSlice";
const NavBar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [search, setSearch] = useState();
  const [movieData, setMovieData] = useState([]);
  const url = useSelector((state) => state.url.url);
  const dispatch = useDispatch();
  console.log("movie", movieData);
  console.log("sr", search);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/multi?query=${search}&api_key=0baaf3d8d4221b1e459dbb0144e9446d`,
    params: { include_adult: "false", language: "en-US", page: "1" },
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
        console.log("search", response?.data?.results);
        setMovieData(response?.data?.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [search]);
  const handleOnChange = (e) => {
    const data = e.target.value;
    setSearch(data);
  };

  const get = (num) => {
    // console.log("num", num);
    dispatch(getData(num));
  };
  const handleMore = (movieData) => {
    // console.log("trending", trending);
    dispatch(getMore(movieData));
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg ">
        <div class="container">
          <Link class="navbar-brand" to="/" style={{ color: "white" }}>
            <img
              src="https://movix-peach-ten.vercel.app/assets/movix-logo-dOW-bAAW.svg"
              height={70}
              width={190}
            />
          </Link>
          <button
            class=" custom-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
            style={{ backgroundColor: "white" }}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/movies"
                  style={{ color: "white", marginLeft: 10 }}
                >
                  Movies
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  to="/tvshows"
                  style={{ color: "white", marginLeft: 5 }}
                >
                  TvShows
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  to="/webseries"
                  style={{ color: "white", marginLeft: 5 }}
                >
                  WebSeries
                </Link>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ marginLeft: 15 }}
                value={search}
                onChange={handleOnChange}
              />
            </form>
            <p class="" type="submit" style={{ marginLeft: 25 }}></p>

            <button
              type="button"
              class="btn btn-light"
              style={{ marginLeft: 80 }}
            >
              Login
            </button>
          </div>
        </div>

        {search?.length === undefined ? null : (
          <div className="searchBox">
            {movieData?.slice(0, 3)?.map((num) => (
              <div className="card card3 mb-3">
                <div className="row g-0">
                  <div className="col-md-4" onClick={() => get(num)}>
                    <Link to="/singlemoviedata">
                      {!num?.poster_path ? (
                        <img
                          src="https://movix-peach-ten.vercel.app/assets/no-poster-DjFr0uax.png"
                          class="card-img-top"
                          alt="..."
                        />
                      ) : (
                        <img
                          src={url.backdrop + num?.poster_path}
                          class="card-img-top"
                          alt="..."
                        />
                      )}
                    </Link>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      {!num?.original_title ? (
                        <h5 class="card-title nav-link">
                          {num?.original_name}
                        </h5>
                      ) : (
                        <h5 class="card-title">{num?.original_title}</h5>
                      )}
                      <p className="card-text">
                        <button
                          className="btn btn-warning"
                          style={{ fontSize: 12 }}
                        >
                          Release Date{" "}
                        </button>{" "}
                        {!num?.release_date
                          ? num?.first_air_date
                          : num?.release_date}
                      </p>
                    </div>
                  </div>
                  <div className="shiw">
                    {" "}
                    <Link to="/movieall">
                      <button
                        className="load btn btn-link"
                        onClick={() => handleMore(movieData)}
                      >
                        Load More...
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;

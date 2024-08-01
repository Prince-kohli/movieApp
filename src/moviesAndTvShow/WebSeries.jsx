import React, { useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { getData } from "../store/UrlSlice";
import ReactPaginate from "react-paginate";
import Footer from "../component/Footer";

const WebSeries = () => {
  const [web, setWeb] = useState([]);
  const [shows, setShows] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [genre, setgenre] = useState([]);
  const [page, setpage] = useState(1);
  const url = useSelector((state) => state.url.url);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  // console.log(data);

  const totalPageNo = data.total_pages;
  console.log("page", page);

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/discover/tv?api_key=0baaf3d8d4221b1e459dbb0144e9446d&page=${page}`,
    params: {
      include_adult: "false",
      include_null_first_air_dates: "false",
      language: "en-US",
      // page: "1",
      sort_by: "popularity.desc",
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmFhZjNkOGQ0MjIxYjFlNDU5ZGJiMDE0NGU5NDQ2ZCIsIm5iZiI6MTcyMjQxMTI3Ni4zNzUyNTQsInN1YiI6IjY2YTA3OWNmMWM2MjY4NTFjOTQwMzc3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R66cgEuUFr_EbRgCphQ79rXkb6UbMCp4sUzZFwTyrzs",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log("wev", response.data);
        setWeb(response.data.results);
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [page]);
  const getdata = (num) => {
    dispatch(getData(num));
  };
  const itemsPerPage = 20;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = web.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(web.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setpage(selected + 1);
  };

  const options1 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/genre/tv/list",
    params: { language: "en" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmFhZjNkOGQ0MjIxYjFlNDU5ZGJiMDE0NGU5NDQ2ZCIsIm5iZiI6MTcyMjQ5OTQyMS4yOTM1MjksInN1YiI6IjY2YTA3OWNmMWM2MjY4NTFjOTQwMzc3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tpi_Du61YRwflfK5fVTjazHEGNk6mKqVUNXbObm-HsA",
    },
  };

  useEffect(() => {
    axios
      .request(options1)
      .then(function (response) {
        console.log(response.data);
        setgenre(response?.data?.genres);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  const action = () => {
    const id = web?.filter((num) => num.genre_ids[0] === 10759);

    setShows(id);
  };
  const animation = () => {
    const id = web?.filter((num) => num.genre_ids[0] === 16);

    setShows(id);
  };
  const comedy = () => {
    const id = web?.filter((num) => num.genre_ids[0] === 35);

    setShows(id);
  };
  const crime = () => {
    const id = web?.filter((num) => num.genre_ids[0] === 80);

    setShows(id);
  };
  const documentary = () => {
    const id = web?.filter((num) => num.genre_ids[0] === 99);

    setShows(id);
  };
  const family = () => {
    const id = web?.filter((num) => num.genre_ids[0] === 10751);

    setShows(id);
  };
  const kids = () => {
    const id = web?.filter((num) => num.genre_ids[0] === 10762);

    setShows(id);
  };
  const mystery = () => {
    const id = web?.filter((num) => num.genre_ids[0] === 9648);

    setShows(id);
  };
  const news = () => {
    const id = web?.filter((num) => num.genre_ids[0] === 10763);

    setShows(id);
  };
  const reality = () => {
    const id = web?.filter((num) => num.genre_ids[0] === 10764);

    setShows(id);
  };
  const soap = () => {
    const id = web?.filter((num) => num.genre_ids[0] === 10766);

    setShows(id);
  };
  const talk = () => {
    const id = web?.filter((num) => num.genre_ids[0] === 10767);

    setShows(id);
  };
  const war = () => {
    const id = web?.filter((num) => num.genre_ids[0] === 10768);

    setShows(id);
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
                Filter TvShows
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" onClick={action}>
                    Action & Adventure
                  </a>
                </li>

                <li>
                  <a class="dropdown-item" onClick={animation}>
                    Animation
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" onClick={comedy}>
                    Comedy
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" onClick={crime}>
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
                    Family
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" onClick={kids}>
                    Kids
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" onClick={news}>
                    News
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" onClick={reality}>
                    Reality
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" onClick={soap}>
                    Soap
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" onClick={talk}>
                    Talk
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" onClick={mystery}>
                    Mystery
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" onClick={war}>
                    War & Politics
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container cards" style={{ marginTop: 10 }}>
        {shows.length === 0
          ? web?.map((num, i) => (
              <div class="card card2" key={i} onClick={() => getdata(num)}>
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
            ))
          : shows?.map((num, i) => (
              <div class="card card2" key={i} onClick={() => getdata(num)}>
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

        <div className="page" style={{ marginTop: 30 }}>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={totalPageNo}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WebSeries;

import React, { useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/UrlSlice";

// import ReactPaginate from "react-paginate";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  // const [data, setdata] = useState();
  // const [pageNo, setPageNo] = useState(1);

  const url = useSelector((state) => state.url.url);

  console.log("more", movies);
  const dispatch = useDispatch();
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: "1",
      sort_by: "popularity.desc",
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmFhZjNkOGQ0MjIxYjFlNDU5ZGJiMDE0NGU5NDQ2ZCIsIm5iZiI6MTcyMTk3MTEyNy45MTAzMzYsInN1YiI6IjY2YTA3OWNmMWM2MjY4NTFjOTQwMzc3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i66ZJw7KZDUdrgXvjhEI1T7KCYFuZ4b46f0T0pOk9QI",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log("movie", response.data);
        setMovies(response?.data?.results);
        // setdata(response?.data?.total_pages);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const getdata = (num) => {
    // console.log("num", num);
    dispatch(getData(num));
  };
  // const handlePageChange = (selectedPage) => {
  //   setPageNo(selectedPage.selected + 1);
  // };
  <div>
    <NavBar />

    <div className="container" style={{ marginTop: 100 }}>
      {movies?.map((num) => (
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
    </div>
    {/* <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      breakLabel={"..."}
      pageCount={data}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageChange}
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
    /> */}
    <Footer />
  </div>;
};

export default Movies;

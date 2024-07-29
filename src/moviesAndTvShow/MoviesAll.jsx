import React from "react";
import NavBar from "../component/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { getData } from "../store/UrlSlice";
const MoviesAll = () => {
  const more = useSelector((state) => state.url.more);
  const url = useSelector((state) => state.url.url);
  console.log("more", more);
  const dispatch = useDispatch();

  const getdata = (num) => {
    dispatch(getData(num));
  };
  return (
    <div>
      <NavBar />
      <div className="container" style={{ marginTop: 100 }}>
        {more?.map((num) => (
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
      <Footer />
    </div>
  );
};

export default MoviesAll;

import React, { useEffect } from "react";
import Home from "./Home.js/Home";
import MoviesAll from "./moviesAndTvShow/MoviesAll";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUrl } from "./store/UrlSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./moviesAndTvShow/Movies";
import SinglePage from "./singlePage/SinglePage";
import TvShows from "./moviesAndTvShow/TvShows";
import WebSeries from "./moviesAndTvShow/WebSeries";
function App() {
  const dispatch = useDispatch();
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/configuration",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmFhZjNkOGQ0MjIxYjFlNDU5ZGJiMDE0NGU5NDQ2ZCIsIm5iZiI6MTcyMTc5NDI2MC4zMzE3LCJzdWIiOiI2NmEwNzljZjFjNjI2ODUxYzk0MDM3NzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VkCXwVscuf88M_XqxLBj0xFY5LNZxKFQQTuwdc3OPPo",
    },
  };

  const fetchConfig = () => {
    axios
      .request(options)
      .then(function (response) {
        // console.log("url data", response.data);

        const url = {
          backdrop: response.data.images.secure_base_url + "original",
          size: response.data.images.backdrop_sizes,
        };
        dispatch(getUrl(url));
      })

      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchConfig();
  });
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/singlemoviedata" element={<SinglePage />} />
          <Route path="/movieall" element={<MoviesAll />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/webseries" element={<WebSeries />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

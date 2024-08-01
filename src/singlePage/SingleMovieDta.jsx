import React, { useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import { useSelector } from "react-redux";
import axios from "axios";
import YouTube from "react-youtube";

const SingleMovieDta = () => {
  const data = useSelector((state) => state.url.data);
  const url = useSelector((state) => state.url.url);
  const [video, setVideo] = useState([]);
  const [tvVideo, setTvVideo] = useState([]);
  const [show, setShow] = useState(false);
  console.log("url", data);
  console.log("video", video.key);

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${data.id}/videos`,
    params: { language: "en-US" },
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
        console.log("MOVIE", response.data);
        setVideo(...response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [data]);

  const options1 = {
    method: "GET",
    url: `https://api.themoviedb.org/3/tv/${data.id}/videos`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmFhZjNkOGQ0MjIxYjFlNDU5ZGJiMDE0NGU5NDQ2ZCIsIm5iZiI6MTcyMjQ5OTQyMS4yOTM1MjksInN1YiI6IjY2YTA3OWNmMWM2MjY4NTFjOTQwMzc3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tpi_Du61YRwflfK5fVTjazHEGNk6mKqVUNXbObm-HsA",
    },
  };

  axios
    .request(options1)
    .then(function (response) {
      console.log("tv", response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  return (
    <div>
      <NavBar />

      <div className="image">
        <img className="img" src={url.backdrop + data?.backdrop_path} />
      </div>

      <div className="container ">
        <div className="card1">
          <div class="mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={url.backdrop + data.poster_path}
                  class="img-fluid rounded-start"
                  alt="..."
                  style={{ height: 400, alignItems: "center" }}
                />
              </div>
              <div class="col-md-8 cardbody">
                <div class="card-body ">
                  {!data?.original_title ? (
                    <h5 class="card-title" style={{ fontSize: "large" }}>
                      {data?.original_name}
                    </h5>
                  ) : (
                    <h5 class="card-title">{data?.original_title}</h5>
                  )}

                  <p class="card-text" style={{ marginTop: 30 }}>
                    {data?.overview}
                  </p>
                  {!data?.release_date ? (
                    <h5 class="card-title">
                      Release Date {data?.first_air_date}
                    </h5>
                  ) : (
                    <h5 class="card-title">
                      {" "}
                      Release Date {data?.release_date}
                    </h5>
                  )}

                  <button
                    className="btn btn-primary"
                    onClick={() => setShow(true)}
                  >
                    Watch Trailer
                  </button>

                  <div className="youtube">
                    {show == true ? (
                      <button onClick={() => setShow(false)}>close</button>
                    ) : null}
                    {show === true ? <YouTube videoId={video.key} /> : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovieDta;

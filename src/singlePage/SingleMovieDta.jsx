import React, { useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import { useSelector } from "react-redux";
import axios from "axios";

const SingleMovieDta = () => {
  const data = useSelector((state) => state.url.data);
  const url = useSelector((state) => state.url.url);
  const [video, setVideo] = useState([]);
  const [datas, setDatas] = useState([]);

  const [show, setShow] = useState(false);
  console.log("url", video?.key);
  console.log("data", data);

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
        // console.log("MOVIE", response.data);
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
  useEffect(() => {
    axios
      .request(options1)
      .then(function (response) {
        console.log("tv", response.data);
        setVideo(...response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [data]);

  const options3 = {
    method: "GET",
    url: `https://api.themoviedb.org/3/find/${data.id}`,
    params: { external_source: "" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmFhZjNkOGQ0MjIxYjFlNDU5ZGJiMDE0NGU5NDQ2ZCIsIm5iZiI6MTcyMjg1NzQyNy45MjYwNDEsInN1YiI6IjY2YTA3OWNmMWM2MjY4NTFjOTQwMzc3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._OH_oNYb8mtaoGJEVF5jDJ4ne7hQW7r0RGKbeCuO8aM",
    },
  };
  useEffect(() => {
    axios
      .request(options3)
      .then(function (response) {
        console.log("find", response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [data]);

  return (
    <div>
      <NavBar />

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledackdby="staticBropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                {!data?.original_title ? (
                  <h5 class="card-title" style={{ fontSize: "large" }}>
                    {data?.original_name}
                  </h5>
                ) : (
                  <h5 class="card-title">{data?.original_title}</h5>
                )}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <iframe
              src={"https://www.youtube.com/embed/" + video?.key}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

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
                      Release Date {data?.release_date}
                    </h5>
                  )}
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Watch Trailer
                  </button>

                  <div className="youtube">
                    {show == true && (
                      <i
                        class="close fa-solid fa-xmark"
                        onClick={() => setShow(false)}
                      ></i>
                    )}
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

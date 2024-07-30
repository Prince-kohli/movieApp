import React from "react";
import NavBar from "../component/NavBar";
import { useSelector } from "react-redux";

const SingleMovieDta = () => {
  const data = useSelector((state) => state.url.data);
  const url = useSelector((state) => state.url.url);
  console.log("url", url.backdrop);
  console.log("data", data);

  return (
    <div>
      <NavBar />

      <div className="   image">
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

                  <button
                    type="button"
                    class="btn btn-primary"
                    style={{ marginTop: 20 }}
                  >
                    Watch Trailer
                  </button>
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

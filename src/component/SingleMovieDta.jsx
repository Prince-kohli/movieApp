import React from "react";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";

const SingleMovieDta = () => {
  const data = useSelector((state) => state.url.data);
  const url = useSelector((state) => state.url.url);
  console.log("url", url.backdrop);
  console.log("data", data);

  return (
    <div>
      <NavBar />

      <div className="image">
        <img className="img" src={url.backdrop + data?.backdrop_path} />
      </div>

      <div className="container card1">
        <div class="mb-3" style={{ width: 540, height: 300 }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src={url.backdrop + data.poster_path}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8 cardbody" style={{ paddingLeft: 15 }}>
              <div class="card-body">
                <h5 class="card-title">{data?.original_name}</h5>
                <p class="card-text" style={{ marginTop: 5 }}>
                  {data.overview}
                </p>
                <p class="card-text">{data.first_air_date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovieDta;

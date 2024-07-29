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
                {!data?.original_title ? (
                  <h5 class="card-title nav-link" style={{ marginTop: 20 }}>
                    {data?.original_name}
                  </h5>
                ) : (
                  <h5 class="card-title" style={{ marginTop: 20 }}>
                    {data?.original_title}
                  </h5>
                )}
                <p class="card-text" style={{ marginTop: 5 }}>
                  {data?.overview}
                </p>
                {!data?.release_date ? (
                  <h5 class="card-title">{data?.first_air_date}</h5>
                ) : (
                  <h5 class="card-title">{data?.release_date}</h5>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovieDta;

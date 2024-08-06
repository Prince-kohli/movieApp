import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { getData } from "../store/UrlSlice";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  const [upcoming, setUpcoming] = useState([]);
  console.log("data", upcoming);
  const url = useSelector((state) => state.url.url);
  // console.log("url", url.backdrop);
  const dispatch = useDispatch();
  const img = upcoming.map((num) => url.backdrop + num?.poster_path);

  const title = upcoming.map((num) => num?.title);
  const date = upcoming.map((num) => num?.release_date);
  const overView = upcoming.map((num) => num?.overview);
  // console.log("overview", overView);

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/upcoming",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmFhZjNkOGQ0MjIxYjFlNDU5ZGJiMDE0NGU5NDQ2ZCIsIm5iZiI6MTcyMTc5NDI2MC4zMzE3LCJzdWIiOiI2NmEwNzljZjFjNjI2ODUxYzk0MDM3NzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VkCXwVscuf88M_XqxLBj0xFY5LNZxKFQQTuwdc3OPPo",
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setUpcoming(response?.data?.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const getdata = (num) => {
    // console.log("num", num);
    dispatch(getData(num));
  };

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          767: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {upcoming?.map((num, i) => (
          <SwiperSlide key={i}>
            <div className="carousal" key={i}>
              <img
                className="img"
                src={url.backdrop + num?.backdrop_path}
                class="d-block w-100"
                alt="..."
              />
              <div className="container title">
                <h1 style={{ textAlign: "left" }}>{num?.original_title}</h1>
                <h3 style={{ textAlign: "left" }}>
                  Release date {num?.release_date}
                </h3>
                <p style={{ textAlign: "left" }}>
                  {num?.overview?.substring(0, 150)}......
                </p>
                <Link to="/singlemoviedata">
                  <button class="btn btn-primary" onClick={() => getdata(num)}>
                    Watch Trailer
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <>
          <div class="carousel-inner">
            <div class="carousel-item active" style={{ height: 650 }}>
              <img
                className="img"
                src={img[1]}
                class="d-block w-100"
                alt="..."
              />
              <div className="container title">
                <h1>{title[1]}</h1>
                <h3>Release date {date[1]}</h3>
                <p>{overView[1]}</p>
              </div>
            </div>
            <div class="carousel-item" style={{ height: 650 }}>
              <img
                className="img"
                src={img[2]}
                class="d-block w-100"
                alt="..."
              />
              <div className="container title">
                <h1>{title[2]}</h1>
                <h3>Release date {date[2]}</h3>
                <p>{overView[2]}</p>
              </div>
            </div>
            <div class="carousel-item" style={{ height: 650 }}>
              <img
                className="img"
                src={img[3]}
                class="d-block w-100"
                alt="..."
              />
              <div className="container title">
                <h1>{title[3]}</h1>
                <h3>Release date {date[3]}</h3>
                <p>{overView[3]}</p>
              </div>
            </div>
            <div class="carousel-item" style={{ height: 650 }}>
              <img
                className="img"
                src={img[5]}
                class="d-block w-100"
                alt="..."
              />
              <div className="container title">
                <h1>{title[5]}</h1>
                <h3>Release date {date[5]}</h3>
                <p>{overView[5]}</p>
              </div>
            </div>
            <div class="carousel-item" style={{ height: 650 }}>
              <img
                className="img"
                src={img[6]}
                class="d-block w-100"
                alt="..."
              />
              <div className="container title">
                <h1>{title[6]}</h1>
                <h3>Release date {date[6]}</h3>
                <p>{overView[6]}</p>
              </div>
            </div>
            <div class="carousel-item" style={{ height: 650 }}>
              <img
                className="img"
                src={img[7]}
                class="d-block w-100"
                alt="..."
              />
              <div className="container title">
                <h1>{title[7]}</h1>
                <h3>Release date {date[7]}</h3>
                <p>{overView[7]}</p>
              </div>
            </div>
            <div class="carousel-item" style={{ height: 650 }}>
              <img
                className="img"
                src={img[9]}
                class="d-block w-100"
                alt="..."
              />
              <div className="container title">
                <h1>{title[9]}</h1>
                <h3>Release date {date[9]}</h3>
                <p>{overView[9]}</p>
              </div>
            </div>
            <div class="carousel-item" style={{ height: 650 }}>
              <img
                className="img"
                src={img[10]}
                class="d-block w-100"
                alt="..."
              />
              <div className="container title">
                <h1>{title[10]}</h1>
                <h3>Release date {date[10]}</h3>
                <p>{overView[10]}</p>
              </div>
            </div>
            <div class="carousel-item" style={{ height: 650 }}>
              <img
                className="img"
                src={img[11]}
                class="d-block w-100"
                alt="..."
              />
              <div className="container title">
                <h1>{title[11]}</h1>
                <h3>Release date {date[11]}</h3>
                <p>{overView[11]}</p>
              </div>
            </div>
          </div>
        </>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> */}
    </div>
  );
};

export default Banner;

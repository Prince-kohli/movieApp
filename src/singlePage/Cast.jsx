import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
const Cast = () => {
  const [cast, setCast] = useState([]);
  // console.log("cast", cast);
  const data = useSelector((state) => state.url.data);
  const url = useSelector((state) => state.url.url);

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${data.id}/credits`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmFhZjNkOGQ0MjIxYjFlNDU5ZGJiMDE0NGU5NDQ2ZCIsIm5iZiI6MTcyMjIyNzEyOS4yMzU3ODUsInN1YiI6IjY2YTA3OWNmMWM2MjY4NTFjOTQwMzc3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1IOBABlORL1Ouu-jRkyZ1wxsDgISFKgVZI-j5FZFfuw",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        // console.log("cast", response.data);
        setCast(response?.data?.cast);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const options1 = {
    method: "GET",
    url: `https://api.themoviedb.org/3/tv/${data.id}/credits`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmFhZjNkOGQ0MjIxYjFlNDU5ZGJiMDE0NGU5NDQ2ZCIsIm5iZiI6MTcyMjQxMTI3Ni4zNzUyNTQsInN1YiI6IjY2YTA3OWNmMWM2MjY4NTFjOTQwMzc3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R66cgEuUFr_EbRgCphQ79rXkb6UbMCp4sUzZFwTyrzs",
    },
  };
  useEffect(() => {
    axios
      .request(options1)
      .then(function (response) {
        // console.log(response.data);
        setCast(response?.data?.cast);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div className="" style={{ marginTop: 10, textAlign: "center" }}>
      <h1 style={{ color: "white" }}>Top Cast</h1>

      <div className="sponsor-action section-bg">
        <div className="">
          <div className="section-wrapper">
            <div className="sponsoer-slider">
              <Swiper
                slidesPerView={2}
                spaceBetween={20}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {cast?.map((num, i) => (
                  <SwiperSlide key={i}>
                    <div className="cricle">
                      {num?.profile_path !== null ? (
                        <img
                          className="cast"
                          src={url?.backdrop + num?.profile_path}
                          alt="Avatar"
                        />
                      ) : (
                        <img
                          className="cast"
                          src="https://www.w3schools.com/howto/img_avatar.png"
                          alt="Avatar"
                        />
                      )}
                    </div>
                    <div className="castName">
                      <h6>{num?.character}</h6>
                      <h6>{num?.original_name}</h6>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cast;

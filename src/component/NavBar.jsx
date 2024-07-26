import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg ">
        <div class="container">
          <Link class="navbar-brand" to="/" style={{ color: "white" }}>
            <img
              src="https://movix-peach-ten.vercel.app/assets/movix-logo-dOW-bAAW.svg"
              height={80}
              width={100}
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: "white" }}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/movies"
                  style={{ color: "white", fontSize: 25, marginLeft: 10 }}
                >
                  Movies
                </Link>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  style={{ color: "white", fontSize: 25, marginLeft: 10 }}
                >
                  Tv Shows
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  style={{ color: "white", fontSize: 25, marginLeft: 10 }}
                >
                  Upcoming
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

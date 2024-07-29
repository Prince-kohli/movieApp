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
              height={70}
              width={190}
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
                  style={{ color: "white", fontSize: 20, marginLeft: 10 }}
                >
                  Movies
                </Link>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  style={{ color: "white", fontSize: 20, marginLeft: 10 }}
                >
                  Tv Shows
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  style={{ color: "white", fontSize: 20, marginLeft: 10 }}
                >
                  Upcoming
                </a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ marginLeft: 15, width: 450 }}
              />
            </form>
            <button
              class="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              style={{ marginLeft: 5 }}
            >
              Search
            </button>

            <button
              type="button"
              class="btn btn-light"
              style={{ marginLeft: 10 }}
            >
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

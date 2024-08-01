import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
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
            class=" custom-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
            style={{ backgroundColor: "white" }}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/movies"
                  style={{ color: "white", marginLeft: 10 }}
                >
                  Movies
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  to="/tvshows"
                  style={{ color: "white", marginLeft: 5 }}
                >
                  TvShows
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  to="/webseries"
                  style={{ color: "white", marginLeft: 5 }}
                >
                  WebSeries
                </Link>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ marginLeft: 15 }}
              />
            </form>
            <button
              class="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              style={{ marginLeft: 25 }}
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

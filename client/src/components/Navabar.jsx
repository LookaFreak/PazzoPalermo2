import React, { useEffect, useState } from "react";
import logo from "../assets/logos.png";
import { categories } from "../data/data";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Navabar = () => {
  const navigate = useNavigate();
  const [data, Setdata] = useState(false);
  // const data = useSelector((state) => state.user);
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/login");
    window.location.reload();
  };

  const token = localStorage.getItem("token");

  return (
    <nav className="navbar navbar-expand-xl  bg-white  py-2 fixed-top shadow">
      <div className="container">
        {/* logo */}
        <a href="/" className="navbar-brand fs-4">
          <img
            width="60px"
            height="60px"
            className="d-inline-block align-top"
            src={logo}
            alt=""
          />
        </a>
        {/* toggle buttons */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarLight"
          aria-controls="navbarLight"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {!token ? (
          <div className="collapse navbar-collapse " id="navbarLight">
            {/* search bar */}
            <form
              class="d-flex form-inline my-2 my-lg-1 search-bar"
              style={{ marginLeft: "20rem" }}
            >
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-primary my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
            <ul className="navbar-nav ms-auto mb-2 mb-xl-0   p-2 text-center">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul class="dropdown-menu">
                  {categories.map((item) => (
                    <li>
                      <a class="dropdown-item" href={item.link}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item">
                <a
                  href="./register"
                  className="nav-link active"
                  style={{ color: "#333" }}
                  aria-current="page"
                >
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="./login"
                  className="nav-link active"
                  style={{ color: "#333" }}
                  aria-current="page"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="collapse navbar-collapse " id="navbarLight">
            {/* search bar */}
            <form
              class="d-flex form-inline my-2 my-lg-1 search-bar"
              style={{ marginLeft: "20rem" }}
            >
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-primary my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
            <ul className="navbar-nav ms-auto mb-2 mb-xl-0   p-2 text-center">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul class="dropdown-menu">
                  {categories.map((item) => (
                    <li>
                      <a class="dropdown-item" href={item.link}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item">
                <a
                  onClick={() => navigate("/create-blogs")}
                  className="nav-link active"
                  aria-current="page"
                >
                  Create Blogs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  onClick={handleLogout}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        )}

        {/* sidebar */}
      </div>
    </nav>
  );
};

export default Navabar;

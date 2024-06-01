import React from "react";
import Navabar from "../components/Navabar";
import home1 from "../assets/home1.jpg";
import { heredata } from "../data/data";
import Banner from "../components/Banner";
import BlogsPost from "../components/BlogsPost";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navabar />
      {/* Hero sections */}
      {/* <div style={{ height: "100vh", width: "100vw" }}> */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        style={{ width: "100%", height: "100%" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {heredata.map((data) => (
            <div className={`carousel-item  ${data.id == 1 ? "active" : ""}`}>
              <img
                src={data.image}
                className="w-100 d-block"
                style={{ height: "100%", objectFit: "cover" }}
                alt="..."
              />
              <div className="carousel-caption ">
                <h5 className="animated bounceInRight">First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Banner />
      <BlogsPost />
      <Footer />
      {/* </div> */}
    </>
  );
};

export default Home;

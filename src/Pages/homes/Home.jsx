import React from "react";
import Profile from "../../assets/home5.jpeg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Esteban Cabrera.</span> Systems Engineer
          </h1>

          <p className="home__description">
            An honest, responsible young man, capable of working in a team,
            skilled administrator of several computer programs, willing to
            acquire new knowledge and contribute to the growth of the company of
            which he is a part.
          </p>

          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;

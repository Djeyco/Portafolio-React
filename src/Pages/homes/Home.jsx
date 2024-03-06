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
            <span>Soy Esteban Cabrera.</span> Ingeniero en Sistemas
          </h1>

          <p className="home__description">
            Soy un joven honesto y responsable con enfoque en el desarrollo de
            sistemas. Aunque mi experiencia es moderada, he demostrado
            habilidades sólidas como administrador de programas informáticos,
            destacándome en el uso de lenguajes como JavaScript, HTML, CSS y C#.
            Además, cuento con experiencia en el desarrollo con WordPress. Mi
            disposición para aprender y mi sólido entendimiento en el desarrollo
            de sistemas me permiten contribuir al crecimiento de la empresa de
            manera efectiva.
          </p>

          <Link to="/about" className="button">
            Más sobre mí{" "}
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

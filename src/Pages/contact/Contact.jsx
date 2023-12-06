import React from 'react';

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

import { FiSend } from 'react-icons/fi';

import "./contact.css"

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
      Ponte en <span>Contacto</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">¡No seas tímid@!</h3>

          <p className="contact__description">
            No dudes en ponerte en contacto conmigo. 
            Siempre estoy abierto a discutir nuevos proyectos, 
            ideas creativas u oportunidades para ser parte de tus visiones.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon' />

              <div>
                <span className="info__title">Escríbeme</span>
                <h4 className="info__desc">jeyco0009@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon' />

              <div>
                <span className="info__title">Llámame</span>
                <h4 className="info__desc">+1 809 383 2838</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href='https://www.facebook.com/jeyco009/' className="contact__socials-link">
              <FaFacebookF />
            </a>

            <a href='https://twitter.com/InoaEsteban' className="contact__socials-link">
              <FaTwitter />
            </a>

            <a href='https://www.instagram.com/jeyco009/' className="contact__socials-link">
              <FaInstagram />
            </a>
            
            <a href='https://www.linkedin.com/in/esteban-jacob-cabrera-inoa-6b4011200/' className="contact__socials-link">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input 
                type="text" 
                placeholder='Tu Nombre' 
                className="form__control" 
              />
            </div>

            <div className="form__input-div">
              <input 
                type="email" 
                placeholder='Tu Email' 
                className="form__control" 
              />
            </div>

            <div className="form__input-div">
              <input 
                type="text" 
                placeholder='Tu Asunto'
                className="form__control" 
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea 
              placeholder='Tu Mensaje' 
              className="form__control textarea">
            </textarea>
          </div>

          <button className='button'>
            Enviar Mensaje
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact
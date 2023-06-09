import React from "react";
import "./Sidebar.css";
import img from "../../Untitled.png";
import Typed from 'react-typed';
import cv from '../../cv/hamzaalarja.pdf.pdf'

const Sidebar = () => {


  return (
    <>
      <div className="text-center mb-5">
        <div className="bg-dark box">
          <div className="items">
            <div className="img-wrapper">
              <img className="img-fluid w-100" src={img} alt="Hamza Alarja" />
            </div>
          </div>
          <div className="content">
            <h1 className="h4 text-light">Hamza Alarja</h1>
            <p className="text-muted text-center m-0">
              <Typed
                strings={['Front End Developer', 'React Developer']}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </p>
          </div>
          <div className="icons">
            <a
              className="fa-brands fa-facebook"
              target="blank"
              href="https://www.facebook.com/Hamza.Alarja"
            ></a>
            <a
              className="fa-brands fa-instagram"
              target="blank"
              href="https://www.instagram.com/hamza_alarja/"
            ></a>
            <a
              className="fa-brands fa-linkedin"
              target="blank"
              href="https://www.linkedin.com/in/hamzaalarja/"
            ></a>
            <a
              className="fa-brands fa-github"
              target="blank"
              href="https://github.com/McLarwnce"
            ></a>
          </div>
          <div className="box-contact p-2 text-start">
            <div className="contact d-flex align-items-center">
              <div>
                <i className="fa-solid fa-mobile-screen-button text-light fs-3 p-2"></i>
              </div>
              <div className="p-2">
                <p className="text-light m-0">phone</p>
                <a href="tel:+1234567890">+2 1009700870</a>
              </div>
            </div>
            <hr className="text-light w-75 m-auto p-1" />
            <div className="contact d-flex align-items-center">
              <div>
                <i className="fa-solid fa-solid fa-envelope text-light fs-3 p-2"></i>
              </div>
              <div className="p-2">
                <p className="text-light m-0">Email</p>
                <a type="mail" href="mailto:Mc.larwnce@gmail.com">
                  Mc.larwnce@gmail.com
                </a>
              </div>
            </div>
            <hr className="text-light w-75 m-auto p-1" />

            <div className="contact d-flex align-items-center">
              <div>
                <i className="fa-solid fa-solid fa-location-dot text-light fs-3 p-2"></i>
              </div>
              <div className="p-2">
                <p className="text-light m-0">Location</p>
                <span className="text-light">6th of October City</span>
              </div>
            </div>
            <hr className="text-light w-75 m-auto p-1" />

            <div className="contact d-flex align-items-center">
              <div>
                <i className="fa-solid fa-regular fa-calendar-days text-light fs-3 p-2"></i>
              </div>
              <div className="p-2">
                <p className="text-light m-0">Birthday</p>
                <span className="text-light">Apr 1, 2001</span>
              </div>
            </div>
          </div>
          <button className="btn btn-outline-primary w-50 rounded-1  my-3">
            <a
              className="button"
              href={cv}
              download
            >
              Download CV
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

import React from "react";
import "./Header.css";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className="text-center header mb-3">
      <Button className="btn">
        <Link className={location.pathname === '/about' || location.pathname === '/' ? 'btn active' : 'btn'} to="/about">
          <i className="fa-solid fa-house mt-1"></i>
          <p>Home</p>
        </Link>
      </Button>
      <Button className="btn">
        <Link className="btn" to="resume">
          <i className="fa-solid fa-file mt-1"></i>
          <p> Resume</p>
        </Link>
      </Button>
      <Button className="btn">
        <Link className="btn" to="works">
          <i className="fa-brands fa-squarespace mt-1"></i>
          <p> Works</p>
        </Link>
      </Button>
      <Button className="btn">
        <Link className="btn" to="contact">
          <i className="fa-solid fa-address-book mt-1"></i>
          <p> Contact</p>
        </Link>
      </Button>
    </div>
  );
};

export default Header;

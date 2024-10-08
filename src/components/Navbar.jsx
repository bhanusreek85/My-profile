import React from "react";
import { Link ,useLocation } from "react-router-dom";
import sampleImage from "../../public/Assets/sapcertified.jpg";

export default function Nav({ links }) {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg bg-info">
      <div className="container-fluid d-flex align-items-center">
        <Link className="navbar-brand text-light" to="/">
          Bhanusree Kurra
        </Link>
        <img
          src={sampleImage}
          alt="Sample"
          className="img-fluid small-image ms-3"
          style={{ width: "10%", height: "20%" }}
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            
            {links.map((link, index) => (
              <li className="nav-item" key={index}>
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

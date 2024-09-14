import React from 'react';
import { Link } from 'react-router-dom';
import sampleImage from '../Assets/sapcertified.jpg'; 

export default function Nav({ links }) {
    return (
      <nav className="navbar navbar-expand-lg bg-success">
    <div className="container-fluid d-flex align-items-center">
        <Link className="navbar-brand text-light" to="/">Bhanusree Kurra</Link>
        <img src={sampleImage} alt="Sample" className="img-fluid small-image ms-3" style={{ width: '10%', height: '20%' }}/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              {links.map((link) => link)}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav({ links }) {
    return (
      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">Bhanusree Kurra</Link>
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
  
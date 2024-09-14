import { useState, useEffect } from 'react';
// Todo: Bring in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';
import sampleImage from '../Assets/IMG_7498.jpg'; 



export default function HomePage() {
  

  // Iterate over each mock user to display their abridged profile data and a link to their page
  return (
    <div className="custom-bg">
    <div className="container pt-4">
         <h1 className="gradient-text">Welcome to My Profile</h1>
         <h2 className="gradient-text">SAP Digital Transformation Architect</h2>
         <h3>About Me</h3>
         <img src={sampleImage} alt="Sample" className="small-image float-right" />
      <ul className="list-group list-group">
      
      </ul>
    </div>
    </div>
  );
}

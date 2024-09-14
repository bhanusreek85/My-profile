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
        <div className="row">
        <div className="col-md-8">
         <h3 className="text-primary">About Me</h3>
         <p className="text-secondary">SAP certified Lead ABAP developer with over 18 years of in-depth hands on experience in Design, Development, Testing, Implementation and Support for API’s, Reports, Interfaces, Conversions, Forms, Enhancements and Workflows in various SAP ECC Modules like SD, MM, FI, MM, HR and FSCD. Expertise in ODATA services and third-party application API integration in a cloud-based environment. Strong knowledge of SAP ABAP on HANA. Experience in managing onsite and offshore development team, coordinating with Business Analysts and Users, documenting business requirements, developing functional design documents. Excellent team lead as well as team player with strong interpersonal and communication skills.</p>
         </div>
         <div className="col-md-4">
         <img src={sampleImage} alt="Sample" className="img-fluid small-image" />
         {/* </div> */}
         </div>
         </div>
      <ul className="list-group list-group">
      
      </ul>
    </div>
    </div>
  );
}

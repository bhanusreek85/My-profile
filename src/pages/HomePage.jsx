import sampleImage from '../Assets/mypicture.jpg'; 
import Footer from '../components/Footer.jsx';

export default function HomePage() {
    return (
      <div className="custom-bg d-flex flex-column min-vh-100">
        <div className="flex-grow-1">
          <div className="container">
            <h1 className="gradient-text">SAP Digital Transformation Architect</h1>
            <div className="row">
              <div className="col-md-6">
                <h3 className="text-primary text-center">About Me</h3>
                <p className="text-secondary fw-bold">
                  SAP certified Lead ABAP developer with over 18 years of in-depth hands on experience in designing and implementing efficient, scalable and innovative solutions. My Expertise lies in Development, Testing, Implementation and Support for API’s, Reports, Interfaces, Conversions, Forms, Enhancements and Workflows in various SAP ECC Modules like SD, MM, FI, MM, HR and FSCD. Expertise in ODATA services and third-party application API integration in a cloud-based environment. Strong knowledge of SAP ABAP on HANA. Experience in managing onsite and offshore development team, coordinating with Business Analysts and Users, documenting business requirements, developing functional design documents. Excellent team lead as well as team player with strong interpersonal and communication skills.
                </p>
              </div>
              <div className="col-md-6 d-flex flex-column align-items-center">
                <img src={sampleImage} alt="Sample" className="small-image mb-3" />
                <a href="/Assets/Bhanusree_Kurra_Resume.pdf" className="btn btn-primary" download>Download Profile</a>
              </div>
             </div>
            </div> 
          </div>
        <Footer />
      </div>
    );
  }

import Footer from '../components/Footer';

export default function EducationPage() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-dark">
      <div className="flex-grow-1">
        <div className="container pt-3 pb-3">
          <h1 className="text-center mb-4 text-light">Education & Certifications</h1>
          <div className="row">
            <div className="col-md-6">
              <h3 className="text-primary">Education</h3>
              <ul className="list-group">
                <li className="list-group-item bg-white text-secondary">
                  <h4>Master of Technology</h4>
                  <p>Sri Venkateswara University - 2007</p>
                  <p>Tirupati, India</p>
                </li>
                <li className="list-group-item bg-white text-secondary">
                  <h4>Bachelor of Technology</h4>
                  <p>JNT University - 2004</p>
                  <p>Hyderabad, India</p>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3 className="text-primary">Certifications</h3>
              <ul className="list-group">
                <li className="list-group-item bg-white text-secondary">
                  <a href="https://www.credly.com/badges/f9629bdf-0a52-4bb7-a100-19ed83c4354d/linked_in_profile" target="_blank" rel="noopener noreferrer" className="text-decoration-none certification-link">
                    SAP Certified Associate - SAP Activate Project Manager
                  </a>
                </li>
                <li className="list-group-item bg-white text-secondary">
                  <a href="https://www.credly.com/badges/7d187fcc-c410-4265-ae34-ab63b159fc3b/linked_in_profile" target="_blank" rel="noopener noreferrer" className="text-decoration-none certification-link">
                    SAP Certified Application Associate - SAP S/4HANA Cloud Implementation with SAP Activate
                  </a>
                </li>
                <li className="list-group-item bg-white text-secondary">
                  <a href="https://www.certmetrics.com/amazon/electronic_certificate.aspx?cert=3B2B3266439A5C37EC4E3EC724387F74O25629786A33CFEBC117144A7D47131D5" target="_blank" rel="noopener noreferrer" className="text-decoration-none certification-link">
                    AWS Certified Solutions Architect - Associate
                  </a>
                </li>
                <li className="list-group-item bg-white text-secondary">
                  <a href="https://www.credly.com/badges/7d187fcc-c410-4265-ae34-ab63b159fc3b/linked_in_profile" target="_blank" rel="noopener noreferrer" className="text-decoration-none certification-link">
                    SAP Certified Development Specialist - ABAP for SAP HANA (Edition 2016)
                  </a>
                </li>
                <li className="list-group-item bg-white text-secondary">
                  <a href="https://www.credly.com/badges/7d187fcc-c410-4265-ae34-ab63b159fc3b/linked_in_profile" target="_blank" rel="noopener noreferrer" className="text-decoration-none certification-link">
                    Certified ScrumMaster - Scrum Alliance
                  </a>
                </li>
                <li className="list-group-item bg-white text-secondary">
                  <a href="https://www.credly.com/badges/7d187fcc-c410-4265-ae34-ab63b159fc3b/linked_in_profile" target="_blank" rel="noopener noreferrer" className="text-decoration-none certification-link">
                    SAP Certified Development Associate - ABAP with SAP NetWeaver 7.40
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
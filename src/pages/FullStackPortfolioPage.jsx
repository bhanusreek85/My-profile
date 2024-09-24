import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import readme from "../../public/Assets/readme.jpg";
import studentrepo from "../../public/Assets/studentrepo.avif";
import profilefinder from "../../public/Assets/profilefinder.jpg";
import apipic from "../../public/Assets/APIpic.webp";
export default function ConatactPage() {
  const projects = [
    {
      title: 'ReadMeBuilder',
      description: 'Application that builds README file baed on a user input. Node.js along with inquirer package used to build this application',
      link: 'https://github.com/bhanusreek85/Build-Readme_Module-7-Challenge',
      image: readme, // Replace with your image URL
    },
    {
      title: 'Student Repository System',
      description: 'Application used to manage students and courses. t provides functionalities for teachers to sign up and log in, search for students, add new students, search for courses, and add courses associated with students.',
      link: 'https://bhanusreek85.github.io/StudentRepositorySystem/',
      image: studentrepo // Replace with your image URL
    },
    {
      title: 'ProfileFinder',
      description: 'Application where user can go through the git hub user profiles and save the potential profiles',
      link: 'https://candidate-search-module-13.onrender.com/',
      image: profilefinder, // Replace with your image URL
    },
    {
      title: 'SAP Odata API',
      description: 'Implemented multiple Odata API that integrates SAP with partner banks and other third party applications',
      link: 'https://link-to-project-4.com',
      image: apipic, // Replace with your image URL
    },
    {
      title: 'Future Project 5',
      description: 'Description of Project 5',
      link: 'https://link-to-project-5.com',
      image: 'https://via.placeholder.com/300', // Replace with your image URL
    },
    {
      title: 'Future Project 6',
      description: 'Description of Project 6',
      link: 'https://link-to-project-6.com',
      image: 'https://via.placeholder.com/300', // Replace with your image URL
    },
  ];

  return (
    <div className="custom-bg d-flex flex-column min-vh-100">
    <div className="flex-grow-1">
      <div className="container">
        <h1 className="gradient-text text-center mb-4">Full Stack Portfolio</h1>
        <div className="row d-none d-md-flex">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card h-100 d-flex flex-column">
                <div
                  className="card-img-top"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '75px',
                  }}
                ></div>
                <div className="card-body d-flex flex-column p-3">
                  <h5 className="card-title text-center">{project.title}</h5>
                  <p className="card-text flex-grow-1 text-center">{project.description}</p>
                  <a
                    href={project.link}
                    className="btn btn-primary mt-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-block d-md-none">
          {projects.map((project, index) => (
            <div className="mb-4" key={index}>
              <h5 className="text-white" >{project.title}</h5>
              <p className="text-white">{project.description}</p>
              <a
                href={project.link}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
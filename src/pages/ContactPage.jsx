import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";

export default function ConatactPage() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-dark">
      <div className="flex-grow-1 ">
        <div className="container mt-5">
          <div className="card p-4 bg-secondary">
            <h2 className="card-title text-center">CONTACT ME</h2>
            <p className="text-center">Bhanusree Kurra</p>
            <p className="text-center">banusreek@gmail.com</p>
            <form>
              <div className="form-group fw-bold">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group fw-bold">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group fw-bold">
                <label htmlFor="message">What's on your mind?</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="d-flex justify-content-between p-2">
                <button type="submit" className="btn btn-dark ">
                  Submit
                </button>
                <Link to="/" className="btn btn-dark">
                  Home
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

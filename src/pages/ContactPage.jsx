
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        if (!validateEmail(value)) {
          setEmailError("Please enter a valid email address.");
        } else {
          setEmailError("");
        }
        break;
      case "name":
        if (value.trim() === "") {
          setNameError("Name is required.");
        } else {
          setNameError("");
        }
        break;
      case "message":
        if (value.trim() === "") {
          setMessageError("Message is required.");
        } else {
          setMessageError("");
        }
        break;
      default:
        break;
    }
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    switch (name) {
      case "email":
        setEmailError("");
        break;
      case "name":
        setNameError("");
        break;
      case "message":
        setMessageError("");
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email) && name.trim() !== "" && message.trim() !== "") {
      setEmailError("");
      setNameError("");
      setMessageError("");
      // Handle form submission
      console.log("Form submitted with:", { email, name, message });
    } else {
      if (!validateEmail(email))
        setEmailError("Please enter a valid email address.");
      if (name.trim() === "") setNameError("Name is required.");
      if (message.trim() === "") setMessageError("Message is required.");
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-dark">
      <div className="container mt-5 flex-grow-1 ">
        <h1 className="text-center gradient-text mb-4">Contact Me</h1>
        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-bold text-light">
              Name
            </label>
            <input
              type="text"
              className={`form-control ${nameError ? "is-invalid" : ""}`}
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={handleBlur}
              onFocus={handleFocus}
              required
            />
            {nameError && <div className="invalid-feedback">{nameError}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold text-light">
              Email address
            </label>
            <input
              type="email"
              className={`form-control ${emailError ? "is-invalid" : ""}`}
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleBlur}
              onFocus={handleFocus}
              required
            />
            {emailError && <div className="invalid-feedback">{emailError}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label fw-bold text-light">
              Message
            </label>
            <textarea
              className={`form-control ${messageError ? "is-invalid" : ""}`}
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onBlur={handleBlur}
              onFocus={handleFocus}
              required
            ></textarea>
            {messageError && (
              <div className="invalid-feedback">{messageError}</div>
            )}
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            {/* //submit Funcionality will be added in the future// */}
            <Link to="/" className="btn btn-secondary ms-auto">
              Home
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

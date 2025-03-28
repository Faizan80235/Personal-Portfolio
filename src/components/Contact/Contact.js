import React from "react";
import myImg from "../../Assets/avatar.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGithub, 
  faTwitter, 
  faInstagram, 
  faLinkedin 
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div 
      className="container-fluid min-vh-100 d-flex justify-content-center align-items-center" 
      style={{ background: "#0a001f" }}
    >
      <div className="row w-75 bg-transparent p-4 rounded-3 shadow-lg">
        
        {/* Profile Section */}
        <div className="col-md-4 d-flex flex-column align-items-center justify-content-center text-center">
          <img
            src={myImg}
            alt="avatar"
            className="rounded-circle shadow mb-3"
            style={{ width: "150px", height: "150px" }}
          />
          
          {/* Social Icons */}
          <div className="d-flex justify-content-center gap-4 mt-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white">
              <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: "#a560e8" }} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white">
              <FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: "#a560e8" }} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-white">
              <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: "#a560e8" }} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-white">
              <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: "#a560e8" }} />
            </a>
          </div>
        </div>

        {/* Form Section */}
        <div className="col-md-8">
          <h1 className="display-4 mb-2 text-white">
            Get in <span style={{ color: "#a560e8" }}>Touch</span>
          </h1>
          <h3 className="text-white mb-4" style={{ color: "#a560e8" }}>Contact me</h3>
          <form className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Name"
                required
                className="form-control bg-transparent text-white border border-secondary"
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                placeholder="Email"
                required
                className="form-control bg-transparent text-white border border-secondary"
              />
            </div>
            <div className="col-12">
              <textarea
                placeholder="Message"
                rows="4"
                className="form-control bg-transparent text-white border border-secondary"
              ></textarea>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn w-25 text-white" style={{ backgroundColor: "#a560e8" }}>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

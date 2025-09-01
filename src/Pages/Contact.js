import React, { useState } from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import "../Styles/ContactSection.css"; // dark theme styles

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (This is a demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="contact-title">Get In Touch</h2>
            <p className="section-description">
              Let’s work together on your next project
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-card border-0 shadow">
              <div className="card-body p-5">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-control form-control-custom"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        placeholder="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-control form-control-custom"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Message</label>
                    <textarea
                      rows={5}
                      name="message"
                      placeholder="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-control form-control-custom"
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className=" text-white btn btn-custom btn-lg px-5">
                      <Mail size={16} className="me-2" />
                      Send Message
                    </button>
                  </div>
                </form>

                <hr className="my-5 border-secondary" />

                <div className="social-links text-center">
                  <h5 className="mb-4">Connect With Me</h5>
                  <div className="social-icons">
                    <a href="https://github.com/Faizan80235" className="social-icon">
                      <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/faizan-ali-fullstack-developer/" className="social-icon">
                      <Linkedin size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/faizan-ali-fullstack-developer/" className="social-icon">
                      <Twitter size={24} />
                    </a>
                    <a href="mailto:fa3031980@gmail.com" className="social-icon">
                      <Mail size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

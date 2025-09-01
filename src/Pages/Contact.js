import React, { useState } from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import "../Styles/ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (This is a demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <div className="row fade-in-up">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="contact-title">Let’s Work Together</h2>
            <p className="section-description">
              Have a project in mind? Drop me a line and let’s create something amazing.
            </p>
          </div>
        </div>

        <div className="row justify-content-center fade-in-up">
          <div className="col-lg-8">
            <div className="contact-card">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder=" "
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-control-custom"
                      />
                      <label>Name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder=" "
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-control-custom"
                      />
                      <label>Email</label>
                    </div>
                  </div>
                </div>
                <div className="mb-4 form-group">
                  <textarea
                    rows={5}
                    name="message"
                    placeholder=" "
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-control-custom"
                  />
                  <label>Message</label>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-custom btn-lg px-5">
                    <Mail size={18} className="me-2" />
                    Send Message
                  </button>
                </div>
              </form>

              <hr className="my-5 border-secondary" />

              <div className="social-links text-center">
                <h5 className="mb-4">Connect With Me</h5>
                <div className="social-icons">
                  <a href="https://github.com/Faizan80235" className="social-icon" aria-label="GitHub">
                    <Github size={28} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/faizan-ali-fullstack-developer/"
                    className="social-icon"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={28} />
                  </a>
                  <a href="https://twitter.com/" className="social-icon" aria-label="Twitter">
                    <Twitter size={28} />
                  </a>
                  <a href="mailto:fa3031980@gmail.com" className="social-icon" aria-label="Email">
                    <Mail size={28} />
                  </a>
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

import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import "../Styles/ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xnnbzrlp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-section py-5 text-light">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-lg-12">
            <h2 className="fw-bold text-white">Contact Me</h2>
            <p className="text-secondary">Let’s get in touch or collaborate!</p>
          </div>
        </div>

        <div className="row">
          {/* Left: Contact Info */}
          <div className="col-lg-5 mb-4">
            <h4 className="mb-3 text-white">Reach Out</h4>
            <p className="mb-2">
              <Phone size={16} className="me-2" />
              <a href="tel:+923161435800" className="text-decoration-none text-secondary">
                +92 3161435800
              </a>
            </p>
            <p className="mb-2">
              <Mail size={16} className="me-2" />
              <a href="mailto:faizan.ali.developer.3976@gmail.com" className="text-decoration-none text-secondary">
              faizan.ali.developer.3976@gmail.com
              </a>
            </p>
            <p className="text-secondary">
              Feel free to reach out for any inquiries, collaborations, or freelance
              opportunities.
            </p>

            {/* Social Links */}
            <div className="social-links mt-4">
              <h6 className="mb-3 text-white">Follow Me</h6>
              <div className="d-flex gap-3">
                <a href="https://github.com/Faizan80235" className="social-icon text-secondary">
                  <Github size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/faizan-ali-fullstack-developer/"
                  className="social-icon text-secondary"
                >
                  <Linkedin size={22} />
                </a>
                <a href="https://twitter.com/" className="social-icon text-secondary">
                  <Twitter size={22} />
                </a>
                <a href="mailto:fa3031980@gmail.com" className="social-icon text-secondary">
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="col-lg-7">
            <div className="contact-card p-4 rounded" style={{ backgroundColor: "#1e1e1e" }}>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-control-custom"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-control-custom"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-control-custom"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-custom px-4">
                  {status === "sending"
                    ? "Sending..."
                    : status === "success"
                    ? "Sent!"
                    : status === "error"
                    ? "Error"
                    : "Send"}
                </button>

                {status === "success" && (
                  <div className="alert alert-success mt-3">Your message has been sent!</div>
                )}
                {status === "error" && (
                  <div className="alert alert-danger mt-3">Oops! Something went wrong.</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

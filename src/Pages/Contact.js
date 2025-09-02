import React, { useState } from "react";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import "../Styles/ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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
        setStatus("error");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <div className="row fade-in-up mb-5">
          <div className="col-lg-12 text-center">
            <h2 className="contact-title">Contact Me</h2>
          </div>
        </div>

        <div className="row fade-in-up">
          {/* Left side: Contact Info */}
          <div className="col-lg-5 mb-4">
            <h4 className="mb-3">Get in touch</h4>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:fa3031980@gmail.com">fa3031980@gmail.com</a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+923161435800">+92 3161435800</a>
            </p>
            <p>
              Feel free to reach out to me for any inquiries, collaborations, or
              project discussions. I am always open to new opportunities and
              look forward to connecting with you.
            </p>

            {/* Socials */}
            <div className="social-links mt-4">
              <h6 className="mb-3">Follow Me</h6>
              <div className="social-icons d-flex gap-3">
                <a href="https://github.com/Faizan80235" className="social-icon">
                  <Github size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/faizan-ali-fullstack-developer/"
                  className="social-icon"
                >
                  <Linkedin size={22} />
                </a>
                <a href="https://twitter.com/" className="social-icon">
                  <Twitter size={22} />
                </a>
                <a href="mailto:fa3031980@gmail.com" className="social-icon">
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Right side: Contact Form */}
          <div className="col-lg-7">
            <div className="contact-card p-4">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-control-custom"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-control-custom"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    rows={5}
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-control-custom"
                  />
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
              </form>

              {status === "success" && (
                <div className="alert alert-success mt-3">Message sent!</div>
              )}
              {status === "error" && (
                <div className="alert alert-danger mt-3">Something went wrong.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

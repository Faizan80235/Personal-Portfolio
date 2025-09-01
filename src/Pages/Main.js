

import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import AboutSection from './About';
import Skill from './SkillSection';
import Project from  './Project'
import Contact from  './Contact'
import Footer from './Footer'
// Typewriter Effect Component
const TypewriterEffect = ({ strings, speed = 100, deleteSpeed = 50, delaySpeed = 2000 }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentString = strings[currentStringIndex];
      
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentStringIndex(prev => (prev + 1) % strings.length);
        }
      } else {
        setCurrentText(prev => currentString.slice(0, prev.length + 1));
        if (currentText === currentString) {
          setTimeout(() => setIsDeleting(true), delaySpeed);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentStringIndex, strings, speed, deleteSpeed, delaySpeed]);

  return (
    <span className="typewriter-text">
      {currentText}
      <span className="cursor-blink">|</span>
    </span>
  );
};

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <a 
          className="navbar-brand fw-bold" 
          href="#"
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
        >
         FAIZAN ALI
        </a>
        
        <button 
          className="navbar-toggler border-0" 
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a 
                className="nav-link"
                href="#"
                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link"
                href="#"
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link"
                href="#"
                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              >
                Projects
              </a>
            </li>
              <li className="nav-item">
              <a 
                className="nav-link"
                href="#"
                onClick={(e) => { e.preventDefault(); scrollToSection('Skills'); }}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link"
                href="#"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="home" className="hero-section vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center h-100">
          {/* Left Side - Content */}
          <div className="col-lg-6 col-md-12 order-2 order-lg-1">
            <div className="hero-content text-center text-lg-start">
              <h1 className="hero-title mb-3 text-light">
                Hi, I'm <span className="text-primary">Faizan Ali</span>
              </h1>
              
              <h2 className="hero-subtitle mb-4">
                <TypewriterEffect 
                  strings={[
                    "Web Developer",
                    "React Developer", 
                    "Python Developer",
                    "UI/UX Designer",
                    "Problem Solver"
                  ]}
                  speed={80}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />
              </h2>
              
              <p className="hero-description text-light mb-4">
                Passionate about creating amazing digital experiences and bringing ideas to life through clean, efficient code.
              </p>
              
              <div className="hero-buttons">
                <button 
                  className="btn btn-primary btn-lg me-3 mb-2 hero-btn"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <ExternalLink size={20} className="me-2" />
                  View Projects
                </button>
                <button 
                  className="btn btn-outline-light btn-lg mb-2 hero-btn"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Mail size={20} className="me-2" />
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Side - Avatar */}
          <div className="col-lg-6 col-md-12 order-1 order-lg-2 mb-4 mb-lg-0">
            <div className="hero-avatar text-center">
              <div className={`avatar-container ${imageLoaded ? 'fade-in' : ''}`}>
                <div className="coding-avatar">
                  <div className="desk-setup">
                    {/* Monitor */}
                    <div className="monitor">
                      <div className="screen">
                        <div className="code-lines">
                          <div className="code-line"></div>
                          <div className="code-line short"></div>
                          <div className="code-line"></div>
                          <div className="code-line medium"></div>
                        </div>
                      </div>
                      <div className="monitor-stand"></div>
                    </div>
                    
                    {/* Person */}
                    <div className="person">
                      <div className="head"></div>
                      <div className="body"></div>
                      <div className="arms">
                        <div className="arm left-arm"></div>
                        <div className="arm right-arm"></div>
                      </div>
                    </div>
                    
                    {/* Keyboard */}
                    <div className="keyboard"></div>
                    
                    {/* Coffee Cup */}
                    <div className="coffee-cup">
                      <div className="steam"></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="floating-elements">
                  <div className="floating-element react">⚛️</div>
                  <div className="floating-element js">JS</div>
                  <div className="floating-element html">&lt;/&gt;</div>
                  <div className="floating-element css">{'{}'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App Component
const App = () => {
  useEffect(() => {
    // Add Bootstrap CSS
    const bootstrapLink = document.createElement('link');
    bootstrapLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css';
    bootstrapLink.rel = 'stylesheet';
    document.head.appendChild(bootstrapLink);

    // Add Bootstrap JS
    const bootstrapScript = document.createElement('script');
    bootstrapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js';
    document.head.appendChild(bootstrapScript);

    // Add custom styles
    const style = document.createElement('style');
    style.textContent = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background-color: #121212;
        color: #ffffff;
        line-height: 1.6;
        overflow-x: hidden;
      }

      html {
        scroll-behavior: smooth;
      }

      /* Navbar Styles */
      .navbar {
        background-color: rgba(18, 18, 18, 0.95);
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
        padding: 1rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .navbar-scrolled {
        background-color: rgba(18, 18, 18, 0.98);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
      }

      .navbar-brand {
        font-size: 1.5rem;
        color: #64ffda !important;
        transition: all 0.3s ease;
      }

      .navbar-brand:hover {
        transform: translateY(-1px);
      }

      .nav-link {
        color: rgba(255, 255, 255, 0.8) !important;
        font-weight: 500;
        margin: 0 0.5rem;
        padding: 0.5rem 1rem !important;
        border-radius: 6px;
        transition: all 0.3s ease;
      }

      .nav-link:hover {
        color: #64ffda !important;
        background-color: rgba(100, 255, 218, 0.1);
        transform: translateY(-1px);
      }

      .navbar-toggler {
        border: none;
        padding: 0.25rem 0.5rem;
      }

      .navbar-toggler:focus {
        box-shadow: none;
      }

      /* Hero Section Styles */
      .hero-section {
        background: linear-gradient(135deg, #121212 0%, #1a1a1a 50%, #2d1b69 100%);
        position: relative;
        overflow: hidden;
      }

      .hero-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(100,255,218,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
        opacity: 0.3;
      }

      .hero-content {
        position: relative;
        z-index: 2;
        animation: fadeInUp 1s ease-out;
      }

      .hero-title {
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
      }

      .hero-subtitle {
        font-size: 2rem;
        color: #64ffda;
        font-weight: 300;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .text-lg-start .hero-subtitle {
        justify-content: flex-start;
      }

      .typewriter-text {
        color: #64ffda;
        font-weight: 500;
      }

      .cursor-blink {
        animation: blink 1s infinite;
        color: #64ffda;
      }

      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }

      .hero-description {
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.8);
        max-width: 500px;
      }

      .text-center .hero-description {
        margin-left: auto;
        margin-right: auto;
      }

      .hero-btn {
        padding: 12px 30px;
        border-radius: 50px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
      }

      .hero-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
      }

      .btn-primary {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border: none;
      }

      .btn-primary:hover {
        background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
      }

      .btn-outline-light:hover {
        background-color: rgba(255, 255, 255, 0.1);
        border-color: #64ffda;
        color: #64ffda;
      }

      .text-primary {
        color: #64ffda !important;
      }

      /* Avatar Styles */
      .hero-avatar {
        position: relative;
        z-index: 2;
      }

      .avatar-container {
        opacity: 0;
        transition: all 0.8s ease;
        transform: translateY(20px);
      }

      .avatar-container.fade-in {
        opacity: 1;
        transform: translateY(0);
      }

      .coding-avatar {
        width: 400px;
        height: 300px;
        margin: 0 auto;
        position: relative;
        animation: float 6s ease-in-out infinite;
      }

      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }

      /* Monitor */
      .monitor {
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: 200px;
        height: 120px;
      }

      .screen {
        width: 100%;
        height: 100px;
        background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
        border-radius: 8px;
        border: 3px solid #333;
        padding: 10px;
        position: relative;
      }

      .screen::before {
        content: '';
        position: absolute;
        top: -5px;
        right: -5px;
        bottom: -5px;
        left: -5px;
        background: linear-gradient(45deg, #64ffda, #667eea);
        border-radius: 12px;
        z-index: -1;
        opacity: 0.3;
      }

      .code-lines {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 8px;
      }

      .code-line {
        height: 3px;
        background: linear-gradient(90deg, #64ffda, #667eea);
        border-radius: 2px;
        animation: codeAnimation 3s ease-in-out infinite;
      }

      .code-line.short {
        width: 60%;
        animation-delay: 0.5s;
      }

      .code-line.medium {
        width: 80%;
        animation-delay: 1s;
      }

      @keyframes codeAnimation {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
      }

      .monitor-stand {
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 20px;
        background: linear-gradient(145deg, #333, #222);
        border-radius: 4px;
      }

      /* Person */
      .person {
        position: absolute;
        bottom: 60px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
      }

      .head {
        width: 40px;
        height: 40px;
        background: linear-gradient(145deg, #fdbcb4, #f4a261);
        border-radius: 50%;
        position: relative;
        margin: 0 auto 5px;
        border: 2px solid rgba(255, 255, 255, 0.1);
      }

      .head::after {
        content: '';
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        width: 20px;
        height: 15px;
        background: #2a2a2a;
        border-radius: 10px;
      }

      .body {
        width: 50px;
        height: 60px;
        background: linear-gradient(145deg, #667eea, #764ba2);
        border-radius: 25px 25px 8px 8px;
        margin: 0 auto;
        position: relative;
      }

      .arms {
        position: absolute;
        top: 15px;
        width: 100%;
      }

      .arm {
        width: 25px;
        height: 8px;
        background: linear-gradient(145deg, #fdbcb4, #f4a261);
        border-radius: 4px;
        position: absolute;
      }

      .left-arm {
        left: -20px;
        transform: rotate(-30deg);
      }

      .right-arm {
        right: -20px;
        transform: rotate(30deg);
      }

      /* Keyboard */
      .keyboard {
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
        width: 120px;
        height: 20px;
        background: linear-gradient(145deg, #333, #222);
        border-radius: 4px;
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .keyboard::before {
        content: '';
        position: absolute;
        top: 4px;
        left: 4px;
        right: 4px;
        height: 2px;
        background: rgba(100, 255, 218, 0.3);
        border-radius: 1px;
      }

      /* Coffee Cup */
      .coffee-cup {
        position: absolute;
        top: 80px;
        right: 20px;
        width: 30px;
        height: 35px;
        background: linear-gradient(145deg, #8B4513, #6B3410);
        border-radius: 4px 4px 8px 8px;
        border: 2px solid rgba(255, 255, 255, 0.1);
      }

      .coffee-cup::before {
        content: '';
        position: absolute;
        right: -8px;
        top: 8px;
        width: 12px;
        height: 12px;
        border: 2px solid rgba(255, 255, 255, 0.1);
        border-left: none;
        border-radius: 0 8px 8px 0;
      }

      .steam {
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 2px;
        height: 15px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 2px;
        animation: steam 2s ease-in-out infinite;
      }

      @keyframes steam {
        0%, 100% { opacity: 0.3; transform: translateX(-50%) scale(1); }
        50% { opacity: 0.8; transform: translateX(-50%) scale(1.2); }
      }

      /* Floating Elements */
      .floating-elements {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }

      .floating-element {
        position: absolute;
        font-size: 1.5rem;
        font-weight: bold;
        opacity: 0.7;
        animation: floatAround 8s ease-in-out infinite;
      }

      .floating-element.react {
        top: 10%;
        left: 10%;
        animation-delay: 0s;
      }

      .floating-element.js {
        top: 20%;
        right: 15%;
        color: #f7df1e;
        animation-delay: 2s;
      }

      .floating-element.html {
        bottom: 25%;
        left: 5%;
        color: #e34c26;
        animation-delay: 4s;
      }

      .floating-element.css {
        bottom: 10%;
        right: 10%;
        color: #1572b6;
        animation-delay: 6s;
      }

      @keyframes floatAround {
        0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
        25% { transform: translateY(-15px) rotate(90deg); opacity: 1; }
        50% { transform: translateY(-5px) rotate(180deg); opacity: 0.5; }
        75% { transform: translateY(-20px) rotate(270deg); opacity: 1; }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Mobile Responsiveness */
      @media (max-width: 991px) {
        .hero-title {
          font-size: 2.5rem;
        }
        
        .hero-subtitle {
          font-size: 1.5rem;
        }
        
        .coding-avatar {
          width: 300px;
          height: 250px;
        }
        
        .monitor {
          width: 150px;
          height: 90px;
        }
        
        .screen {
          height: 75px;
        }
        
        .floating-element {
          font-size: 1.2rem;
        }

        .navbar-collapse {
          background-color: rgba(18, 18, 18, 0.98);
          margin-top: 1rem;
          border-radius: 10px;
          padding: 1rem;
        }
      }

      @media (max-width: 576px) {
        .hero-title {
          font-size: 2rem;
        }
        
        .hero-subtitle {
          font-size: 1.25rem;
          height: 60px;
        }
        
        .hero-description {
          font-size: 1rem;
        }
        
        .hero-btn {
          padding: 10px 25px;
          font-size: 0.9rem;
        }
        
        .coding-avatar {
          width: 250px;
          height: 200px;
        }
      }

      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }

      ::-webkit-scrollbar-track {
        background: #1a1a1a;
      }

      ::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 4px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
      }
    `;
    document.head.appendChild(style);

    // Trigger avatar animation after component mounts
    const timer = setTimeout(() => {
      const avatarContainer = document.querySelector('.avatar-container');
      if (avatarContainer) {
        avatarContainer.classList.add('fade-in');
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      document.head.removeChild(bootstrapLink);
      document.head.removeChild(bootstrapScript);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <section id='about'>
      <AboutSection></AboutSection>

      </section>
      <section id="Skills">
    <Skill></Skill>

      </section>
      <section  id='project'>
      <Project></Project>

      </section>
      <section id="contact">
        <Contact></Contact> 
      </section>
       <Footer></Footer>
    </div>
  );
};

export default App;
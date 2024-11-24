import { Github, Linkedin, Mail } from "lucide-react";
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-inner">
        <h1 className="hero-heading">
          Programmer
        </h1>
        <p className="hero-paragraph">
          Hi! I am Suraj Sah, as a programmer, my biggest strengths are adaptability and persistence. I thrive on tackling new challenges and stay determined until I achieve my goals. I am a passionate Programmer with skills in React, MongoDB, HTML, CSS, Python, and JavaScript. I love creating interactive and user-friendly applications.
        </p>
        <div className="hero-social-icons">
          <a
            href="https://github.com/SurajSah23"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-icon"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/suraj-sah-b350a42b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-icon"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:suraj23@navgurukul.org"
            className="hero-social-icon"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

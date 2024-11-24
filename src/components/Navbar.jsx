import './Navbar.css';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu toggle

  useEffect(() => {
    const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(dark);
  }, []);

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <div className="inner">
          <div className="logo">
            <span className="logo-text">Suraj Sah</span>
          </div>
          
          {/* Hamburger Icon for mobile view */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          </div>

          {/* Navigation items */}
          <ul className={`nav-items ${menuOpen ? 'open' : ''}`}>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

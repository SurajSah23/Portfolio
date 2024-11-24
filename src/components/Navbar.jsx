import './Navbar.css';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

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
          <ul className="nav-items">
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

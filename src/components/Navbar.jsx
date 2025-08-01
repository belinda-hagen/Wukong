import React, { useState, useEffect } from 'react';
import '../Navbar.css';

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobileOrTablet(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = () => {
    if (isMobileOrTablet) setMenuOpen(false);
  };

  return (
    <nav className={`navbar${menuOpen ? ' menu-open' : ''}`}> 
      {isMobileOrTablet ? (
        <>
          <div className="menu-icon" onClick={() => setMenuOpen(open => !open)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul onClick={handleLinkClick}>
            <li><a href="#home">Home</a></li>
            <li><a href="#roadmap">News</a></li>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#media">Media</a></li>
          </ul>
        </>
      ) : (
        <>
          <div className="nav-logo">
            <img src="img/Game_Science_Logo.png" alt="Game Science Logo" />
          </div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#roadmap">News</a></li>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#media">Media</a></li>
          </ul>
        </>
      )}
    </nav>
  );
}

export default Navbar;

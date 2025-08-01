
import React from 'react';
import '../App.css';
import './Roadmap.css';
import './Overview.css';
import './Media.css';
import './Footer.css';


const Roadmap = () => (
     <footer>
    <div className="footer-main">
      <div className="footer-left">
        <button id="footerButton1" className="buy-button2">Buy Now</button>
      </div>

      <div className="footer-center">
        <nav className="footer-nav">
          <a href="#about">About Us</a>
          <span className="separator">|</span>
          <a href="#business">Business</a>
          <span className="separator">|</span>
          <a href="#privacy">Privacy Policy</a>
          <span className="separator">|</span>
          <a href="#support">Player Support</a>
        </nav>
      </div>

      <div className="footer-right">
        <button className="subscribe-button">Subscribe Now</button>
      </div>
    </div>

    {}
    <div className="footer-bottom">
      <p>Copyright © Game Science Interactive Technology Co., Ltd. All Rights Reserved .</p>
      <p>备案号：<a href="#" target="_blank">浙ICP备2024968号-1</a></p>
    </div>
  </footer>
 
);

export default Roadmap;


import React from 'react';
import '../App.css';
import './Roadmap.css';
import './Overview.css';


const Roadmap = () => (
  
<section id="overview" className="main-section">
  <div className="divider-container">
    <img src="img/divider_up.png" alt="Divider" />
    <div className="decorative-line"></div>
    <img src="img/divider_down.png" alt="Divider" />
  </div>

  <div className="wise-monkey-saying-container">
    <p>"A world unseen, where wonders gleam, <br></br>
        And with each stride, a new scene streams."
    </p>

    <div id="infoText" className="wise-monkey-saying-container">
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam 
        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est 
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur 
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et 
        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
        no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
    </div>

    <div className="gif-container">
      <img src="img/SteamGIF_NPC.gif" alt="Wukong GIF" />
    </div>
  </div>

  {}
  <div className="img-container">
    <img src="img/Wukong.webp" alt="Wukong" />
  </div>
</section>
);

export default Roadmap;

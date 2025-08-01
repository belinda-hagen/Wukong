

import './App.css';
import './info.css';
import Navbar from './components/Navbar.jsx';
import MusicPlayer from './components/MusicPlayer.jsx';
import Roadmap from './components/Roadmap.jsx';
import Overview from './components/Overview.jsx';
import SocialLinks from './components/SocialLinks.jsx';
import Media from './components/Media.jsx';
import Footer from './components/Footer.jsx';
import NewsPage from './components/NewsPage.jsx';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <MusicPlayer />
      <Navbar />
      <SocialLinks />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <main id="home">
                <video autoPlay muted loop playsInline className="background-video">
                  <source src="/img/black-myth-wukong.mp4" type="video/mp4" />
                </video>
                <div className="container-logo">
                  <img src="img/logo.png" alt="Wukong Logo"/>
                </div>
                <button className="buy-button" onClick={() => window.location.href='https://store.steampowered.com/app/2358720/Black_Myth_Wukong/'}> </button>
                {/* Info Banner Disclaimer */}
                <div className="info-banner">
                  <span className="info-banner-icon" aria-label="info" title="Disclaimer">⚠️</span>
                  <span className="info-banner-text">
                    This is a fan project website and is not the official website of the developers of "Black Myth: Wukong".
                    <br />All rights to the game and its assets belong to their respective owners.
                  </span>
                </div>
              </main>
              <Roadmap />
              <Overview />
              <Media />
              <Footer />
            </>
          }
        />
        <Route path="/news/:id" element={<NewsPage />} />
      </Routes>
    </>
  );
}

export default App;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import './Roadmap.css';

const newsData = [
  {
    img: 'img/wukong-boss.png',
    title: 'New Boss Revealed',
    desc: 'Face the legendary White Bone Spirit in the latest gameplay trailer. Prepare for a battle of mythic proportions!',
    date: 'July 2025',
    badge: 'Featured',
  },
  {
    img: 'img/header-background.png',
    title: 'Release Date Announced',
    desc: 'Black Myth: Wukong launches worldwide on August 20, 2025. Wishlist now and prepare for your journey!',
    date: 'June 2025',
    badge: '',
  },
  {
    img: 'img/wukong-challenge.jpg',
    title: 'Challenge Mode Unveiled',
    desc: 'Test your skills in the new Challenge Mode, featuring exclusive rewards and leaderboards.',
    date: 'May 2025',
    badge: '',
  },
];


const Roadmap = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selected = newsData[selectedIdx];
  const navigate = useNavigate();

  return (
    <section id="roadmap" className="main-section roadmap-modern-section">
      <div className="divider-container">
        <img src="img/divider_up.png" alt="Divider" />
        <div className="decorative-line"></div>
        <img src="img/divider_down.png" alt="Divider" />
      </div>
      <div className="roadmap-modern-content">
        <div className="news-title-bar">
          <img src="img/awardstitlebar.png" alt="News Title Bar" className="news-title-img" />
          <h2 className="news-title">Latest News</h2>
        </div>

        {/* Featured selected news card */}
        <div className="featured-news-card-container">
          <div className="featured-news-card-img-wrap">
            <img src={selected.img} alt={selected.title} className="featured-news-card-img" />
            {selected.badge && <span className="news-card-modern-badge">{selected.badge}</span>}
          </div>
          <div className="featured-news-card-content">
            <h3>{selected.title}</h3>
            <p>{selected.desc}</p>
            <span className="news-date">{selected.date}</span>
            <button className="roadmap-readmore-btn" onClick={() => navigate(`/news/${selectedIdx}`)}>Read More</button>
          </div>
        </div>

        {/* News grid */}
        <ul className="news-cards-modern-list">
          {newsData.map((item, idx) => (
            <li
              className={`news-card-modern${item.badge ? ' news-card-featured' : ''}${selectedIdx === idx ? ' selected' : ''}`}
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              tabIndex={0}
              aria-label={item.title}
              style={{ cursor: 'pointer' }}
              onDoubleClick={() => navigate(`/news/${idx}`)}
            >
              <div className="news-card-modern-img-wrap" onClick={() => navigate(`/news/${idx}`)}>
                <img src={item.img} alt={item.title} className="news-card-modern-img" />
                {item.badge && <span className="news-card-modern-badge">{item.badge}</span>}
              </div>
              <div className="news-card-modern-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="news-date">{item.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Roadmap;

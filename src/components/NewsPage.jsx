
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Roadmap.css";

const newsData = [
  {
    img: '/img/wukong-boss.png',
    title: 'New Boss Revealed',
    desc: 'Face the legendary White Bone Spirit in the latest gameplay trailer. Prepare for a battle of mythic proportions!',
    date: 'July 2025',
    badge: 'Featured',
    details: 'Face the legendary White Bone Spirit in the latest gameplay trailer. Prepare for a battle of mythic proportions!\n\nStay tuned for more updates and behind-the-scenes insights as we approach launch!'
  },
  {
    img: '/img/header-background.png',
    title: 'Release Date Announced',
    desc: 'Black Myth: Wukong launches worldwide on August 20, 2025. Wishlist now and prepare for your journey!',
    date: 'June 2025',
    badge: '',
    details: 'Black Myth: Wukong launches worldwide on August 20, 2025. Wishlist now and prepare for your journey!\n\nMore details about the release and pre-order bonuses will be announced soon.'
  },
  {
    img: '/img/wukong-challenge.jpg',
    title: 'Challenge Mode Unveiled',
    desc: 'Test your skills in the new Challenge Mode, featuring exclusive rewards and leaderboards.',
    date: 'May 2025',
    badge: '',
    details: 'Test your skills in the new Challenge Mode, featuring exclusive rewards and leaderboards.\n\nCompete with players worldwide and earn your place among the legends!'
  },
];


const NewsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const idx = parseInt(id, 10);
  const news = newsData[idx];

  if (!news) {
    return (
      <section className="roadmap-modern-section" style={{ minHeight: '100vh', paddingTop: 60 }}>
        <div className="roadmap-modern-content news-section" style={{ margin: '40px auto', maxWidth: 900, textAlign: 'center' }}>
          <h2 className="news-title">News Not Found</h2>
          <button className="roadmap-readmore-btn" onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </section>
    );
  }

  return (
    <section className="roadmap-modern-section" style={{ minHeight: '100vh', paddingTop: 60 }}>
      <div className="roadmap-modern-content news-section" style={{ margin: '40px auto', maxWidth: 900 }}>
        <div className="news-title-bar">
          <img src="/img/awardstitlebar.png" alt="News Title Bar" className="news-title-img" />
          <h2 className="news-title">{news.title}</h2>
        </div>
        <div className="featured-news-card-container" style={{ margin: '0 auto', maxWidth: 700 }}>
          <div className="featured-news-card-img-wrap" style={{ minHeight: 180, maxWidth: 340 }}>
            <img src={news.img} alt={news.title} className="featured-news-card-img" />
          </div>
          <div className="featured-news-card-content">
            <h3>{news.title}</h3>
            <p style={{ whiteSpace: 'pre-line' }}>{news.details}</p>
            <span className="news-date">{news.date}</span>
            <button className="roadmap-readmore-btn" style={{ marginTop: 24 }} onClick={() => navigate(-1)}>Back to Roadmap</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsPage;

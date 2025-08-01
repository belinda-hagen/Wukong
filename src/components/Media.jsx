

import React, { useState } from 'react';
import '../App.css';
import './Roadmap.css';
import './Overview.css';
import './Media.css';
import './Footer.css';
import '../Navbar.css';

const FILTERS = [
  { key: 'videos', label: 'Videos' },
  { key: 'screenshots', label: 'Screenshots' },
  { key: 'wallpapers', label: 'Wallpapers' },
  { key: 'concept', label: 'Concept Art' },
];

const Media = () => {
  const [selected, setSelected] = useState('videos');

  const renderContent = () => {
    switch (selected) {
      case 'videos':
        return (
          <div className="video-container">
            <iframe
              width="90%"
              height="90%"
              src="https://www.youtube.com/embed/uT6RZBz9ueM"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );
      case 'screenshots':
        const screenshots = [
          'img/test.jpg',
          'img/wukong-boss.png',
          'img/wukong-challenge.png',
          'img/header-background.png',
        ];
        return (
          <div className="video-container" style={{ flexDirection: 'column', alignItems: 'flex-start', background: 'none', boxShadow: 'none' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '18px',
                width: '100%',
                padding: '20px 0',
                justifyItems: 'center',
              }}
            >
              {screenshots.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  alt={`Screenshot ${idx + 1}`}
                  style={{
                    width: '100%',
                    maxWidth: '220px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
                    objectFit: 'cover',
                  }}
                />
              ))}
            </div>
          </div>
        );
      case 'wallpapers':
        return (
          <div className="video-container">
            <img src="img/black-myth-wukong-wallpaper.png" alt="Wallpaper" style={{ maxWidth: '100%', borderRadius: '8px' }} />
          </div>
        );
      case 'concept':
        return (
          <div className="video-container">
            <img src="img/Wukong.webp" alt="Concept Art" style={{ maxWidth: '30%', borderRadius: '8px' }} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="media" className="main-section">
      <div className="divider-container">
        <img src="img/divider_up.png" alt="Divider" />
        <div className="decorative-line"></div>
        <img src="img/divider_down.png" alt="Divider" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '4%', marginBottom: 0, justifyContent: 'flex-start', paddingTop: 0 }}>
        <div className="selection-container" style={{ margin: '0 0 18px 0' }}>
          {FILTERS.map((filter) => (
            <div
              key={filter.key}
              className={`selection-item ${filter.key} ${selected === filter.key ? 'active' : ''}`}
              onClick={() => setSelected(filter.key)}
              style={{ cursor: 'pointer' }}
            >
              {filter.label}
            </div>
          ))}
        </div>
        {renderContent()}
      </div>

      <div className="award-container">
        <div className="award-title-container">
          <img src="img/award2.png" alt="Award Icon"/>
          <img src="img/award3.png" alt="Award Icon"/>
          <img src="img/award4.png" alt="Award Icon"/>
          <img src="img/award1.png" alt="Award Icon"/>
        </div>
        <img src="img/awardstitlebar.png" alt="Award" />
      </div>
    </section>
  );
};

export default Media;


import React, { useRef, useState, useEffect } from 'react';
import { FaMusic, FaPause } from 'react-icons/fa';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setPlaying(true);
    const handlePause = () => setPlaying(false);
    const handleEnded = () => setPlaying(false);
    const handleError = (e) => {
      setPlaying(false);
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setPlaying(false);
        });
      }
    } else {
      audio.pause();
    }
  };

  return (
    <div className="music-player-icon" onClick={togglePlay} title="Play/Pause CelestialSymphony.mp3">
      {playing ? <FaPause size={32} /> : <FaMusic size={32} />}
      <audio ref={audioRef} src="/audio/CelestialSymphony.mp3" preload="auto" />
    </div>
  );
};

export default MusicPlayer;

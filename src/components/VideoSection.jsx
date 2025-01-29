import React from "react";
import "../App.css";

const VideoSection = () => {
  return (
    <div className="video-section">
      <iframe
        className="video-frame"
        src="https://www.youtube.com/embed/_yUzFtg201o?autoplay=1&mute=1&controls=0&loop=1&start=0&end=45&playlist=_yUzFtg201o"
        allow="autoplay; fullscreen"
        title="Jewelry Promo"
      ></iframe>
      <div className="video-overlay"></div>
    </div>
  );
};

export default VideoSection;

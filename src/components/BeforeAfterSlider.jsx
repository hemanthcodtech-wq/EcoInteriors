import React, { useState, useRef } from 'react';
import './BeforeAfterSlider.css';

const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="before-after-slider" ref={containerRef}>
      <div className="image-container">
        {/* After Image (Background) */}
        <img src={afterImage} alt="After" className="image-after" />
        
        {/* Before Image (Foreground, clipped) */}
        <img 
          src={beforeImage} 
          alt="Before" 
          className="image-before" 
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        />

        {/* Labels */}
        <div className="slider-label label-before">BEFORE</div>
        <div className="slider-label label-after">AFTER</div>

        {/* Slider Handle Line */}
        <div 
          className="slider-line" 
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="slider-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="9" y1="18" x2="9" y2="6"></line>
              <line x1="15" y1="18" x2="15" y2="6"></line>
            </svg>
          </div>
        </div>

        {/* Invisible Range Input for Interaction */}
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={sliderPosition} 
          onChange={handleSliderChange}
          className="slider-input"
        />
      </div>
    </div>
  );
};

export default BeforeAfterSlider;

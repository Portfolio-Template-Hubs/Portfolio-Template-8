import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './SkillsCarousel.css';

const SkillsCarousel = ({ skills }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Handle autoplay
  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % skills.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [autoplay, skills.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? skills.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % skills.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      handleNext();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      handlePrev();
    }
  };

  return (
    <div 
      className="skills-carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button 
        className="carousel-control prev"
        onClick={handlePrev}
        aria-label="Previous skill"
      >
        <FaChevronLeft />
      </button>

      <div className="carousel-container">
        <div 
          className="carousel-track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="carousel-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="skill-card-carousel">
                <div className="skill-icon-large">{skill.icon}</div>
                <h3 className="skill-name-large">{skill.name}</h3>
                <div className="skill-level-container">
                  <div 
                    className="skill-level-bar"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <button 
        className="carousel-control next"
        onClick={handleNext}
        aria-label="Next skill"
      >
        <FaChevronRight />
      </button>

      <div className="carousel-indicators">
        {skills.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => {
              setAutoplay(false);
              setActiveIndex(index);
            }}
            aria-label={`Go to skill ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel;
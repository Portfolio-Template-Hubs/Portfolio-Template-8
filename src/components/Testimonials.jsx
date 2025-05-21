import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechCorp',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      text: 'Working with this developer was an absolute pleasure. They delivered our project ahead of schedule and exceeded all our expectations. Their attention to detail and creative problem-solving made all the difference.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Startup Founder',
      company: 'InnovateLabs',
      image: 'https://randomuser.me/api/portraits/men/54.jpg',
      text: 'I was impressed by the level of expertise and professionalism. Our web application is not only visually stunning but also performs exceptionally well. The developer was responsive and implemented all our feedback promptly.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      company: 'DesignHub',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      text: 'The developer transformed our concept into a beautiful, functional website that perfectly represents our brand. Their technical skills and design sensibility are top-notch. We continue to receive compliments on our site.',
      rating: 4.5
    },
  ];

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="star-icon" />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half-star" className="half-star-container">
          <FaStar className="star-icon half-star-bg" />
          <div className="half-star-overlay">
            <FaStar className="star-icon" />
          </div>
        </div>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-star-${i}`} className="star-icon empty-star" />);
    }

    return stars;
  };

  return (
    <div className="testimonials-container">
      <div className="testimonials-wrapper">
        <div className="testimonials-inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-content">
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-author-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-author-info">
                  <h4 className="testimonial-author-name">{testimonial.name}</h4>
                  <p className="testimonial-author-role">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="testimonial-controls">
        <button 
          className="testimonial-control-btn prev-btn" 
          onClick={handlePrev}
          aria-label="Previous testimonial"
        >
          <FaChevronLeft />
        </button>
        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonial-indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => {
                setAutoplay(false);
                setActiveIndex(index);
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <button 
          className="testimonial-control-btn next-btn" 
          onClick={handleNext}
          aria-label="Next testimonial"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
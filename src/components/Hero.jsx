import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Full Stack Developer',
    'UI/UX Designer',
    'Problem Solver',
    'Tech Enthusiast',
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const socialLinks = [
    { icon: <FaGithub />, url: '#', label: 'GitHub' },
    { icon: <FaLinkedin />, url: '#', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: '#', label: 'Twitter' },
  ];

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
        <div className="hero-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-text"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="hero-welcome"
            >
              Welcome to my portfolio
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-title"
            >
              Hi, I'm{' '}
              <span className="hero-name">
                Your Name
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hero-subtitle"
            >
              <div className="typing-container">
                {text}
                <span className="typing-cursor">|</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="hero-description"
            >
              I create beautiful and functional web experiences that make a difference.
              Let's build something amazing together!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="hero-buttons"
            >
              <a href="#contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a href="#" className="btn btn-secondary">
                <FaDownload /> Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="hero-social"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="social-icon"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-image-wrapper"
          >
            <div className="hero-image-container">
              <div className="hero-image-glow"></div>
              <div className="hero-image-content">
                <div className="hero-image">
                  <div className="hero-image-blur"></div>
                  <div className="hero-image-core"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="scroll-indicator-wrapper"
      >
        <div className="scroll-indicator"></div>
      </motion.div>
    </section>
  );
};

export default Hero; 
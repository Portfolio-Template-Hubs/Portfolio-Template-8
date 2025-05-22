import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: <FaGithub />, url: '#', label: 'GitHub' },
    { icon: <FaLinkedin />, url: '#', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: '#', label: 'Twitter' },
    { icon: <FaInstagram />, url: '#', label: 'Instagram' },
    { icon: <FaEnvelope />, url: '#', label: 'Email' },
  ];

  const navLinks = [
    { name: 'Home', url: '#home' },
    { name: 'Projects', url: '#projects' },
    { name: 'Experience', url: '#experience' },
    { name: 'Skills', url: '#skills' },
    { name: 'Services', url: '#services' },
    { name: 'Achievements', url: '#achievements' },
    { name: 'Testimonials', url: '#testimonials' },
    { name: 'Blog', url: '#blog' },
    { name: 'Gallery', url: '#gallery' },
    { name: 'Contact', url: '#contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.button 
          className="scroll-to-top"
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaArrowUp />
        </motion.button>

        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">Your Name</h3>
            <p className="footer-description">
              A passionate developer focused on creating beautiful and functional web experiences.
            </p>
            <div className="footer-social">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  aria-label={link.label}
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <motion.a 
                    href={link.url}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <p className="footer-contact-item">Email: your.email@example.com</p>
            <p className="footer-contact-item">Location: City, Country</p>
            <p className="footer-contact-item">Available for freelance work</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            © {currentYear} Your Name. All rights reserved.
          </div>
          <div className="footer-credits">
            Designed & Built with <span className="heart">♥</span> and React
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
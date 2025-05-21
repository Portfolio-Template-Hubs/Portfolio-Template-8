import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'AI-Powered E-Commerce Platform',
      description: 'A next-generation e-commerce platform featuring AI-driven product recommendations, real-time inventory management, and seamless payment processing. Built with cutting-edge technologies for optimal performance.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'TensorFlow', 'Stripe'],
      github: '#',
      live: '#',
      category: 'web'
    },
    {
      title: 'Neural Network Image Generator',
      description: 'Advanced AI image generation system using deep learning algorithms. Features include style transfer, custom model training, and real-time image manipulation capabilities.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'Docker'],
      github: '#',
      live: '#',
      category: 'ai'
    },
    {
      title: 'Real-Time Analytics Dashboard',
      description: 'Interactive data visualization platform with real-time updates and advanced analytics capabilities. Features include custom chart creation, data filtering, and automated reporting.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL', 'AWS'],
      github: '#',
      live: '#',
      category: 'data'
    },
    {
      title: 'Social Media Platform',
      description: 'Full-featured social networking platform with real-time chat, content sharing, and advanced user interactions. Built with modern web technologies for optimal performance.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      technologies: ['React', 'Firebase', 'TailwindCSS', 'Socket.io'],
      github: '#',
      live: '#',
      category: 'web'
    },
    {
      title: 'Smart Home Automation System',
      description: 'Advanced IoT-based home automation system featuring voice control, energy monitoring, and automated scheduling capabilities. Designed for seamless integration with existing smart home devices.',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Python', 'Raspberry Pi', 'MQTT', 'React Native'],
      github: '#',
      live: '#',
      category: 'iot'
    },
    {
      title: 'Blockchain Wallet',
      description: 'Secure cryptocurrency wallet with multi-chain support, real-time price tracking, and advanced security features. Built with a focus on user experience and security.',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      technologies: ['Solidity', 'Web3.js', 'React', 'Node.js'],
      github: '#',
      live: '#',
      category: 'blockchain'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'data', name: 'Data Science' },
    { id: 'iot', name: 'IoT' },
    { id: 'blockchain', name: 'Blockchain' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <motion.section 
      className="projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="projects-container">
        <div className="projects-header">
          <motion.h2 
            className="projects-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="projects-subtitle"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore my latest work and personal projects. Each project is carefully crafted with attention to detail and modern technologies.
          </motion.p>
        </div>

        <div className="projects-filters">
          {categories.map(category => (
            <motion.button
              key={category.id}
              className={`filter-button ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                      <span>Code</span>
                    </a>
                    <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                      <span>Live</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="project-tech">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="view-more-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a 
            href="#" 
            className="view-more-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <FaExternalLinkAlt />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
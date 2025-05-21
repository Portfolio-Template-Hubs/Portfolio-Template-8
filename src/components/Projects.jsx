import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import ProjectGallery from './ProjectGallery';
import './Projects.css';

const Projects = () => {

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform with real-time inventory management, secure payments, and responsive design. Built with React, Node.js, and MongoDB.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      github: '#',
      live: '#',
      category: 'web'
    },
    {
      title: 'AI Image Generator',
      description: 'An AI-powered image generation tool using machine learning to create unique artwork and designs. Features include style transfer and custom model training.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'Docker'],
      github: '#',
      live: '#',
      category: 'ai'
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for visualizing and analyzing complex datasets with real-time updates. Includes custom charts, data filtering, and export capabilities.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL', 'AWS'],
      github: '#',
      live: '#',
      category: 'data'
    },
    {
      title: 'Social Media Platform',
      description: 'A full-featured social media platform with real-time chat, post sharing, and user interactions. Built with modern web technologies.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      technologies: ['React', 'Firebase', 'TailwindCSS', 'Socket.io'],
      github: '#',
      live: '#',
      category: 'web'
    },
    {
      title: 'Smart Home Automation',
      description: 'IoT-based home automation system with voice control, scheduling, and energy monitoring capabilities.',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Python', 'Raspberry Pi', 'MQTT', 'React Native'],
      github: '#',
      live: '#',
      category: 'iot'
    },
    {
      title: 'Blockchain Wallet',
      description: 'Secure cryptocurrency wallet with multi-chain support, transaction history, and real-time price tracking.',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      technologies: ['Solidity', 'Web3.js', 'React', 'Node.js'],
      github: '#',
      live: '#',
      category: 'blockchain'
    }
  ];

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

        <ProjectGallery projects={projects} />

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
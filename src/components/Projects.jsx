import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform with real-time inventory management, secure payments, and responsive design.',
      image: 'https://via.placeholder.com/400x300',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#',
      category: 'web'
    },
    {
      title: 'AI Image Generator',
      description: 'An AI-powered image generation tool using machine learning to create unique artwork and designs.',
      image: 'https://via.placeholder.com/400x300',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      github: '#',
      live: '#',
      category: 'ai'
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for visualizing and analyzing complex datasets with real-time updates.',
      image: 'https://via.placeholder.com/400x300',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      github: '#',
      live: '#',
      category: 'data'
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'data', label: 'Data Science' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="projects-section">
      <div className="projects-container">
        {/* Project Filters */}
        <div className="projects-filters">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`filter-button ${activeFilter === filter.id ? 'active' : ''}`}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="project-card"
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
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-tech">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="view-more-container"
        >
          <a href="#" className="view-more-button">
            View All Projects
            <FaExternalLinkAlt />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 
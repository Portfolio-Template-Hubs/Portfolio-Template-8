import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaSearch, FaTimes } from 'react-icons/fa';
import './ProjectGallery.css';

const ProjectGallery = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)', transition: { duration: 0.3 } }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <>
      <div className="project-gallery">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="gallery-item"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="gallery-item-image-container">
              <img 
                src={project.image} 
                alt={project.title} 
                className="gallery-item-image" 
              />
              <div className="gallery-item-overlay">
                <button 
                  className="gallery-item-view-btn"
                  onClick={() => openModal(project)}
                  aria-label={`View details for ${project.title}`}
                >
                  <FaSearch /> View Details
                </button>
              </div>
            </div>
            <div className="gallery-item-content">
              <h3 className="gallery-item-title">{project.title}</h3>
              <p className="gallery-item-description">
                {project.description.length > 100
                  ? `${project.description.substring(0, 100)}...`
                  : project.description}
              </p>
              <div className="gallery-item-tech">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="gallery-item-tech-tag">{tech}</span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="gallery-item-tech-more">+{project.technologies.length - 3}</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div 
              className="project-modal-overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeModal}
            />
            <motion.div 
              className="project-modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button 
                className="project-modal-close"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
              
              <div className="project-modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              
              <div className="project-modal-content">
                <h2 className="project-modal-title">{selectedProject.title}</h2>
                <p className="project-modal-description">{selectedProject.description}</p>
                
                <div className="project-modal-tech">
                  <h3 className="project-modal-subtitle">Technologies Used</h3>
                  <div className="project-modal-tech-tags">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="project-modal-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-modal-links">
                  <a 
                    href={selectedProject.github} 
                    className="project-modal-link github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> View Code
                  </a>
                  <a 
                    href={selectedProject.live} 
                    className="project-modal-link live"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectGallery;
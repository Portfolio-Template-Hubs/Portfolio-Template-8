import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExpand, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Web Design Project',
      category: 'Web Design'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      alt: 'Mobile App Interface',
      category: 'UI/UX'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
      alt: 'Code Snippet',
      category: 'Development'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Business Meeting',
      category: 'Consulting'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      alt: 'Dashboard Design',
      category: 'UI/UX'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80',
      alt: 'Data Visualization',
      category: 'Development'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Mobile App Development',
      category: 'Development'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80',
      alt: 'UI Design Wireframes',
      category: 'UI/UX'
    }
  ];

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <motion.div 
            key={image.id} 
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            onClick={() => openLightbox(image, index)}
          >
            <div className="gallery-image-container">
              <img src={image.src} alt={image.alt} className="gallery-image" />
              <div className="gallery-overlay">
                <span className="gallery-category">{image.category}</span>
                <button className="gallery-expand-btn">
                  <FaExpand />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <motion.div 
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={closeLightbox}>
              <FaTimes />
            </button>
            <button className="lightbox-nav lightbox-prev" onClick={goToPrevious}>
              <FaChevronLeft />
            </button>
            <div className="lightbox-image-container">
              <img src={selectedImage.src} alt={selectedImage.alt} className="lightbox-image" />
              <div className="lightbox-caption">
                <span>{selectedImage.alt}</span>
                <span className="lightbox-category">{selectedImage.category}</span>
              </div>
            </div>
            <button className="lightbox-nav lightbox-next" onClick={goToNext}>
              <FaChevronRight />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
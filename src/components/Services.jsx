import { motion } from 'framer-motion';
import { FaCode, FaDesktop, FaMobileAlt, FaServer, FaDatabase, FaTools } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Custom websites built with modern technologies that are responsive, fast, and optimized for search engines.',
      gradient: 'linear-gradient(135deg, #2563eb, #7c3aed)'
    },
    {
      id: 2,
      icon: <FaDesktop />,
      title: 'UI/UX Design',
      description: 'User-centered design that focuses on creating intuitive, accessible, and visually appealing interfaces.',
      gradient: 'linear-gradient(135deg, #7c3aed, #db2777)'
    },
    {
      id: 3,
      icon: <FaMobileAlt />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that provide seamless user experiences across devices.',
      gradient: 'linear-gradient(135deg, #db2777, #f59e0b)'
    },
    {
      id: 4,
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Robust server-side applications with secure APIs, authentication systems, and database integration.',
      gradient: 'linear-gradient(135deg, #f59e0b, #10b981)'
    },
    {
      id: 5,
      icon: <FaDatabase />,
      title: 'Database Design',
      description: 'Efficient database architecture that ensures data integrity, security, and optimal performance.',
      gradient: 'linear-gradient(135deg, #10b981, #3b82f6)'
    },
    {
      id: 6,
      icon: <FaTools />,
      title: 'Maintenance & Support',
      description: 'Ongoing technical support, updates, and maintenance to keep your digital products running smoothly.',
      gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)'
    }
  ];

  return (
    <div className="services-container">
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div 
              className="service-icon-container" 
              style={{ background: service.gradient }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <motion.button 
              className="service-learn-more"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              Learn more
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
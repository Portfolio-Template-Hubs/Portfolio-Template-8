import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Timeline.css';

const Timeline = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      period: 'Jan 2022 - Present',
      description: 'Led the development of responsive web applications using React and Next.js. Implemented state management with Redux and optimized performance.',
      technologies: ['React', 'Next.js', 'Redux', 'TypeScript', 'Tailwind CSS']
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'InnovateLabs',
      location: 'Austin, TX',
      period: 'Mar 2020 - Dec 2021',
      description: 'Developed and maintained multiple client-facing web applications. Collaborated with cross-functional teams to implement new features.',
      technologies: ['React', 'JavaScript', 'SCSS', 'GraphQL', 'Jest']
    },
    {
      id: 3,
      title: 'Web Developer Intern',
      company: 'DigitalSolutions',
      location: 'Remote',
      period: 'Jun 2019 - Feb 2020',
      description: 'Assisted in the development of web applications and gained hands-on experience with modern web technologies.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap']
    },
  ];

  return (
    <div className="timeline-container">
      {experiences.map((experience, index) => (
        <motion.div 
          key={experience.id} 
          className="timeline-item"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="timeline-card">
            <div className="timeline-card-header">
              <h3 className="timeline-title">{experience.title}</h3>
              <div className="timeline-company">{experience.company}</div>
              <div className="timeline-meta">
                <div className="timeline-period">
                  <FaCalendarAlt className="timeline-meta-icon" />
                  <span>{experience.period}</span>
                </div>
                <div className="timeline-location">
                  <FaMapMarkerAlt className="timeline-meta-icon" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>
            
            <div className="timeline-card-body">
              <p className="timeline-description">{experience.description}</p>
              <div className="timeline-technologies">
                <div className="timeline-tech-tags">
                  {experience.technologies.map((tech, i) => (
                    <span key={i} className="timeline-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
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
      description: 'Led the development of responsive web applications using React and Next.js. Implemented state management with Redux and optimized performance. Mentored junior developers and collaborated with design team to create intuitive user interfaces.',
      achievements: [
        'Reduced page load time by 40% through code optimization',
        'Implemented CI/CD pipeline that decreased deployment time by 60%',
        'Led migration from legacy codebase to modern React architecture'
      ],
      technologies: ['React', 'Next.js', 'Redux', 'TypeScript', 'Tailwind CSS']
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'InnovateLabs',
      location: 'Austin, TX',
      period: 'Mar 2020 - Dec 2021',
      description: 'Developed and maintained multiple client-facing web applications. Collaborated with cross-functional teams to implement new features and improve existing functionality.',
      achievements: [
        'Built responsive UI components used across 5 major projects',
        'Implemented authentication system with OAuth 2.0',
        'Contributed to open-source libraries used by the company'
      ],
      technologies: ['React', 'JavaScript', 'SCSS', 'GraphQL', 'Jest']
    },
    {
      id: 3,
      title: 'Web Developer Intern',
      company: 'DigitalSolutions',
      location: 'Remote',
      period: 'Jun 2019 - Feb 2020',
      description: 'Assisted in the development of web applications and gained hands-on experience with modern web technologies. Participated in code reviews and team meetings.',
      achievements: [
        'Developed and implemented responsive email templates',
        'Created interactive data visualization components',
        'Optimized website performance and accessibility'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap']
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="timeline-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {experiences.map((experience, index) => (
        <motion.div 
          key={experience.id} 
          className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          variants={itemVariants}
        >
          <div className="timeline-content">
            <div className="timeline-icon">
              <FaBriefcase />
            </div>
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
                
                <div className="timeline-achievements">
                  <h4 className="timeline-section-title">Key Achievements</h4>
                  <ul className="timeline-achievement-list">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="timeline-achievement-item">{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="timeline-technologies">
                  <h4 className="timeline-section-title">Technologies</h4>
                  <div className="timeline-tech-tags">
                    {experience.technologies.map((tech, i) => (
                      <span key={i} className="timeline-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Timeline;
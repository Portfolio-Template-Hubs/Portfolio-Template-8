import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Company',
      location: 'New York, NY',
      period: '2022 - Present',
      description: [
        'Led the development of a new customer-facing web application',
        'Implemented modern UI/UX practices and improved performance',
        'Mentored junior developers and conducted code reviews',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      location: 'San Francisco, CA',
      period: '2020 - 2022',
      description: [
        'Developed and maintained multiple client projects',
        'Collaborated with designers to implement responsive designs',
        'Optimized application performance and user experience',
      ],
    },
    {
      title: 'Junior Developer',
      company: 'Startup Inc',
      location: 'Boston, MA',
      period: '2019 - 2020',
      description: [
        'Assisted in developing web applications',
        'Learned and implemented new technologies',
        'Participated in agile development processes',
      ],
    },
  ];

  return (
    <div className="experience-timeline">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="experience-item"
        >
          <div className="experience-icon">
            <FaBriefcase />
          </div>
          <div className="experience-content">
            <h3 className="experience-title">{exp.title}</h3>
            <div className="experience-company">{exp.company}</div>
            <div className="experience-details">
              <span className="experience-location">
                <FaMapMarkerAlt /> {exp.location}
              </span>
              <span className="experience-period">
                <FaCalendarAlt /> {exp.period}
              </span>
            </div>
            <ul className="experience-description">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience; 
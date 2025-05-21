import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Senior Software Engineer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: 'Leading development of enterprise-scale applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
      icon: <FaBriefcase />,
      skills: ['React', 'Node.js', 'AWS', 'MongoDB', 'Docker']
    },
    {
      type: 'education',
      title: 'Master of Computer Science',
      institution: 'Stanford University',
      period: '2020 - 2022',
      description: 'Specialized in Artificial Intelligence and Machine Learning. Graduated with honors and published research in computer vision.',
      icon: <FaGraduationCap />,
      skills: ['AI/ML', 'Python', 'TensorFlow', 'Research']
    },
    {
      type: 'work',
      title: 'Software Engineer',
      company: 'Digital Solutions Ltd.',
      period: '2018 - 2020',
      description: 'Developed and maintained web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality solutions.',
      icon: <FaBriefcase />,
      skills: ['JavaScript', 'React', 'Node.js', 'SQL']
    },
    {
      type: 'education',
      title: 'Bachelor of Computer Science',
      institution: 'MIT',
      period: '2014 - 2018',
      description: 'Focused on software engineering and data structures. Participated in various hackathons and coding competitions.',
      icon: <FaGraduationCap />,
      skills: ['Java', 'C++', 'Data Structures', 'Algorithms']
    }
  ];

  return (
    <div className="experience-container">
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="timeline-content">
              <div className="timeline-icon">
                {exp.icon}
              </div>
              <div className="timeline-details">
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-subtitle">
                  {exp.type === 'work' ? exp.company : exp.institution}
                </h4>
                <p className="timeline-period">{exp.period}</p>
                <p className="timeline-description">{exp.description}</p>
                <div className="timeline-skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="timeline-skill">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
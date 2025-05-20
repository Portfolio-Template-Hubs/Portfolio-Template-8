import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaChartLine } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Innovators Inc.',
      period: '2022 - Present',
      icon: <FaCode />,
      description: 'Led development of customer-facing web applications using React and TypeScript. Improved performance by 40% and mentored junior developers.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Agency',
      period: '2020 - 2022',
      icon: <FaUsers />,
      description: 'Developed multiple client projects using MERN stack. Implemented CI/CD pipelines and led a team of 4 developers.'
    },
    {
      title: 'Junior Developer',
      company: 'Startup Vision',
      period: '2019 - 2020',
      icon: <FaChartLine />,
      description: 'Assisted in developing web applications using React and Node.js. Contributed to frontend and backend development.'
    }
  ];

  return (
    <section className="experience-section">
      <div className="experience-container">
        <motion.div 
          className="experience-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="experience-title-main">Experience</h2>
          <p className="experience-subtitle">
            My professional journey
          </p>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="experience-icon">
                {exp.icon}
              </div>
              <div className="experience-content">
                <h3 className="experience-title">{exp.title}</h3>
                <div className="experience-company">{exp.company}</div>
                <div className="experience-period">{exp.period}</div>
                <p className="experience-description">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 
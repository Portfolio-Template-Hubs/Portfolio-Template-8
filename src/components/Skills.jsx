import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact />, level: 90 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
        { name: 'JavaScript', icon: <FaJs />, level: 85 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
        { name: 'Python', icon: <FaPython />, level: 80 },
        { name: 'Databases', icon: <FaDatabase />, level: 75 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 85 },
        { name: 'Docker', icon: <FaDocker />, level: 70 },
        { name: 'AWS', icon: <FaAws />, level: 65 },
      ],
    },
  ];

  return (
    <div className="skills-container">
      {skillCategories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="skills-category"
        >
          <h3 className="skills-category-title">{category.title}</h3>
          <div className="skills-grid">
            {category.skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.05 }}
                className="skill-card"
              >
                <div className="skill-icon">{skill.icon}</div>
                <h4 className="skill-name">{skill.name}</h4>
                <div className="skill-level">
                  <div 
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills; 
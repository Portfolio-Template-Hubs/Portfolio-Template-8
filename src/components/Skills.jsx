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
  FaFigma,
  FaSass,
  FaAngular,
  FaVuejs,
  FaPhp,
  FaJava,
  FaWordpress,
  FaGithub,
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiRedux } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces',
      skills: [
        { name: 'React', icon: <FaReact />, level: 90, color: '#61DAFB' },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: '#1572B6' },
        { name: 'JavaScript', icon: <FaJs />, level: 85, color: '#F7DF1E' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 80, color: '#3178C6' },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 85, color: '#000000' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 88, color: '#06B6D4' },
        { name: 'Sass', icon: <FaSass />, level: 85, color: '#CC6699' },
      ],
    },
    {
      title: 'Backend Development',
      description: 'Creating robust and scalable server-side applications',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 85, color: '#339933' },
        { name: 'Python', icon: <FaPython />, level: 80, color: '#3776AB' },
        { name: 'Databases', icon: <FaDatabase />, level: 75, color: '#336791' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 78, color: '#47A248' },
        { name: 'PHP', icon: <FaPhp />, level: 70, color: '#777BB4' },
        { name: 'Java', icon: <FaJava />, level: 65, color: '#007396' },
      ],
    },
    {
      title: 'Tools & Technologies',
      description: 'Mastering development tools and cloud platforms',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 85, color: '#F05032' },
        { name: 'GitHub', icon: <FaGithub />, level: 88, color: '#181717' },
        { name: 'Docker', icon: <FaDocker />, level: 70, color: '#2496ED' },
        { name: 'AWS', icon: <FaAws />, level: 65, color: '#232F3E' },
        { name: 'Figma', icon: <FaFigma />, level: 75, color: '#F24E1E' },
        { name: 'WordPress', icon: <FaWordpress />, level: 80, color: '#21759B' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <div className="skills-section">
      {skillCategories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: index * 0.1 }}
          className="skills-category"
        >
          <div className="skills-category-header">
            <h3 className="skills-category-title">{category.title}</h3>
            <p className="skills-category-description">{category.description}</p>
          </div>
          <motion.div 
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {category.skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                }}
                className="skill-card"
              >
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <h4 className="skill-name">{skill.name}</h4>
                <div className="skill-level">
                  <motion.div 
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{ 
                      background: `linear-gradient(90deg, ${skill.color} 0%, ${skill.color}99 100%)`
                    }}
                  />
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
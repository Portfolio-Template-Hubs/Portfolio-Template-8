import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate, FaStar, FaAward, FaGraduationCap } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      icon: <FaTrophy />,
      title: 'Best Web Developer Award',
      organization: 'Tech Innovation Summit',
      year: '2023',
      description: 'Recognized for outstanding contributions to web development and innovative solutions.'
    },
    {
      id: 2,
      icon: <FaMedal />,
      title: 'First Place Hackathon Winner',
      organization: 'Global Code Challenge',
      year: '2022',
      description: 'Led a team to victory by developing a revolutionary application in just 48 hours.'
    },
    {
      id: 3,
      icon: <FaCertificate />,
      title: 'Full-Stack Developer Certification',
      organization: 'Tech Academy',
      year: '2021',
      description: 'Completed advanced training in modern full-stack development technologies and methodologies.'
    },
    {
      id: 4,
      icon: <FaStar />,
      title: 'Featured Developer',
      organization: 'Developer Spotlight Magazine',
      year: '2022',
      description: 'Selected as a featured developer for contributions to open-source projects and community leadership.'
    },
    {
      id: 5,
      icon: <FaAward />,
      title: 'Excellence in UI/UX Design',
      organization: 'Design Innovation Awards',
      year: '2023',
      description: 'Awarded for creating exceptional user experiences and innovative interface designs.'
    },
    {
      id: 6,
      icon: <FaGraduationCap />,
      title: 'Master\'s Degree in Computer Science',
      organization: 'University of Technology',
      year: '2020',
      description: 'Graduated with honors, specializing in artificial intelligence and web technologies.'
    }
  ];

  return (
    <div className="achievements-container">
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            className="achievement-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ 
              y: -5, 
              boxShadow: '0 15px 30px rgba(0,0,0,0.1)', 
              transition: { duration: 0.3 } 
            }}
          >
            <div className="achievement-icon">
              {achievement.icon}
            </div>
            <div className="achievement-content">
              <h3 className="achievement-title">{achievement.title}</h3>
              <div className="achievement-meta">
                <span className="achievement-organization">{achievement.organization}</span>
                <span className="achievement-year">{achievement.year}</span>
              </div>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaTag, FaArrowRight } from 'react-icons/fa';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development in 2023',
      excerpt: 'Exploring the latest trends and technologies that are shaping the future of web development.',
      date: 'June 15, 2023',
      author: 'Your Name',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Mastering React Hooks for State Management',
      excerpt: 'A comprehensive guide to using React Hooks effectively for state management in your applications.',
      date: 'May 22, 2023',
      author: 'Your Name',
      category: 'React',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Designing User-Friendly Interfaces',
      excerpt: 'Learn the principles of creating intuitive and accessible user interfaces that enhance user experience.',
      date: 'April 10, 2023',
      author: 'Your Name',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
      readTime: '6 min read'
    }
  ];

  return (
    <div className="blog-container">
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <motion.article 
            key={post.id} 
            className="blog-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="blog-image-container">
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-category">{post.category}</div>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <div className="blog-meta-item">
                  <FaCalendarAlt className="blog-meta-icon" />
                  <span>{post.date}</span>
                </div>
                <div className="blog-meta-item">
                  <FaUser className="blog-meta-icon" />
                  <span>{post.author}</span>
                </div>
              </div>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-footer">
                <span className="blog-read-time">{post.readTime}</span>
                <motion.button 
                  className="blog-read-more"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  Read More <FaArrowRight className="blog-arrow-icon" />
                </motion.button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="blog-view-all">
        <motion.button 
          className="view-all-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Posts
        </motion.button>
      </div>
    </div>
  );
};

export default Blog;
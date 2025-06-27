// Projects.jsx
import { motion } from 'framer-motion';
import './index.css';

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const projects = [
  { title: 'Portfolio Site', description: 'Personal brand portfolio with 3D animations and blog.' },
  { title: 'E-commerce Platform', description: 'Full-stack store with admin panel and payment gateway.' },
  { title: 'NGO Landing Page', description: 'Donation-based site with real-time impact tracking.' }
];

function Projects() {
  return (
    <motion.div
      className="section"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2>Our Works</h2>
      <div className="card-grid">
        {projects.map((proj, index) => (
          <div className="card" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;

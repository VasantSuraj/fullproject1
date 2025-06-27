// Home.jsx
import { motion } from 'framer-motion';
import './index.css';

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

function Home() {
  return (
    <motion.div
      className="section"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2>Welcome to Wolf pack</h2>
      <p>
        We are a creative team building custom websites and full-stack solutions for startups,
        businesses, and entrepreneurs. Our goal is to deliver lightning-fast, visually engaging
        and fully functional digital experiences.
      </p>
      <button onClick={() => window.location.href = '/projects'}>Explore Projects</button>
    </motion.div>
  );
}

export default Home;

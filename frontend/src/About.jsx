// About.jsx
import { motion } from 'framer-motion';
import './index.css';

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

function About() {
  return (
    <motion.div
      className="section"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2>About Us</h2>
      <p>
        Wolfpack is powered by a group of passionate developers, designers, and innovators.
        Our mission is to build cutting-edge web experiences that push creative and performance boundaries.
        Whether you're a startup or an enterprise, we turn your ideas into immersive digital solutions.
      </p>
    </motion.div>
  );
}

export default About;
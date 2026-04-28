import { motion } from 'framer-motion';
import About from '../components/About';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      style={{ paddingTop: '4rem' }}
    >
      <div className="container text-center mb-5">
        <h1 className="section-title">About <span className="text-accent">Us</span></h1>
        <p className="section-subtitle">Our Story & Values</p>
      </div>
      <About />
    </motion.div>
  );
};

export default AboutPage;

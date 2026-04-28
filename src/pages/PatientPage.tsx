import { motion } from 'framer-motion';
import Insurance from '../components/Insurance';
import Testimonials from '../components/Testimonials';

const PatientPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      style={{ paddingTop: '4rem' }}
    >
      <div className="container text-center mb-5">
        <h1 className="section-title">Patient <span className="text-accent">Resources</span></h1>
        <p className="section-subtitle">Insurance & Feedback</p>
      </div>
      <Insurance />
      <Testimonials />
    </motion.div>
  );
};

export default PatientPage;

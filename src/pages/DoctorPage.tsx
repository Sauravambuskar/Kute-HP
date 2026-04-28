import { motion } from 'framer-motion';
import Doctor from '../components/Doctor';
import Specialists from '../components/Specialists';

const DoctorPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      style={{ paddingTop: '4rem' }}
    >
      <div className="container text-center mb-5">
        <h1 className="section-title">Our <span className="text-accent">Doctors</span></h1>
        <p className="section-subtitle">Meet the Experts</p>
      </div>
      <Doctor />
      <Specialists />
    </motion.div>
  );
};

export default DoctorPage;

import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Doctor from '../components/Doctor';
import Specialists from '../components/Specialists';
import Insurance from '../components/Insurance';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <About />
      <Services />
      <Doctor />
      <Specialists />
      <Insurance />
      <Testimonials />
    </motion.div>
  );
};

export default Home;

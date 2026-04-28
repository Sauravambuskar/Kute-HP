import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { useAppointment } from '../context/AppointmentContext';
import kuteHospitalPhoto from '../assets/kute-hospital-photo.png';
import './Hero.css';

const Hero = () => {
  const { openModal } = useAppointment();
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <img
          src={kuteHospitalPhoto}
          alt="Kute Hospital Building"
          className="hero-image"
        />
        <div className="hero-gradient"></div>
      </div>

      <div className="container hero-content">
        <motion.div 
          className="hero-text-wrapper"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="section-subtitle" style={{ background: 'rgba(255,255,255,0.1)', color: '#FFF', backdropFilter: 'blur(10px)' }}>
            Trusted Healthcare
          </div>
          <h1 className="hero-title">
            Caring for You,<br/><span className="text-accent" style={{ color: 'var(--clr-accent)' }}>Always.</span>
          </h1>
          <p className="hero-description">
            A Trusted Name in Healthcare. We provide world-class treatments, quick appointments, and timely solutions with the highest level of care.
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-primary" style={{ background: '#FFF', color: 'var(--clr-primary)' }} onClick={openModal}>
              Book Appointment <ArrowRight size={18} />
            </button>
            <a href="tel:+918888882225" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFF' }}>
              <PhoneCall size={18} /> Emergency Contact 
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <h3>14+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h3>24/7</h3>
              <p>Emergency Services</p>
            </div>
            <div className="stat-card">
              <h3>10+</h3>
              <p>Specialist Doctors</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

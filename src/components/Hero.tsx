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
        <div className="hero-gradient" />
      </div>

      <div className="container hero-content">
        <motion.div
          className="hero-text-wrapper"
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15 }}
        >
          {/* Live badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Trusted Healthcare Since 2010
          </div>

          {/* Headline */}
          <h1 className="hero-title">
            Caring for You,<br />
            <span className="hero-accent">Always.</span>
          </h1>

          {/* Sub-copy */}
          <p className="hero-description">
            Kute Hospital & Laparoscopy Centre — bringing advanced multispecialty
            care to Sangamner. World-class treatments, quick appointments, and
            compassionate support when it matters most.
          </p>

          {/* CTAs */}
          <div className="hero-actions">
            <button className="hero-btn-primary" onClick={openModal}>
              Book Appointment <ArrowRight size={18} />
            </button>
            <a href="tel:+918888882225" className="hero-btn-outline">
              <PhoneCall size={18} /> Emergency: +91 88888 82225
            </a>
          </div>

          {/* Stats row */}
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
            <div className="stat-card">
              <h3>30+</h3>
              <p>Insurance Partners</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

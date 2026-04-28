import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft, Calendar } from 'lucide-react';
import { servicesData } from '../data/services';
import { useAppointment } from '../context/AppointmentContext';
import './ServiceDetails.css';

const ServiceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { openModal } = useAppointment();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
        <h2>Service not found</h2>
        <Link to="/services" className="btn btn-primary mt-4">Back to Services</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="service-details-page"
    >
      <div className="service-details-hero">
        <div className="hero-overlay"></div>
        <img src={service.image} alt={service.title} className="hero-bg-img" />
        <div className="container sd-hero-content">
          <Link to="/services" className="back-link">
            <ArrowLeft size={18} /> Back to All Services
          </Link>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hero-lead"
          >
            {service.shortDesc}
          </motion.p>
        </div>
      </div>

      <div className="container details-content-area">
        <div className="details-grid">
          <div className="main-content">
            <h2>About this Service</h2>
            <p className="full-desc">{service.fullDesc}</p>
            
            <h3 className="mt-4">Key Benefits</h3>
            <ul className="benefits-list">
              {service.benefits.map((benefit, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <CheckCircle2 className="benefit-icon" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="sidebar">
            <div className="booking-card glass-panel">
              <h3>Need a consultation?</h3>
              <p>Book an appointment with our specialists today to get the best care.</p>
              <button className="btn btn-primary full-width" onClick={openModal}>
                <Calendar size={18} /> Book Appointment
              </button>
              <div className="emergency-contact">
                <span>Emergency?</span>
                <a href="tel:+918888882225">+91 8888882225</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetails;

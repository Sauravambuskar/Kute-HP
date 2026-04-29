import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft, Calendar, ShieldCheck, ClipboardList, Activity } from 'lucide-react';
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

  const { extended } = service;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="service-details-page"
    >
      {/* ── Hero Banner ── */}
      <div className="service-details-hero">
        <div className="hero-overlay"></div>
        <img
          src={service.image}
          alt={service.title}
          className="hero-bg-img"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
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

      {/* ── Stats Bar (extended only) ── */}
      {extended?.stats && (
        <div className="sd-stats-bar">
          <div className="container">
            <div className="sd-stats-grid">
              {extended.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="sd-stat-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="sd-stat-value">{stat.value}</span>
                  <span className="sd-stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Main Content Area ── */}
      <div className="container details-content-area">
        <div className="details-grid">

          {/* ── Left Column ── */}
          <div className="main-content">

            {/* About */}
            <h2>About this Service</h2>
            <p className="full-desc">{service.fullDesc}</p>

            {/* Extra images strip (extended only) */}
            {extended?.extraImages && extended.extraImages.length > 0 && (
              <div className="sd-extra-images">
                {extended.extraImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${service.title} facility`}
                    className="sd-extra-img"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                ))}
              </div>
            )}

            {/* Procedures (extended only) */}
            {extended?.procedures && (
              <motion.div
                className="sd-section"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="sd-section-header">
                  <Activity className="sd-section-icon" size={22} />
                  <h3>Procedures & Diagnostics</h3>
                </div>
                <div className="sd-procedures-grid">
                  {extended.procedures.map((proc, i) => (
                    <motion.div
                      key={i}
                      className="sd-procedure-card"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <h4>{proc.name}</h4>
                      <p>{proc.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Conditions Treated (extended only) */}
            {extended?.conditions && (
              <motion.div
                className="sd-section"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="sd-section-header">
                  <ClipboardList className="sd-section-icon" size={22} />
                  <h3>Conditions We Treat</h3>
                </div>
                <ul className="sd-conditions-list">
                  {extended.conditions.map((cond, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <CheckCircle2 size={16} className="cond-icon" />
                      <span>{cond}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Why Choose Us (extended only) */}
            {extended?.whyChooseUs && (
              <motion.div
                className="sd-section"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="sd-section-header">
                  <ShieldCheck className="sd-section-icon" size={22} />
                  <h3>Why Choose Our Department</h3>
                </div>
                <div className="sd-why-grid">
                  {extended.whyChooseUs.map((item, i) => (
                    <motion.div
                      key={i}
                      className="sd-why-card"
                      initial={{ opacity: 0, scale: 0.97 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="sd-why-number">0{i + 1}</span>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Key Benefits */}
            <div className="sd-section">
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
          </div>

          {/* ── Sidebar ── */}
          <div className="sidebar">
            <div className="booking-card glass-panel">
              <h3>Need a consultation?</h3>
              <p>Book an appointment with our specialists today to get the best cardiac care.</p>
              <button className="btn btn-primary full-width" onClick={openModal}>
                <Calendar size={18} /> Book Appointment
              </button>
              <div className="emergency-contact">
                <span>Cardiac Emergency?</span>
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

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import iconMap from '../utils/iconMap';
import '../components/Services.css';

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="services-section"
      style={{ paddingTop: '4rem', paddingBottom: '6rem' }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-subtitle">Our Expertise</span>
          <h1 className="section-title">All <span className="text-accent">Services</span></h1>
          <p className="services-lead" style={{ margin: '0 auto' }}>
            Comprehensive healthcare solutions provided by expert medical professionals.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="service-icon-wrapper">
                  {iconMap[service.iconName]}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.shortDesc}</p>
                <Link to={`/services/${service.id}`} className="service-link">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;

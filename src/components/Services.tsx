import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import iconMap from '../utils/iconMap';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-header">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Our Services</span>
            <h2 className="section-title">World-Class <span className="text-accent">Healthcare</span></h2>
            <p className="services-lead">
              We specialize in laparoscopic surgery and offer a wide range of other super-specialty treatments.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="services-header-action"
          >
            <Link to="/services" className="btn btn-outline">
              View All Services <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            >
              {/* Service image */}
              <div className="service-img-wrap">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-img"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="service-img-overlay">
                  <div className="service-icon-badge">
                    {iconMap[service.iconName]}
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="service-body">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.shortDesc}</p>
                <Link to={`/services/${service.id}`} className="service-link">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

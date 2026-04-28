import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import './Insurance.css';

const tpaProviders = [
  "CIGNA TTK", "DHS", "E-MEDITEK", "FHPL", "HEALTH INDIA", "HEALTH INSURANCE",
  "IFFKO TOKIO", "LIBERTY GEN INS", "MD INDIA", "MEDI ASIST", "PARAMOUNT",
  "VIDAL HEALTH", "VIPUL MEDCORP", "RAKSHA", "TATA AIG", "MEDI CARE"
];

const privateProviders = [
  "ADITYA BIRLA HEALTH INSURANCE", "APOLLO MUNICH HEALTH INSURANCE",
  "RELIANCE GENERAL INSURANCE", "BAJAJ ALLIANZ", "CHOLMANDALAM",
  "FUTURE GENERAL", "HDFC ERGO", "ICICI LOMBARD", "RELIGARE",
  "STAR HEALTH", "UNIVERSAL SOMPO", "MAX BUPA", "UNITED HEALTHCARE PAREKH",
  "ERICSON TPA", "ROTHSHIELD TPA"
];

const Insurance = () => {
  return (
    <section className="insurance-section">
      <div className="container">
        <div className="insurance-container">
          <motion.div 
            className="insurance-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="insurance-icon-wrapper">
              <ShieldCheck size={32} />
            </div>
            <div>
              <span className="section-subtitle">Financial Support</span>
              <h2 className="section-title text-white">Cashless <span className="text-accent">Mediclaim Facility</span></h2>
              <p className="insurance-lead">
                We are tied up with major TPA and Private Insurance companies to provide you a hassle-free, cashless treatment experience.
              </p>
            </div>
          </motion.div>

          <div className="insurance-grid">
            <motion.div 
              className="insurance-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3>TPA Providers</h3>
              <ul className="provider-list">
                {tpaProviders.map((provider, index) => (
                  <li key={index}>
                    <span className="bullet"></span>
                    {provider}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="insurance-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3>Private IC Providers</h3>
              <ul className="provider-list">
                {privateProviders.map((provider, index) => (
                  <li key={index}>
                    <span className="bullet"></span>
                    {provider}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insurance;

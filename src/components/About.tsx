import { motion } from 'framer-motion';
import { Target, Lightbulb, Heart, Shield, Activity } from 'lucide-react';
import kuteStaffPhoto from '../assets/kute-ss351.png';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-decoration"></div>
            <img
              src={kuteStaffPhoto}
              alt="Kute Hospital Medical Team"
              className="about-main-image"
            />
            <div className="about-floating-card glass-panel">
              <span className="card-title">Founded</span>
              <span className="card-value">2010</span>
              <span className="card-desc">Serving Rural Communities</span>
            </div>
          </motion.div>

          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="section-subtitle">Our Story</span>
            <h2 className="section-title">Committed to <span className="text-accent">Excellence</span></h2>
            
            <p className="about-text">
              Welcome to Kute Hospital, inspired by the vision of Mr. Bhausaheb Damodar Kute. His dedication to improving community health laid the foundation for our Hospital & Dr. Pradeep Kute’s leadership plays a significant role in the hospital’s development.
            </p>
            <p className="about-text">
              Established on June 13, 2010, Kute Hospital and Laparoscopy Centre aims to bring advanced medical care to rural areas, providing treatments typically found only in big cities. Our mission is to serve communities with compassion and excellence.
            </p>

            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon"><Target /></div>
                <h4>Our Mission</h4>
                <p>To be the best Multispeciality & tertiary care center in India imparting high quality care.</p>
              </div>
              <div className="value-item">
                <div className="value-icon"><Lightbulb /></div>
                <h4>Our Vision</h4>
                <p>Quality Treatment at rational cost. Providing all Services Under one roof with continuous improvement.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div 
          className="core-values-wrapper"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-4">
            <h3 className="sub-heading">Our Core Values</h3>
          </div>
          
          <div className="core-values-grid">
            <div className="core-value-card">
              <div className="cv-number">01</div>
              <Heart className="cv-icon" />
              <h4>Compassion</h4>
              <p>Understanding and caring for patients by attentive listening and putting ourselves in their shoes.</p>
            </div>
            <div className="core-value-card">
              <div className="cv-number">02</div>
              <Activity className="cv-icon" />
              <h4>Progression</h4>
              <p>Constantly learning new trends and adopting advanced technologies in the medical field.</p>
            </div>
            <div className="core-value-card">
              <div className="cv-number">03</div>
              <Shield className="cv-icon" />
              <h4>Respect</h4>
              <p>Treating everyone we meet with the dignity and respect they deserve, patient or colleague.</p>
            </div>
            <div className="core-value-card">
              <div className="cv-number">04</div>
              <Target className="cv-icon" />
              <h4>Courage</h4>
              <p>Having the courage to do what is right, knowing it is for the better good of the patient ahead.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

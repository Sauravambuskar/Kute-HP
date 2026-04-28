import { Phone, Mail, MapPin, ArrowRight, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';
import kuteLogo from '../assets/kute-hospital-logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="contact-cards">
            <div className="contact-card">
              <div className="cc-icon"><Phone size={24} /></div>
              <div className="cc-info">
                <h4>Enquiry Number</h4>
                <a href="tel:+918888882225">+91 8888882225</a>
              </div>
            </div>
            <div className="contact-card">
              <div className="cc-icon"><Phone size={24} /></div>
              <div className="cc-info">
                <h4>Medical Helpline</h4>
                <a href="tel:+918888732225">+91 8888732225</a>
              </div>
            </div>
            <div className="contact-card">
              <div className="cc-icon" style={{ backgroundColor: '#fff', color: '#e53e3e' }}>
                <HeartPulse size={24} />
              </div>
              <div className="cc-info">
                <h4>Ambulance Service</h4>
                <a href="tel:+918888372225" style={{ color: '#e53e3e', fontWeight: 'bold' }}>+91 8888372225</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo-link">
              <div className="footer-logo-badge">
                <img src={kuteLogo} alt="Kute Hospital" className="footer-logo-img" />
              </div>
            </Link>
            <p className="footer-desc">
              Caring for You, Always. A trusted name in healthcare providing world-class treatment and emergency services in Sangamner.
            </p>
            <div className="social-links">
              {/* Add social icons if needed */}
            </div>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/"><ArrowRight size={14} /> Home</Link></li>
              <li><Link to="/about"><ArrowRight size={14} /> About Us</Link></li>
              <li><Link to="/services"><ArrowRight size={14} /> Services</Link></li>
              <li><Link to="/doctor"><ArrowRight size={14} /> Meet Dr. Kute</Link></li>
              <li><Link to="/patients"><ArrowRight size={14} /> Patients</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Support</h3>
            <ul>
              <li><a href="tel:+918888882225"><ArrowRight size={14} /> Call Us</a></li>
              <li><a href="mailto:info@kutehospital.com"><ArrowRight size={14} /> Email Us</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Location</h3>
            <div className="location-info">
              <MapPin size={20} className="loc-icon" />
              <p>Sangamner City and Taluka, Maharashtra, India</p>
            </div>
            <div className="location-info mt-2">
              <Mail size={20} className="loc-icon" />
              <p>info@kutehospital.com</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright &copy; {new Date().getFullYear()} Kute Hospital. All Rights Reserved.</p>
          <button className="scroll-top" onClick={() => window.scrollTo(0, 0)}>
            Scroll to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

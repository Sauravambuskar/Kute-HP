import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, PhoneCall, HeartPulse, CheckCircle2 } from 'lucide-react';
import { useAppointment } from '../context/AppointmentContext';
import './AppointmentModal.css';

const AppointmentModal = () => {
  const { isOpen, closeModal } = useAppointment();
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    closeModal();
    setTimeout(() => setSubmitted(false), 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={handleClose}
        >
          <motion.div
            className="modal-panel glass-panel"
            initial={{ opacity: 0, y: 48, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 48, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={handleClose} aria-label="Close">
              <X size={18} />
            </button>

            <div className="modal-header">
              <div className="modal-logo-icon">
                <HeartPulse size={22} color="#FFF" />
              </div>
              <h2>Book an Appointment</h2>
              <p>Call us directly or leave your details and we'll reach out.</p>
            </div>

            <div className="modal-phones">
              <a href="tel:+918888882225" className="modal-phone-card primary" onClick={handleClose}>
                <div className="mpc-icon"><PhoneCall size={20} /></div>
                <div>
                  <span>Main Enquiry</span>
                  <strong>+91 8888882225</strong>
                </div>
              </a>
              <a href="tel:+918888732225" className="modal-phone-card" onClick={handleClose}>
                <div className="mpc-icon"><Phone size={20} /></div>
                <div>
                  <span>Medical Helpline</span>
                  <strong>+91 8888732225</strong>
                </div>
              </a>
            </div>

            <div className="modal-divider"><span>or leave a callback request</span></div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="modal-success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <CheckCircle2 size={48} className="success-icon" />
                  <h3>Request Received!</h3>
                  <p>Our team will call you back shortly. For urgent care, please call us directly.</p>
                  <button className="btn btn-primary" onClick={handleClose}>Done</button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  className="modal-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="appt-name">Full Name</label>
                      <input id="appt-name" name="name" type="text" placeholder="e.g. Rahul Sharma" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="appt-phone">Phone Number</label>
                      <input id="appt-phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="appt-service">Preferred Service</label>
                    <select id="appt-service" name="service">
                      <option value="">Select a service (optional)</option>
                      <option>Emergency Department</option>
                      <option>Laparoscopic Surgery</option>
                      <option>Plastic Surgery</option>
                      <option>Cancer Surgery</option>
                      <option>Orthopaedic &amp; Trauma</option>
                      <option>Cardiology</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary modal-submit">
                    Request Callback
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppointmentModal;

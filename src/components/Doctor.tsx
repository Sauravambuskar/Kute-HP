import { motion } from 'framer-motion';
import { Award, CheckCircle, GraduationCap } from 'lucide-react';
import { useAppointment } from '../context/AppointmentContext';
import kuteDoctorPhoto from '../assets/kute-ss345.png';
import './Doctor.css';

const Doctor = () => {
  const { openModal } = useAppointment();
  return (
    <section id="doctor" className="doctor-section">
      <div className="container">
        <div className="doctor-grid">
          <motion.div 
            className="doctor-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Lead Physician</span>
            <h2 className="section-title">Meet Dr. <span className="text-accent">Pradeep Kute</span></h2>
            
            <p className="doctor-text">
              Dr. Pradeep Kute is a highly knowledgeable and experienced doctor. With over 14 years of experience, he has a deep understanding of various medical conditions and treatments, diagnosing complex cases and providing effective care.
            </p>
            <p className="doctor-text">
              Associated with a highly equipped hospital, Dr. Kute has access to advanced medical technologies, ensuring better diagnosis and treatment options. He prioritizes patient well-being, clear communication, and a patient-centered approach to medicine.
            </p>

            <div className="doctor-stats-grid">
              <div className="doctor-stat">
                <div className="d-stat-icon"><Award size={24} /></div>
                <div>
                  <h4>14+ Years</h4>
                  <p>of Experience</p>
                </div>
              </div>
              <div className="doctor-stat">
                <div className="d-stat-icon"><CheckCircle size={24} /></div>
                <div>
                  <h4>High Quality</h4>
                  <p>Care & Service</p>
                </div>
              </div>
              <div className="doctor-stat">
                <div className="d-stat-icon"><GraduationCap size={24} /></div>
                <div>
                  <h4>Advanced</h4>
                  <p>Medical Technologies</p>
                </div>
              </div>
            </div>
            
            <button className="btn btn-primary mt-4" onClick={openModal}>
              Book Appointment
            </button>
          </motion.div>

          <motion.div 
            className="doctor-image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="doctor-image-backdrop"></div>
            <img
              src={kuteDoctorPhoto}
              alt="Dr. Pradeep Kute"
              className="doctor-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Doctor;

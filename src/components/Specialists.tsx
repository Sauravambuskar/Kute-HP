import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import './Specialists.css';

const specialists = [
  {
    category: "Brain & Spine Surgeon",
    doctors: [
      { name: "Dr. Uday Bade", schedule: "Every Tuesday, Friday & Sunday" },
      { name: "Dr. Anil Jadhav", schedule: "1st & 3rd Friday" },
      { name: "Dr. Samir Phutane", schedule: "2nd & 4th Tuesday" }
    ]
  },
  {
    category: "Surgical Gastroenterologist",
    doctors: [
      { name: "Dr. Prakash Valse", schedule: "On call" },
      { name: "Dr. Prashant Patil", schedule: "3rd Monday" },
      { name: "Dr. Manoj Bhambre", schedule: "On call" }
    ]
  },
  {
    category: "Neurosurgeon",
    doctors: [
      { name: "Dr. Vijay Ghuge", schedule: "Every Wednesday" },
      { name: "Dr. Nahush Patil", schedule: "1st & 3rd Friday" },
      { name: "Dr. Ninad Thorat", schedule: "1st & 3rd Saturday" },
      { name: "Dr. Dhananjay Duberkar", schedule: "2nd Wednesday" },
      { name: "Dr. Sumant Biyani", schedule: "2nd & 4th Friday" },
      { name: "Dr. Amit Yewale", schedule: "2nd & 4th Saturday" }
    ]
  },
  {
    category: "Uro Surgeon",
    doctors: [
      { name: "Dr. Narsingh Mane", schedule: "Every Wednesday & Saturday" }
    ]
  },
  {
    category: "Nephrologist",
    doctors: [
      { name: "Dr. Pratik Shete", schedule: "Every Saturday" },
      { name: "Dr. Nagesh Aghor", schedule: "2nd Wednesday" },
      { name: "Dr. Prakash Ugale", schedule: "3rd Wednesday" }
    ]
  },
  {
    category: "Other Specialists",
    doctors: [
      { name: "Dr. Ashutosh Sonwane", specialty: "Thyroid", schedule: "1st Sunday" },
      { name: "Dr. Ashutosh Aher", specialty: "Vascular Surgeon", schedule: "2nd Tuesday" },
      { name: "Dr. Satish Kapadnis", specialty: "Pediatric Surgeon", schedule: "2nd & 4th Wednesday" },
      { name: "Dr. Jyoti Ugale", specialty: "Psychiatrist", schedule: "4th Thursday" },
      { name: "Dr. Vinayak Shenge", specialty: "Cancer Surgeon", schedule: "On Call" },
      { name: "Dr. Nikhil Rahangdale", specialty: "Orthopedic Surgeon", schedule: "On Call" },
      { name: "Dr. Lalit Darle", specialty: "Plastic Surgeon", schedule: "Every Saturday" }
    ]
  }
];

const Specialists = () => {
  return (
    <section className="specialists-section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-subtitle">Expert Care</span>
          <h2 className="section-title">Specialist <span className="text-accent">Doctor Visits</span></h2>
          <p className="specialists-lead">
            We bring highly experienced super-specialty doctors right to your city.
          </p>
        </div>

        <div className="specialists-grid">
          {specialists.map((group, index) => (
            <motion.div 
              key={index}
              className="specialist-category-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="category-header">
                <h3>{group.category}</h3>
              </div>
              <div className="specialist-list">
                {group.doctors.map((doc, idx) => (
                  <div key={idx} className="specialist-item">
                    <div className="specialist-info">
                      <h4>{doc.name}</h4>
                      {'specialty' in doc && doc.specialty && <span className="specialty-tag">{doc.specialty}</span>}
                    </div>
                    <div className="specialist-schedule">
                      <Calendar size={14} />
                      <span>{doc.schedule}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialists;

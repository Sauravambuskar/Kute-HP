import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const reviews = [
  {
    name: "Rakesh Shinde",
    review: "The cleanliness maintained by the hospital. Excellent service and ambiance, Doctors panel is very strong. The best hospital in sangamner city. well connected.",
    rating: 5
  },
  {
    name: "Vaishanvi Mahesh Murtadak",
    review: "Dr. Pradeep Kute was fantastic. Knowledgeable, caring, and informative. Felt at ease and confident in receiving expert medical care. Highly recommended.",
    rating: 5
  },
  {
    name: "Somnath",
    review: "One of the standout features of Kute Hospital is its state-of-the-art equipment, ensuring accurate diagnostics and effective treatments for patients.",
    rating: 5
  },
  {
    name: "Sachin",
    review: "Thanks to the nurses, pre-op staff, and theater staff for their kindness and proficiency during my surgery. Grateful for everyone's care.",
    rating: 5
  },
  {
    name: "Anuj Sharma",
    review: "Kute Hospital: Where compassionate care and skilled professionals come together to ensure your well-being every step of the way.",
    rating: 5
  },
  {
    name: "Aniket Jagatap",
    review: "The premier emergency facility in Sangamner City and Taluka, welcomes all patients with top-notch services available 24/7.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header text-center mb-5">
          <span className="section-subtitle">Patient Feedback</span>
          <h2 className="section-title">What Our <span className="text-accent">Patients Say</span></h2>
          <p className="testimonials-lead">
            Kute Hospital, the premier emergency facility in Sangamner City, welcomes all patients with top-notch services.
          </p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote className="quote-icon" size={40} />
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#C19F62" color="#C19F62" />
                ))}
              </div>
              <p className="review-text">"{review.review}"</p>
              <div className="reviewer-info">
                <div className="avatar">
                  {review.name.charAt(0)}
                </div>
                <h4>{review.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

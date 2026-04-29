import { motion } from 'framer-motion';
import './Gallery.css';

const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1579154491781-5e199df316aa?q=80&w=900&auto=format&fit=crop',
    alt: 'Modern Operation Theatre',
    label: 'Operation Theatre',
  },
  {
    src: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=900&auto=format&fit=crop',
    alt: 'Hospital Emergency Department',
    label: 'Emergency Department',
  },
  {
    src: 'https://images.unsplash.com/photo-1551076805-e18690c5e561?q=80&w=900&auto=format&fit=crop',
    alt: 'Surgical Instruments & Equipment',
    label: 'Surgical Equipment',
  },
  {
    src: 'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=900&auto=format&fit=crop',
    alt: 'Radiology & Imaging',
    label: 'Diagnostics & Radiology',
  },
  {
    src: 'https://images.unsplash.com/photo-1631651365457-d52b7b3a7e79?q=80&w=900&auto=format&fit=crop',
    alt: 'X-Ray & Spine Imaging',
    label: 'Advanced Imaging',
  },
  {
    src: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=900&auto=format&fit=crop',
    alt: 'Cardiac & Critical Care',
    label: 'Intensive Care Unit',
  },
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <div className="container">
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-subtitle">Our Facilities</span>
            <h2 className="section-title">
              World-Class <span className="text-accent">Infrastructure</span>
            </h2>
            <p className="gallery-lead">
              State-of-the-art facilities and advanced medical technology to ensure the best patient outcomes.
            </p>
          </motion.div>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="gallery-img"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.classList.add('gallery-img-error');
                  }
                }}
              />
              <div className="gallery-overlay">
                <span className="gallery-label">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
